import React from 'react'
import Markdown from 'react-markdown'
import HeadingRenderer from '../../biz/Renderer'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { MarkdownFormStyle } from '../../style/CommonStyle'
import TagsField from '../common/TagsField'

const MarkdownForm = ({values, tags, handleChange, handleChangeTag, handleChangeImage, handleDelete, handleSubmit}) => {
  const classes = MarkdownFormStyle();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.container}>
          <div className={classes.gridTop}>
            <input 
              type="text" 
              id="odai-title"
              className={classes.titleField}
              onChange={handleChange('title')}
              value={values.title}
              placeholder="お題の名前"
              />
            <TagsField
              tags={tags}
              handleChangeTag={handleChangeTag}
              handleDelete={handleDelete}
             />
            <input
              className={classes.input}
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
                onChange={handleChange('content')}
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
              onClick={handleSubmit}
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
