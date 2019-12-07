import React from 'react'
import Chip from '@material-ui/core/Chip';
import TagStyle from '../../style/page/TagStyle'

const Tags = (props) => {
  const classes = TagStyle();
  return (
    <div className={classes.chips}>
      {props.tags && props.tags.split(' ').map((tag, index) => {
        return (<Chip
          key={index}
          size="small"
          label={tag}
          clickable
          component="a"
          href={'/OdaiSearch?tag=' + tag}
          className={classes.chip}
        />)
        }
      )}
    </div>
  )
}

export default Tags
