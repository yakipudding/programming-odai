import React, { useState, useEffect } from 'react';
import { database } from '../../config/FirebaseConfig'
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
      let ref = database.ref("odais/" + odaiId);
      ref.once("value")
        .then((odai) => {
          let odaivalue = odai.val()
          setValues({
            ...odaivalue,
          });
          let odaitags = odaivalue.tags === "" ? [] : odaivalue.tags.split(' ');
          setTags({
            newtag: '',
            newtagkey: odaitags.length,
            taglist: odaitags,
          })
        });
      return
    }
  }, [status]
  );

  const submit = odaidata => {
    let odaiRef = database.ref('odais/' + odaiId)
    odaiRef.update({
        ...odaidata,
    }).then((odai) => {
        //リダイレクト
        props.history.push('/')
      })
      .catch((error) => {

      })
    ;
  };

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