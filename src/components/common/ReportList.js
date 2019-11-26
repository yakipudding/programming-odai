import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import NotesIcon from '@material-ui/icons/Notes';
import Button from '@material-ui/core/Button';
import Tags from '../common/Tags'
import { ReportListStyle } from '../../style/CommonStyle'

// お題一覧
function ReportList({reports}) {
  const classes = ReportListStyle();

  return (
    <div>
      {reports && reports.map((report) => {
        return (
          <div key={report.id}>
            <div>
              {report.username}さん
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
  );
}

export default ReportList;