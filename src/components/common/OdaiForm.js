import React, { useState } from 'react';
import Container from '@material-ui/core/Container'
import MarkdownForm from '../common/MarkdownForm'
import { OdaiDetailStyle } from '../../style/CommonStyle'
import { registerImage } from '../../biz/StorageAccessor'

function OdaiForm({initvalue, inittags, submit}) {
  const classes = OdaiDetailStyle();
  const [values, setValues] = useState({
    ...initvalue
  });
  const [tags, setTags] = useState({
    ...inittags
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleChangeTag = event => {
    let input = event.target.value
    if(input.slice(-1) === " "){
      //追加
      let newtags = tags.taglist.concat();
      newtags.push(input.slice(0, -1))
      setTags({
        newtag: '',
        newtagkey: tags.newtagkey + 1,
        taglist: newtags
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
      tags: tags.taglist.splice(chipToDelete, 1)
    });
  };

  const handleChangeImage = event => {
    let file = event.target.files.item(0);
    //storageに保存
    registerImage(file, insertImageUrl)
  };

  const insertImageUrl = (filename, url) => {
    setValues({
      ...values,
      content: values.content + `\n![${filename}](${url})`
    });
  }

  const handleSubmit = event => {
    let tagList = tags.taglist.join(' ')
    let odaidata = {
        ...values,
        tags: tagList
    }
    submit(odaidata);
  };

  return (
    <Container className={classes.root}>
      <MarkdownForm
        values={values}
        tags={tags}
        handleChange={handleChange}
        handleChangeTag={handleChangeTag}
        handleChangeImage={handleChangeImage}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default OdaiForm;