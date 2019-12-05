export const gerUriParams = (uri) => {
  let params = {}
  decodeURI(uri)
    .substring(1) //?削除
    .split('&') //&分割
    .map((param) => {
      const temp = param.split('=') //=分割
      params[temp[0]] = temp[1]
    })
  return params
}

export default null