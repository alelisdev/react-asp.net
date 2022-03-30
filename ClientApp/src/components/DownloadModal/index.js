import React from "react";
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
	newPosOfDialog: {
		left: "60%",
		float: "right !important",
		height: '100%',
		width: '50%',
		background: 'rgb(98, 1, 255) !important'
	}
});



function DownloadModal ({ open, onClose, ransitionComponent}) {
	
	const classes = useStyles();
    return (
		<Dialog classes={{
			paper: classes.newPosOfDialog
		  }}
		fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={ransitionComponent}>
			<div className="contact-modal">
			<Toolbar>
				<IconButton
					onClick={onClose}
					aria-label="close"
				>
					<CloseIcon />
				</IconButton>
			</Toolbar>

			<DialogTitle><p className="download-modal-title">LET'S<br/>DO IT!</p></DialogTitle>
            <div className="download-modal-content">To start trialing ListSync, please note the following:</div>
            <div className="download-modal-list-container">
                <ul className="download-modal-list">
                    <li>Purchasing a plan is managed inside our app.</li>
                    <li>You will need to install our app first, try it out and then select a plan.</li>
                    <li>The download button below will provide a PDF guide to installing our app onto your SharePoint environment.</li>
                </ul>
            </div>
            <div className="download-modal-content">If you have any question, please contact us on <a href="info@thorapps.co" style={{color: '#FFF'}} target='_black'>info@thorapps.com</a></div>
            <div className="download-btn-container">
                <input type="button" className="download-btn" value="DOWNLOAD" />
            </div>
			</div>
		</Dialog>
    )
}

export default DownloadModal