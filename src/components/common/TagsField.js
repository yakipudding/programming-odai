import React from 'react'
import Chip from '@material-ui/core/Chip';
import { OdaiFormStyle } from '../../style/CommonStyle'

const TagsField = ({tags, handleChangeTag, handleDelete}) => {
  const classes = OdaiFormStyle();
  return (
    <div>
      {tags.tags.map(tag => {
        return(
          <Chip
            size='small'
            key={tag.key}
            label={tag.label}
            onDelete={handleDelete(tag)} 
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
