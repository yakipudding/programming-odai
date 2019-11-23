import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Container from '@material-ui/core/Container';
import Markdown from 'react-markdown'
import HeadingRenderer from '../../biz/Renderer'
import { getOdaiById } from '../../biz/DBAccessor'
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
      getOdaiById(init.odaiId, setOdaiValues)
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
        <div className={classes.header}>
          <h1 className={classes.title}>{values.title}</h1>
          <FavoriteIcon className={classes.like} color="disabled" />
          <span className={classes.likecount}>{values.likecount || 0}</span>
        </div>
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