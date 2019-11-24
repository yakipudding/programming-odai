import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import { getOdaisWithLike } from '../../biz/DBAccessor'
import OdaiList from '../common/OdaiList'
import { CommonStyle } from '../../style/CommonStyle'

// お題一覧
function Dashboard(props) {
  const commonClasses = CommonStyle();
  const [init] = useState(true);
  const [odais, setOdais] = useState(null);
  useEffect(() => {
    // firebaseから取得
    getOdaisWithLike(setOdais)
  }, [init]);

  if(odais){
    return (
      <Container maxWidth="sm" className={commonClasses.root}>
        <h1>人気お題一覧</h1>
        <OdaiList odais={odais}/>
      </Container>
    );
  }
  else{
    return null
  }
}

export default Dashboard;