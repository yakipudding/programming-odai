import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import { getReports } from '../../biz/DBAccessor'
import { gerUriParams } from '../../biz/QueryParamsUtil'
import GitHubIcon from '@material-ui/icons/GitHub';
import NotesIcon from '@material-ui/icons/Notes';
import Button from '@material-ui/core/Button';
import Tags from '../common/Tags'
import { ReportListStyle } from '../../style/CommonStyle'
import { CommonStyle } from '../../style/CommonStyle'
import Link from '@material-ui/core/Link';

// タグページ
function ReportSearch(props) {
  const commonClasses = CommonStyle();
  const classes = ReportListStyle();
  const [init] = useState({
    params: gerUriParams(props.location.search)
  });
  const [values, setValues] = useState(null);
  useEffect(() => {
    // firebaseから取得
    getReports().then((reports) => {
      setValues({ reports: reports})
    })
  }, [init]);

  if(values){
    return (
      <Container maxWidth="sm" className={commonClasses.root}>
        <h1>みんなのつくってみた</h1>
        <div>
          {values.reports && values.reports.map((report) => {
            return (
              <div key={report.id}>
                <div>
                  <Link href={"/OdaiDetail/" + report.odaiid}>
                  {report.odainame}
                  </Link>
                  つくってみた　by{report.username}さん
                </div>
                <div>
                  <Button
                    size="small"
                    className={classes.button}
                    startIcon={<NotesIcon fontSize="inherit" />}
                      href={report.url}
                      target="_blank"
                  >
                  ブログ記事
                  </Button>
                  <Button
                    size="small"
                    className={classes.button}
                    startIcon={<GitHubIcon fontSize="inherit" />}
                      href={report.guthub}
                      target="_blank"
                  >
                  ソースコード
                  </Button>
                </div>
                <div>
                  <Tags tags={report.tags} />
                </div>
                <div>
                  <span className={classes.content}>
                    {report.comment}
                  </span>
                </div>
                <hr />
              </div>
          )
          })}
        </div>
      </Container>
    );
  }
  else{
    return null
  }
}

export default ReportSearch;