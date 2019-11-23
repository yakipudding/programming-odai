import React from 'react';
import { insertOdai } from '../../biz/DBAccessor'
import OdaiForm from '../common/OdaiForm'

function OdaiCreate(props) {
  const initOdai = {
    title: '',
    detail: '',
    content: '',
    images: [],
  };
  const initTag = {
    input: '',
    newtagkey: 0,
    tags: [],
  };
  
  const submit = (odai, tags) => {
      //firebaseに登録
    insertOdai(odai, tags, redirectDashboard)
  };

  const redirectDashboard = () => {
    props.history.push('/')
  }

  return (
    <OdaiForm 
      initOdai={initOdai}
      initTag={initTag}
      submit={submit}
    />
  );
}

export default OdaiCreate;