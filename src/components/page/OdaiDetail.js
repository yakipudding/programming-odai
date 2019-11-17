import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Markdown from 'react-markdown'
import HeadingRenderer from '../../biz/Renderer'
import { getOdai } from '../../biz/DBAccessor'
import { OdaiDetailStyle } from '../../style/CommonStyle'

function OdaiDetail(props) {
  const classes = OdaiDetailStyle();
  const [init] = useState({
    odaiId: props.match.params.id,
  });
  const [values, setValues] = useState(null);

  // 初期処理
  useEffect(() => {
    if (init.odaiId) {
      //firebaseから取得
      getOdai(init.odaiId, setOdaiValues)
    }
  }, [init]
  );

  const setOdaiValues = (odai) => {
    setValues({
          ...odai,
        });
  }

  const handleTagClick = (event, rowData) => {
    this.props.history.push('/OdaiDetail/' + rowData.id);
  }

  if(values){
    return (
      <Container maxWidth="sm" className={classes.root}>
        <h1>{values.title}</h1>
        <div>
          {values.tags && values.tags.split(' ').map((tag, index) => {
            return (<Chip
              key={index}
              size="small"
              label={tag}
              onClick={handleTagClick}
              className={classes.chip}
            />)
            }
          )}
        </div>
        <Markdown 
          source={values.content} 
          className="previewField" 
          renderers={{heading: HeadingRenderer}} 
        />
      </Container>
    );
  }
  else{
    return null
  }
}

export default OdaiDetail;