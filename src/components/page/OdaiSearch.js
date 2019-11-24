import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import { getOdaisByTag } from '../../biz/DBAccessor'
import { gerUriParams } from '../../biz/QueryParamsUtil'
import OdaiList from '../common/OdaiList'
import { CommonStyle } from '../../style/CommonStyle'

// タグページ
function OdaiSearch(props) {
  const commonClasses = CommonStyle();
  const [init] = useState({
    params: gerUriParams(props.location.search)
  });
  const [odais, setOdais] = useState(null);
  useEffect(() => {
    // firebaseから取得
    setOdais(getOdaisByTag(init.params.tag, setOdais))
  }, [init]);

  if(odais){
    return (
      <Container maxWidth="sm" className={commonClasses.root}>
        <h1>タグ：{init.params.tag} のお題一覧</h1>
        <OdaiList odais={odais}/>
      </Container>
    );
  }
  else{
    return null
  }
}

export default OdaiSearch;