import React, { useState, useEffect } from 'react';
import { getOdaiById, updateOdai } from '../../biz/DBAccessor'
import OdaiForm from '../common/OdaiForm'

function OdaiEdit(props) {
  const [init] = useState({
    odaiId: props.match.params.id,
  });
  const [initOdai, setInitOdai] = useState(null);
  const [initTag, setInitTag] = useState(null);

  // 初期処理
  useEffect(() => {
    if (init.odaiId) {
      // firebaseから取得
      getOdaiById(init.odaiId).then((odai) => initValues(odai))
    }
  }, [init]
  );

  // valuesの初期化：firebaseから取得した情報を設定する
  const initValues = (value) => {
    setInitOdai({
      ...value,
    });
    let odaitags = value.tags === "" ? [] : value.tags.split(' ');
    setInitTag({
      input: '',
      newtagkey: odaitags.length,
      tags: odaitags,
    })
  }

  const submit = (odai, tags) => {
    // firebaseに更新
    updateOdai(init.odaiId, odai, tags, redirectDashboard)
  };
  
  const redirectDashboard = () => {
    props.history.push('/')
  }

  if(initOdai && initTag){
    return (
      <OdaiForm 
        initOdai={initOdai}
        initTag={initTag}
        submit={submit}
      />
    );
  }
  else{
    return ('loading...')
  }
}

export default OdaiEdit;