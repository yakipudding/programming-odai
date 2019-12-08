import React, { useState } from 'react';
import Markdown from 'react-markdown'
import '../../style/MarkDownPreview.css';
import { Button, Container, Grid, TextField } from '@material-ui/core/'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { registerImage } from '../../biz/StorageAccessor'
import HeadingRenderer from '../../biz/Renderer'
import TagsField from '../common/TagsField'
import OdaiFormStyle from '../../style/page/OdaiFormStyle'

function OdaiForm(props) {
  const classes = OdaiFormStyle();
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
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="お題タイトル"
              id="odai-title"
              margin="dense"
              variant="outlined"
              fullWidth
              onChange={handleChange('title')}
              value={odaiValues.title}
            />
          </Grid>
          <Grid item xs={12}>
            <TagsField
              tagValues={tagValues}
              setTagValues={setTagValues}
            />
          </Grid>
          <Grid item xs={12} className={classes.imageButtonField}>
            <input
              className={classes.imageButtonHidden}
              id="contained-button-file"
              multiple
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/gif"
              onChange={handleChangeImage}
            />
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
            <Grid item md={6} sm={12} xs={12} className={classes.contentGrid}>
              <TextField
                label="お題の概要"
                id="outlined-textarea"
                multiline
                className={classes.contentField}
                margin="dense"
                variant="outlined"
                onChange={handleChange('content')}
                value={odaiValues.content}
                InputProps={{
                  classes: {
                    root: classes.contentFieldDiv,
                    input: classes.contentFieldDiv,
                  },
                }}
                inputProps={ { style: { height: '100%' } } }
              />
            </Grid>
            <Grid item md={6} className={classes.contentPreviewGrid}>
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