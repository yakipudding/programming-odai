import React from 'react'
import Chip from '@material-ui/core/Chip';
import { MarkdownFormStyle } from '../../style/CommonStyle'

const TagsField = ({tags, handleChangeTag, handleDelete}) => {
  const classes = MarkdownFormStyle();
  return (
    <div>
      {tags.taglist.map((tagname, index) => {
        return(
          <Chip
            size='small'
            key={index}
            label={tagname}
            onDelete={handleDelete(index)} 
            color="primary" 
            className={classes.chip}
          />)
      })
      }
      <input 
        type="tags" 
        id="odai-tags"
        className={classes.tagField}
        onChange={handleChangeTag}
        placeholder="add tag.."
        value={tags.newtag}
        />
    </div>
  )
}

export default TagsField
