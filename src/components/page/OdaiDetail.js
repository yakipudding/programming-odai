import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Markdown from 'react-markdown'
import HeadingRenderer from '../../biz/Renderer'
import { getOdaiByIdWithLike, setOdaiLike } from '../../biz/DBAccessor'
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
      getOdaiByIdWithLike(init.odaiId, setOdaiValues)
    }
  }, [init]
  );

  const setOdaiValues = (odai) => {
    setValues({
          ...odai,
        });
  }
  const handleLike = event => {
    let addLikeCount = values.like ? -1 : 1;
    setOdaiLike(init.odaiId, !values.like)
    setValues({
          ...values,
          like: !values.like,
          likecount: values.likecount + addLikeCount,
        });
  }

  if(values){
    return (
      <Container maxWidth="sm" className={classes.root}>
        <div className={classes.header}>
          <h1 className={classes.title}>{values.title}</h1>
          <IconButton
            aria-label="like"
            color="primary"
            onClick={handleLike}
          >
            <FavoriteIcon color={values.like ? "primary" : "disabled" } />
          </IconButton>
          <span className={classes.likecount}>{values.likecount}</span>
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