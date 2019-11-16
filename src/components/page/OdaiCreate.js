import React from 'react';
import { database } from '../../config/FirebaseConfig'
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
    let odaiRef = database.ref('odais/')
    odaiRef.push({
        ...odaidata,
    }).then((odai) => {
        //リダイレクト
        props.history.push('/')
      })
      .catch((error) => {

      })
    ;
  };

  return (
    <OdaiForm 
      initvalue={odaivalue}
      inittags={tags}
      submit={submit}
    />
  );
}

export default OdaiCreate;