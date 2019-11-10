import React, { useState, useEffect } from 'react';
import { database } from '../../config/FirebaseConfig'
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Markdown from 'react-markdown'
import HeadingRenderer from '../../biz/Renderer'
import { OdaiDetailStyle } from '../../style/CommonStyle'

function OdaiDetail(props) {
  const odaiId = props.match.params.id;
  const classes = OdaiDetailStyle();
  const [status, setStatus] = useState({
    init: true,
  });
  const [values, setValues] = useState(null);

  // 初期処理
  useEffect(() => {
    if (odaiId) {
      //firestoreから取得
      var ref = database.ref("odais/" + odaiId);
      ref.once("value")
        .then((odai) => {
          setValues({
            ...odai.val(),
          });
        });
      return
    }
  }, [status]
  );
  
  const handleClick = (event, rowData) => {
    this.props.history.push('/OdaiDetail/' + rowData.id);
  }

  if(values){
    return (
      <Container maxWidth="sm" className={classes.root}>
        <h1>{values.title}</h1>
        <div>
          {values.tags && values.tags.split(' ').map(tag => {
              if(tag != ''){
                return (<Chip
                  size="small"
                  label={tag}
                  onClick={handleClick}
                  className={classes.chip}
                />)
              }
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