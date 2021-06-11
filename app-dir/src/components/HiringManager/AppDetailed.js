import React from 'react';
import {useDispatch} from 'react-redux'
import {acceptApp, rejectApp} from '../../actions/viewApplicationsActions'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { findByLabelText } from '@testing-library/dom';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 300,
    marginBottom: '2rem;'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  body: {
    width: '100%;',
    maxWidth: 280
  },
  actions: {
    paddingBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  acceptBtn: {
    background: '#8afa8a;'
  },
  rejectBtn: {
    background: '#ff4444;'
  }
});

export default function AppDetailed(props) {
  const dispatch = useDispatch()
  const {app} = props
  const handleAcceptApp = () =>{
    acceptApp(dispatch, app.phone)
  }
  const handleRejectApp = () =>{
    rejectApp(dispatch, app.phone)
  }
  const classes = useStyles();

  return (
    <Card className={classes.root} raised={true}>
      <CardContent>
        <Typography variant="h5" component="h2">
        {app.firstName} {app.lastName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {app.email}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {app.phone}
        </Typography>
        <Typography className={classes.body} variant="body2" component="p" gutterBottom>
          First Answer: {app.ext1}
        </Typography>
        <Typography className={classes.body} variant="body2" component="p" gutterBottom>
          Second Answer: {app.ext2}
          </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
      {!app.approved ?<Button className={classes.acceptBtn} onClick={()=>handleAcceptApp()} size="small">Accept</Button>: <div />  }
       <Button className={classes.rejectBtn} onClick={()=>handleRejectApp()} size="small">Reject</Button>
      </CardActions>
    </Card>
  );
}



