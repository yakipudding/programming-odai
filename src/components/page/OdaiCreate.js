import React from 'react';
import { insertOdai } from '../../biz/DBAccessor'
import OdaiForm from '../common/OdaiForm'

function OdaiCreate(props) {
  const odaivalue = {
    title: '',
    detail: '',
    content: '',
    images: [],
  };
  const tags = {
    newtag: '',
    newtagkey: 0,
    taglist: []
  };
  
  const submit = odaidata => {
      //firebaseに登録
    insertOdai(odaidata, redirectDashboard)
  };

  const redirectDashboard = () => {
    props.history.push('/')
  }

  return (
    <OdaiForm 
      initvalue={odaivalue}
      inittags={tags}
      submit={submit}
    />
  );
}

export default OdaiCreate;