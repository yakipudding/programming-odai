import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import { getOdaisLatest } from '../../biz/DBAccessor'
import OdaiList from '../common/OdaiList'
import { CommonStyle } from '../../style/CommonStyle'

// 新着お題
function OdaiLatest(props) {
  const commonClasses = CommonStyle();
  const [init] = useState(true);
  const [odais, setOdais] = useState(null);
  useEffect(() => {
    // firebaseから取得
    getOdaisLatest(setOdais)
  }, [init]);

  if(odais){
    return (
      <Container maxWidth="sm" className={commonClasses.root}>
        <h1>新着のお題</h1>
        <OdaiList odais={odais}/>
      </Container>
    );
  }
  else{
    return null
  }
}

export default OdaiLatest;