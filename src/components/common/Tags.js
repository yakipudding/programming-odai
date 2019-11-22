import React from 'react'
import Chip from '@material-ui/core/Chip';
import { CommonStyle } from '../../style/CommonStyle'

const Tags = (props) => {
  const classes = CommonStyle();
  return (
    <div>
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
