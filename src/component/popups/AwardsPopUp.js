import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid, TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AwardsPopUp({open,handleClickOpen,handleClose}) {

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Query Form
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Query Form"}</DialogTitle>
        <DialogContent>
        <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="Name*"
                    name="name"
                    // onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="Contact Number*"
                    name="phone"
                    // onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="Email*"
                    name="email"
                    // onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
              </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}