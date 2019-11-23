import React, { useState } from 'react';
import Container from '@material-ui/core/Container'
import MarkdownForm from '../common/MarkdownForm'
import { OdaiDetailStyle } from '../../style/CommonStyle'
import { registerImage } from '../../biz/StorageAccessor'

function OdaiForm(props) {
  const classes = OdaiDetailStyle();
  const [values, setValues] = useState({
    ...props.initvalue
  });
  const [tags, setTags] = useState({
    ...props.inittags
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
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
    props.submit(odaidata);
  };

  return (
    <Container className={classes.root}>
      <MarkdownForm
        values={values}
        tags={tags}
        setTags={setTags}
        handleChange={handleChange}
        handleChangeImage={handleChangeImage}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default OdaiForm;