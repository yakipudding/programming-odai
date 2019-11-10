import React from 'react'
import Markdown from 'react-markdown'
import HeadingRenderer from '../../biz/Renderer'
import Button from '@material-ui/core/Button';
import { OdaiFormStyle } from '../../style/CommonStyle'
import TagsField from '../common/TagsField'

const OdaiInputForm = ({values, tags, handleChange, handleChangeTag, handleDelete, handleSubmit}) => {
  const classes = OdaiFormStyle();
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
          </div>
          <div className={classes.gridLeft}>
            <div className={classes.contentDiv}>
              <textarea
                id="outlined-textarea"
                multiline="true"
                className={classes.contentField}
                margin="normal"
                variant="outlined"
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
              className={classes.button}
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

export default OdaiInputForm
