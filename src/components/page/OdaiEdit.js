import React, { useState, useEffect } from 'react';
import { getOdai, updateOdai } from '../../biz/DBAccessor'
import OdaiForm from '../common/OdaiForm'

function OdaiEdit(props) {
  const odaiId = props.match.params.id;
  const [status, setStatus] = useState({
    init: true,
  });
  const [values, setValues] = useState(null);
  const [tags, setTags] = React.useState(null);

  // 初期処理
  useEffect(() => {
    if (odaiId) {
      //firebaseから取得
      getOdai(odaiId, setOdaiValues)
    }
  }, [status]
  );

  const setOdaiValues = (odai) => {
    setValues({
      ...odai,
    });
    let odaitags = odai.tags === "" ? [] : odai.tags.split(' ');
    setTags({
      newtag: '',
      newtagkey: odaitags.length,
      taglist: odaitags,
    })
  }

  const submit = odaidata => {
    //firebaseに更新
    updateOdai(odaiId, odaidata, redirectDashboard)
  };
  
  const redirectDashboard = () => {
    props.history.push('/')
  }

  if(values && tags){
    return (
      <OdaiForm 
        initvalue={values}
        inittags={tags}
        submit={submit}
      />
    );
  }
  else{
    return ('loading...')
  }
}

export default OdaiEdit;