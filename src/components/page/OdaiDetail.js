import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Markdown from 'react-markdown'
import HeadingRenderer from '../../biz/Renderer'
import { getOdai } from '../../biz/DBAccessor'
import Tags from '../common/Tags'
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

  if(values){
    return (
      <Container maxWidth="sm" className={classes.root}>
        <h1>{values.title}</h1>
        <Tags tags={values.tags} />
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