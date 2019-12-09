import React from 'react'
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotesIcon from '@material-ui/icons/Notes';
import Tags from '../common/Tags'
import ReportStyle from '../../style/page/ReportStyle'

// つくってみた一覧
function ReportList({reports}) {
  const classes = ReportStyle();

  return (
    <div>
      {reports && reports.map((report) => {
        return (
          <div key={report.id}>
            <div className={classes.reportHeader}>
              <div className={classes.reporter}>
                by {report.username}さん
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
            </div>
            <div>
              <Tags tags={report.tags} />
            </div>
            <div className={classes.comment}>
              {report.comment}
            </div>
            <hr className={classes.hr} />
          </div>
      )
      })}
    </div>
  );
}

export default ReportList;