import React from 'react'

export function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}

export default function HeadingRenderer(props) {
  var children = React.Children.toArray(props.children)
  var text = children.reduce(flatten, '')
  // var slug = text.toLowerCase().replace(/\W/g, '-')
  var header = 'h' + (props.level + 1)
  return React.createElement(header, {id: header + text}, props.children)
}