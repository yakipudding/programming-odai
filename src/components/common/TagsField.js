import React from 'react'
import Chip from '@material-ui/core/Chip';
import { MarkdownFormStyle } from '../../style/CommonStyle'

const TagsField = (props) => {
  const classes = MarkdownFormStyle();
  const values = props.tagValues

  const handleChangeTagInput = event => {
    let input = event.target.value
    //追加
    if(input.slice(-1) === " "){
      let addtag = input.slice(0, -1)

      let tags = values.tags.concat();
      tags.push(addtag)

      props.setTagValues({
        ...values,
        input: '',
        newtagkey: values.newtagkey + 1,
        tags: tags,
      })
    }
    else{
      props.setTagValues({
        ...values,
        input: input,
      });
    }
  };

  const handleDeleteTag = index => () => {
    let tags = values.tags.concat();
    tags.splice(index, 1)

    props.setTagValues({
      ...values,
      tags: tags,
    });
  };

  return (
    <div>
      {values.tags.map((tagname, index) => {
        return(
          <Chip
            size='small'
            key={index}
            label={tagname}
            onDelete={handleDeleteTag(index)} 
            color="primary" 
            className={classes.chip}
          />)
      })
      }
      <input 
        type="tags" 
        id="odai-tags"
        className={classes.tagField}
        onChange={handleChangeTagInput}
        placeholder={props.placeholder}
        value={values.input}
        />
    </div>
  )
}

export default TagsField
