import React, { useState } from 'react';
import Markdown from 'react-markdown'
import '../../style/MarkDownPreview.css';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { registerImage } from '../../biz/StorageAccessor'
import HeadingRenderer from '../../biz/Renderer'
import TagsField from '../common/TagsField'
import { MarkdownFormStyle } from '../../style/CommonStyle'

function OdaiForm(props) {
  const classes = MarkdownFormStyle();
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
    <form onSubmit={handleSubmit} className={classes.form}>
      <Container className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <input type="text" id="odai-title" className={classes.titleField}
              placeholder="お題の名前"
              onChange={handleChange('title')}
              value={odaiValues.title}
            />
          </Grid>
          <Grid item xs={12}>
            <TagsField
              tagValues={tagValues}
              setTagValues={setTagValues}
              placeholder="タグを追加できます。初心者向け、ゲームなど"
            />
            <input
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/gif"
              onChange={handleChangeImage}
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="contained-button-file">
              <Button 
                size="small"
                variant="contained" 
                component="span" 
                color="primary"
                startIcon={<CloudUploadIcon />}>
                画像アップロード
              </Button>
            </label>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.content}>
        <Container  className={classes.contentGrid}>
          <Grid container spacing={1} className={classes.contentGrid}>
            <Grid item sm={6} xs={12} className={classes.contentGrid}>
              <textarea
                id="outlined-textarea"
                multiline="true"
                className={classes.inputField}
                onChange={handleChange('content')}
                value={odaiValues.content}
                placeholder="MarkDown形式で入力できます"
              />
            </Grid>
            <Grid item xs={6} className={classes.contentGrid}>
              <Markdown 
                source={odaiValues.content} 
                className={classes.previewField}
                renderers={{heading: HeadingRenderer}} 
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.footer}>
        <Container className={classes.root}>
          <Grid container spacing={1}>
            <Button
              variant="contained"
              color="primary"
              className={classes.submitbutton}
              onClick={handleSubmit}
              type="button"
            >
              投稿
            </Button>
          </Grid>
        </Container>
      </div>
    </form>
  );
}

export default OdaiForm;