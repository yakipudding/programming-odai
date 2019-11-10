import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { database } from '../../config/FirebaseConfig'
import OdaiInputForm from '../common/OdaiInputForm'
import { OdaiDetailStyle } from '../../style/CommonStyle'

function OdaiCreate(props) {
  const classes = OdaiDetailStyle();
  const [values, setValues] = useState({
    title: '',
    detail: '',
    content: '',
  });
  const [tags, setTags] = React.useState({
    newtag: '',
    newtagkey: 0,
    tags: []
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleChangeTag = event => {
    let input = event.target.value
    if(input.slice(-1) === " "){
      //追加
      let newtags = tags.tags.concat();
      newtags.push({ key: tags.newtagkey, label: input.slice(0, -1)})
      setTags({
        newtag: '',
        newtagkey: tags.newtagkey + 1,
        tags: newtags
      })
    }
    else{
      setTags({
        ...tags,
        newtag: input,
      });
    }
  };

  const handleDelete = chipToDelete => () => {
    setTags({
      ...tags,
      tags: tags.tags.filter(tag => tag.key !== chipToDelete.key)
    });
  };
  
  const handleSubmit =  event => {
    let tagList = ''
    tags.tags.map(tag => { tagList = tagList + ' ' + tag.label })
    database.ref('odais/')
      .push({
        ...values,
        tags: tagList
      })
      .then(() => {
        props.history.push('/')
      })
      .catch((error) => {

      })
    ;
  };

  return (
    <Container className={classes.root}>
      <OdaiInputForm
        values={values}
        tags={tags}
        handleChange={handleChange}
        handleChangeTag={handleChangeTag}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default OdaiCreate;