import React from 'react'
import { Container, Button } from '@material-ui/core/';
import { Logo } from '../content/Content'
import DashboardStyle from '../../style/page/DashboardStyle'

// ダッシュボード
function Dashboard(props) {
  const classes = DashboardStyle();

  return (
    <Container maxWidth="md">
      <div>
        <Logo />
        <p className={classes.p}>お気に入りのお題を探そう！</p>
        <table className={classes.table}>
          <tbody>
            <tr>
              <td>
                <Button 
                  variant="contained" 
                  color="primary" 
                  href="/OdaiSearch?mode=popular"
                  className={classes.button}
                >
                  人気のお題
                </Button>
              </td>
              <td>人気のお題をチェックしよう</td>
            </tr>
            <tr>
              <td>
                <Button 
                  variant="contained" 
                  color="primary" 
                  href="/OdaiSearch?mode=new"
                  className={classes.button}
                >
                  新着のお題
                </Button>
              </td>
              <td>新着のお題をチェックしよう</td>
            </tr>
            <tr>
              <td>
                <Button 
                  variant="contained" 
                  color="primary" 
                  href="/ReportSearch"
                  className={classes.button}
                >
                  みんなの作ってみた
                </Button>
              </td>
              <td>みんなが作ってみた設計やソースコードを見てみよう</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  )
}

export default Dashboard;