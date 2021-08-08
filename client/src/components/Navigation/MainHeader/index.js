import React, { Component } from 'react';
import { Modal } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'right',
    float: 'right',
    position: 'fixed',
    right: 0,
    height:'100%',
    
  },
  paper: {
    
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    padding: theme.spacing(6, 2, 3),
    backgroundColor:'#000000',
    
    
  },
}));


export default function MainHeader() {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


   return (

    <nav className="navbar navbar-expand-lg ftco-navbar-light text-gray-100" id="ftco-navbar" style={{background:"black"}}>
    <div className="container">
    <a className="d-flex align-items-center justify-content-center" href="main.html">
       <div className="rotate-n-15">
           <i className="fas fa-piggy-bank" style={{color:"#FFFFFF"}}></i>
       </div>
       <div className="mx-3"style={{color:'#FFFFFF'}}>TAX MATE</div>
   </a>
 
   <ul className="list-group list-group-horizontal list-group-flush">
        <li className="list-group-item d-none d-sm-block"  style={{background:"black"}}><a href="/signin" style={{color:'#FFFFFF'}} > SIGN IN</a></li>
        <li className="list-group-item d-none d-sm-block"  style={{background:"black"}}><div className="seperator"></div></li>
        <li className="list-group-item d-none d-sm-block" style={{background:"black"}}><a href="" style={{color:'#FFFFFF'}}> CONTACT US <i class="far fa-envelope fa-fw"></i>  </a></li>
 </ul>


      <button className="navbar-toggler d-block d-sm-none" onClick={handleOpen} style={{color:'#FFFFFF'}}>
      <i className="fas fa-bars"></i>
      </button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
          <Fade in={open}>
            <div className={classes.paper}>
          <ul className="list-group list-group-flush ">
          <li className="list-group-item "  style={{background:"black"}}><a href="/signin" style={{color:'#FFFFFF'}} > SIGN IN</a></li>
        <li className="list-group-item" style={{background:"black"}}><a href="" style={{color:'#FFFFFF'}}>CONTACT US </a></li>
          </ul>
          </div>
        </Fade>
      </Modal>
      </div>


	
	
  </nav>




  )

    }




   
   
   
