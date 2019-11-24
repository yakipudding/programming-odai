import React from 'react'

export default function HeadingRenderer(props) {
  var children = React.Children.toArray(props.children)
  // hレベルをあげる
  let level = props.level + 1
  var header = 'h' + level
  // 
  var text = children.reduce(flatten, '')
  return React.createElement(
    header,
    {
      id: header + text,
      className: 'markdown-h' + level
    },
    props.children)
}

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}