import React, { useState } from 'react';
import Container from '@material-ui/core/Container'
import MarkdownForm from '../common/MarkdownForm'
import { OdaiDetailStyle } from '../../style/CommonStyle'
import { registerImage } from '../../biz/StorageAccessor'

function OdaiForm(props) {
  const classes = OdaiDetailStyle();
  // values初期化
  const [odaiValues, setOdaiValues] = useState({ ...props.initOdai });
  const [tagValues, setTagValues] = useState({ ...props.initTag });

  const handleChange = name => event => {
    setOdaiValues({ ...odaiValues, [name]: event.target.value });
  };

  const handleChangeImage = event => {
    let file = event.target.files.item(0);
    //storageに保存
    registerImage(file, insertImageUrl)
  };

  const insertImageUrl = (filename, url) => {
    setOdaiValues({
      ...odaiValues,
      content: odaiValues.content + `\n![${filename}](${url})`
    });
  }

  const handleSubmit = event => {
    // tags 重複の削除
    let registerTags = tagValues.tags
                        .filter((x, i, self) => { return self.indexOf(x) === i;});
    let odai = {
      ...odaiValues,
      tags: registerTags.join(' ')
    }
    let tags = {
      addtags: registerTags.filter(tag => { return !props.initTag.tags.includes(tag) }),
      deletetags: props.initTag.tags.filter(inittag => { return !registerTags.includes(inittag) }),
    }

    props.submit(odai, tags);
  };

  return (
    <Container className={classes.root}>
      <MarkdownForm
        odaiValues={odaiValues}
        tagValues={tagValues}
        setTagValues={setTagValues}
        handleChange={handleChange}
        handleChangeImage={handleChangeImage}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default OdaiForm;