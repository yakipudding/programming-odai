import React from 'react'
import { Chip, TextField } from '@material-ui/core/';
import TagsFormStyle from '../../style/page/TagsFormStyle'

const TagsField = (props) => {
  const classes = TagsFormStyle();
  const values = props.tagValues

  const addTag = (tag) => {
    let tags = values.tags.concat();
    tags.push(tag)

    props.setTagValues({
      ...values,
      input: '',
      newtagkey: values.newtagkey + 1,
      tags: tags,
    })
  }

  const handleChange = event => {
    let input = event.target.value
    //追加
    if(input.slice(-1) === " "){
      addTag(input.slice(0, -1))
    }
    else{
      props.setTagValues({
        ...values,
        input: input,
      });
    }
  };

  const handleFocusOut = event => {
    if(values.input !== ''){
      addTag(values.input)
    }
  };

  const handleDelete = index => () => {
    let tags = values.tags.concat();
    tags.splice(index, 1)

    props.setTagValues({
      ...values,
      tags: tags,
    });
  };

  return (
    <div className={props.dialog ? classes.tagContaierDialog : classes.tagContaier }>
      <div className={classes.tagChipGrid}>
        {values.tags.map((tagname, index) => {
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
      </div>
      <div className={classes.tagInputGrid}>
        <TextField
          label="タグ"
          placeholder="タグをスペース区切りで登録できます。（例：初心者向け、ゲームなど）"
          id="odai-tags"
          margin="dense"
          variant={props.dialog ? 'standard' : 'outlined' }
          fullWidth
          onChange={handleChange}
          onBlur={handleFocusOut}
          value={values.input}
          InputLabelProps={{ shrink: true }}
        />
      </div>
    </div>
  )
}

export default TagsField
