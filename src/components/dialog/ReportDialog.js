import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { insertReport } from '../../biz/DBAccessor'
import TagsField from '../common/TagsField'
import { ReportDialogStyle } from '../../style/CommonStyle'

function ReportDialog(props) {
  const classes = ReportDialogStyle();
  const [values, setValues] = React.useState({
      title: '',
      url: '',
      comment: '',
  });
  const [tagValues, setTagValues] = useState(
    { 
      input: '',
      newtagkey: 0,
      tags: [], 
    }
  );

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
      // tags 重複の削除
      let registerTags = tagValues.tags
                          .filter((x, i, self) => { return self.indexOf(x) === i;});
      // tag
      let registerReport = {
        ...values,
        tags: registerTags.join(' ')
      }
      //firebaseに登録
      insertReport(props.odaiid, registerReport, registerTags, props.reload)
  };

  return (
    <Dialog 
      open={props.dialogOpen} 
      onClose={props.handleDialogClose} 
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        つくってみた投稿
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          お題をつくったら、設計やソースを投稿してみましょう！
        </DialogContentText>
        <div className={classes.textfield}>
          <TextField
            autoFocus
            id="title"
            label="タイトル"
            placeholder="○○でつくってみた"
            fullWidth
            onChange={handleChange('title')}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className={classes.textfield}>
          <TextField
            id="url"
            className={classes.textfield}
            label="URL"
            placeholder="記事やGitHubレポジトリなど"
            fullWidth
            onChange={handleChange('url')}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className={classes.textfield}>
          <TagsField
            tagValues={tagValues}
            setTagValues={setTagValues}
            />
        </div>
        <div className={classes.textfield}>
          <TextField
            id="comment"
            className={classes.textfield}
            label="コメント"
            placeholder="○○機能を追加してつくってみました。"
            fullWidth
            onChange={handleChange('comment')}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">
          投稿する
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ReportDialog;