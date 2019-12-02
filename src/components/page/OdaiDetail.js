import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionIcon from '@material-ui/icons/Description';

import Grid from '@material-ui/core/Grid';

import Markdown from 'react-markdown'

import HeadingRenderer from '../../biz/Renderer'
import { getOdaiByIdWithLike, setOdaiLike } from '../../biz/DBAccessor'
import Tags from '../common/Tags'
import ReportList from '../common/ReportList'
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
      getOdaiByIdWithLike(init.odaiId).then((odai) => {
        setOdaiValues(odai)
      })
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
    <div>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container justify="center" className={classes.header}>
              <h1 className={classes.title}>{values.title}</h1>
              <div id="likecount">
                <IconButton aria-label="like" color="primary" onClick={handleLike}>
                  <FavoriteIcon color={values.like ? "primary" : "disabled" } />
                </IconButton>
                <span>{values.likecount}</span>
              </div>
              <div id="reportcount">
                <IconButton aria-label="report" color="primary" href={'#reports'} >
                  <DescriptionIcon color="primary" />
                </IconButton>
                <span>{values.reportcount}</span>
              </div>
            </Grid>
            <Grid container justify="center">
              <Tags tags={values.tags} />
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <div className={classes.contentHeader}>
              <h2 id="odai" className={classes.contentH2}>仕様</h2>
              <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.button}
                  startIcon={<CreateIcon fontSize="small"/>}
                  href={"/OdaiEdit/" + init.odaiId }
                >
                編集する
                </Button>
            </div>
            <Markdown 
              source={values.content} 
              className="previewField" 
              renderers={{heading: HeadingRenderer}} 
            />
          </Grid>
          <Grid item xs={5} className={classes.reportArea}>
            <div className={classes.contentHeader}>
              <h2 id="reports" className={classes.contentH2}>みんなのつくってみた</h2>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<AddIcon fontSize="small"/>}
                onClick={handleDialogOpen}
              >
                投稿
              </Button>
            </div>
            <ReportList reports={values.reports} />
          </Grid>
        </Grid>
      </Container>
      <ReportDialog
        odaiid={init.odaiId}
        odaiName={values.title}
        dialogOpen={dialogOpen}
        handleDialogClose={handleDialogClose}
        reload={reload}
      />
    </div>
    );
  }
  else{
    return null
  }
}

export default OdaiDetail;