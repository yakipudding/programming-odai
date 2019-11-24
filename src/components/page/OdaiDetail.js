import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionIcon from '@material-ui/icons/Description';

import Markdown from 'react-markdown'

import HeadingRenderer from '../../biz/Renderer'
import { getOdaiByIdWithLike, setOdaiLike } from '../../biz/DBAccessor'
import Tags from '../common/Tags'
import ReportDialog from '../dialog/ReportDialog'
import { OdaiDetailStyle } from '../../style/CommonStyle'
import '../../style/MarkDownPreview.css';

function OdaiDetail(props) {
  const classes = OdaiDetailStyle();
  const [init] = useState({
    odaiId: props.match.params.id,
  });
  const [values, setValues] = useState(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  // 初期処理
  useEffect(() => {
    if (init.odaiId) {
      //firebaseから取得
      getOdaiByIdWithLike(init.odaiId, setOdaiValues)
    }
  }, [init]
  );

  const setOdaiValues = (odai) => {
    setValues({
          ...odai,
        });
  }
  const handleLike = event => {
    let addLikeCount = values.like ? -1 : 1;
    setOdaiLike(init.odaiId, !values.like)
    setValues({
          ...values,
          like: !values.like,
          likecount: values.likecount + addLikeCount,
        });
  }

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const reload = () => {
    props.history.push('/OdaiDetail/' + init.odaiId)
  }


  if(values){
    return (
      <Container maxWidth="sm" className={classes.root}>
        <div className={classes.gridLeft}>
          <div className={classes.header}>
            <h1 className={classes.title}>{values.title}</h1>
            <IconButton
              aria-label="like"
              color="primary"
              onClick={handleLike}
            >
              <FavoriteIcon color={values.like ? "primary" : "disabled" } />
            </IconButton>
            <span className={classes.likecount}>{values.likecount}</span>
            <IconButton
              aria-label="report"
              color="primary"
              href={'#reports'}
            >
              <DescriptionIcon color="primary" />
            </IconButton>
            <span className={classes.likecount}>{values.reportcount}</span>
            <Fab
              variant="extended"
              size="small"
              color="primary"
              aria-label="edit"
              className={classes.editButton}
              href={"/OdaiEdit/" + init.odaiId }
            >
              <CreateIcon />
              編集する
            </Fab>
          </div>
          <Tags tags={values.tags} />
          <Markdown 
            source={values.content} 
            className="previewField" 
            renderers={{heading: HeadingRenderer}} 
          />
        </div>
        <div className={classes.gridRight}>
          <div>
            <h2 id="reports" className={classes.rightHeader} >みんなのつくってみた</h2>
            <Fab
              variant="extended"
              size="small"
              color="primary"
              aria-label="add"
              className={classes.reportButton}
              onClick={handleDialogOpen}
            >
              <AddIcon />
              つくってみた
            </Fab>
          </div>
          <div>
            {values.reports && values.reports.map((report) => {
              return (
                <div key={report.id}>
                  <Link href={report.url}>
                    {report.title}
                  </Link>
                  <Tags tags={report.tags} />
                  <span className={classes.reportcontent}>
                    {report.comment}
                  </span>
                  <hr />
                </div>
            )
            })}
          </div>
        </div>
        <ReportDialog 
          odaiid={init.odaiId}
          dialogOpen={dialogOpen}
          handleDialogClose={handleDialogClose}
          reload={reload}
        />
      </Container>
    );
  }
  else{
    return null
  }
}

export default OdaiDetail;