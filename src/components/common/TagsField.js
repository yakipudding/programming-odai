import React from 'react'
import Chip from '@material-ui/core/Chip';
import { MarkdownFormStyle } from '../../style/CommonStyle'

const TagsField = (props) => {
  const classes = MarkdownFormStyle();
  const tags = props.tags

  const handleChangeTag = event => {
    let input = event.target.value
    if(input.slice(-1) === " "){
      //追加
      let newtags = tags.taglist.concat();
      newtags.push(input.slice(0, -1))
      props.setTags({
        newtag: '',
        newtagkey: tags.newtagkey + 1,
        taglist: newtags
      })
    }
    else{
      props.setTags({
        ...tags,
        newtag: input,
      });
    }
  };

  const handleDelete = chipToDelete => () => {
    props.setTags({
      ...tags,
      tags: tags.taglist.splice(chipToDelete, 1)
    });
  };

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
