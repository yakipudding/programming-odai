import React from 'react';
import ContentStyle from '../../style/page/ContentStyle'

export const Logo = (props) => {
  const classes = ContentStyle();
  return (
    <div>
      <div className={classes.logo}><img alt="logo" src="/logo_big.png" className={classes.logoImage} /></div>
      <h1 className={classes.h}>プログラミングお題サイト</h1>
    </div>
  )
}

export const Description = (props) => {
  const classes = ContentStyle();
  return (
    <div>
      <ul>
        <li>プログラミング初心者だけど、なにを作ったらいいかわからない…</li>
        <li>なんとなくプログラミングしたいけど、特に作りたいものがない…</li>
      </ul>
      <p className={classes.p}>そんな人向けの、プログラミングお題サイトを作ってみました！</p>
    </div>
  )
}

export default Description;