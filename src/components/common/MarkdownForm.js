import React from 'react'
import Markdown from 'react-markdown'
import HeadingRenderer from '../../biz/Renderer'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { MarkdownFormStyle } from '../../style/CommonStyle'
import '../../style/MarkDownPreview.css';
import TagsField from '../common/TagsField'

const MarkdownForm = (props) => {
  const values = props.odaiValues
  
  // markdownの
  const classes = MarkdownFormStyle();
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className={classes.container}>
          <div className={classes.gridTop}>
            <input 
              type="text" 
              id="odai-title"
              className={classes.titleField}
              onChange={props.handleChange('title')}
              value={values.title}
              placeholder="お題の名前"
              />
            <TagsField
              tagValues={props.tagValues}
              setTagValues={props.setTagValues}
              placeholder="タグを追加できます。初心者向け、ゲームなど"
             />
            <input
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/gif"
              onChange={props.handleChangeImage}
            />
            <label htmlFor="contained-button-file">
              <Button 
                size="small"
                variant="contained" 
                component="span" 
                color="primary"
                className={classes.button} 
                startIcon={<CloudUploadIcon />}>
                画像アップロード
              </Button>
            </label>
          </div>
          <div className={classes.gridLeft}>
            <div className={classes.contentDiv}>
              <textarea
                id="outlined-textarea"
                multiline="true"
                className={classes.contentField}
                onChange={props.handleChange('content')}
                value={values.content}
                placeholder="MarkDown形式で入力できます"
              />
            </div>
          </div>
          <div className={classes.gridRight}>
            <Markdown 
              source={values.content} 
              className="previewField" 
              renderers={{heading: HeadingRenderer}} 
            />
          </div>
          <div className="gridButtom">
            <Button
              variant="contained"
              color="primary"
              className={classes.submitbutton}
              onClick={props.handleSubmit}
              type="button"
            >
              投稿
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default MarkdownForm
