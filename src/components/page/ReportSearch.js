import React, { useState, useEffect } from 'react'
import { Button, Container, Link } from '@material-ui/core/';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotesIcon from '@material-ui/icons/Notes';
import { getReports } from '../../biz/DBAccessor'
import { gerUriParams } from '../../biz/QueryParamsUtil'
import Tags from '../common/Tags'
import SearchStyle from '../../style/page/SearchStyle'
import ReportStyle from '../../style/page/ReportStyle'

// タグページ
function ReportSearch(props) {
  const searchClasses = SearchStyle();
  const classes = ReportStyle();
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
      <Container maxWidth="sm">
        <h1 className={searchClasses.h1}>みんなのつくってみた</h1>
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
                <hr className={classes.hr} />
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