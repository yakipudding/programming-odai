import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import { getOdaisByMode, getOdaisByTag } from '../../biz/DBAccessor'
import { gerUriParams } from '../../biz/QueryParamsUtil'
import OdaiList from '../common/OdaiList'

// お題検索
function OdaiSearch(props) {
  const [init] = useState({
    params: gerUriParams(props.location.search)
  });
  const [values, setValues] = useState(null);
  useEffect(() => {
    // firebaseから取得
    if(init.params.mode)
    {
      let title = init.params.mode === 'popular' ? '人気のお題' : '新着のお題'
      getOdaisByMode(init.params.mode).then((odais) => {
        setValues({
          title: title,
          odais: odais,
        })
      })
    }
    else if(init.params.tag)
    {
      // タグ：{init.params.tag} のお題一覧
      getOdaisByTag(init.params.tag, setValues).then((odais) => {        
        setValues({
          title: `タグ：${init.params.tag} のお題一覧`,
          odais: odais
        })
      })
    }
  }, [init]);

  if(values){
    return (
      <Container maxWidth="sm">
        <h1>{values.title}</h1>
        <OdaiList odais={values.odais}/>
      </Container>
    );
  }
  else{
    return null
  }
}

export default OdaiSearch;