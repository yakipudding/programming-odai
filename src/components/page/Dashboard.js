import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import { DashboardStyle } from '../../style/CommonStyle'

// お題一覧
function Dashboard(props) {
  const commonClasses = DashboardStyle();

  return (
    <Container maxWidth="sm" className={commonClasses.root}>
      <div>
        <div className={commonClasses.logo}><img src="/logo_big.png" /></div>
        <h1 className={commonClasses.h}>プログラミングお題サイト</h1>
        <p className={commonClasses.p}>プログラミング初心者だけど、なにを作ったらいいかわからない…</p>
        <p className={commonClasses.p}>なんとなくプログラミングしたいけど、特に作りたいものがない…</p>
        <p className={commonClasses.p}>そんな人向けの、プログラミングお題サイトを作ってみました！</p>
        <h2 className={commonClasses.h}>使い方</h2>
        <p className={commonClasses.p}>このサイトでは人気のお題を見つけたり、</p>
        <p className={commonClasses.p}>他の人のつくってみたレポートを見ることができます。</p>
        <p className={commonClasses.p}>お題の仕様や、他の人のつくってみたレポートを参考にしながら</p>
        <p className={commonClasses.p}>色々なお題に挑戦してみましょう！</p>
      </div>
    </Container>
  )
}

export default Dashboard;