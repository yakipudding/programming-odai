import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import { getOdaisByTag } from '../../biz/DBAccessor'
import OdaiList from '../common/OdaiList'
import { CommonStyle } from '../../style/CommonStyle'

// お題一覧
function OdaiSearch(props) {
  const commonClasses = CommonStyle();
  let params = {}
  decodeURI(props.location.search)
    .substring(1) //?削除
    .split('&') //&分割
    .map( param => {
      const temp = param.split('=') //=分割
      params = {
        ...params,
        [temp[0]]: temp[1]
      }
  })
  const [init] = useState({
    query: params
  });
  const [odais, setOdais] = useState(null);
  useEffect(() => {
    // firebaseから取得
    setOdais(getOdaisByTag(init.query['tag'], setOdais))
  }, [init]);

  if(odais){
    return (
      <Container maxWidth="sm" className={commonClasses.root}>
        <h1>お題一覧</h1>
        <OdaiList odais={odais}/>
      </Container>
    );
  }
  else{
    return null
  }
}

export default OdaiSearch;