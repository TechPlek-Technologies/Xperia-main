import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Grid, TextField } from "@mui/material";
import Button from "../home/about/about/Button";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormPopUp({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{borderRadius:'25px'}}
    >
      <DialogTitle sx={{ fontFamily: "Poppins", fontSize:"25px", fontWeight:"500"}}>{"Query Form"}</DialogTitle>
      <DialogContent sx={{ fontFamily: "Poppins" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <TextField
              label="Name*"
              name="name"
              // onChange={handleInputChange}
              fullWidth
              InputLabelProps={{
                sx: { fontFamily: "Poppins" }
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label="Contact Number*"
              name="phone"
              // onChange={handleInputChange}
              fullWidth
              InputLabelProps={{
                sx: { fontFamily: "Poppins" }
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label="Email*"
              name="email"
              // onChange={handleInputChange}
              fullWidth
              InputLabelProps={{
                sx: { fontFamily: "Poppins" }
              }}
            />
          </Grid>
        </Grid>
      </DialogContent >
      <DialogActions sx={{display:"flex", justifyContent:"center !important", marginBottom:"20px"}}>
        <Button sx={{ fontFamily: "Poppins", color:"#000" }} onClick={handleClose} text={"SUBMIT"}></Button>
      </DialogActions>
    </Dialog>
  );
}
