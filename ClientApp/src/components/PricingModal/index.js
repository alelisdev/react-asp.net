import React from "react";
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import DialogContentText from '@mui/material/DialogContentText';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	newPosOfDialog: {
		maxWidth: '1000px !important',
		background: 'rgb(98, 1, 255) !important'
	}
});

function PricingModal ({ open, onClose}) {

    const navigate = useNavigate();

    const theme = useTheme();
    const classes = useStyles();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const onclickContactUS = (e) => {
        navigate('/contact');
    }
    return (
        <Dialog classes={{
			paper: classes.newPosOfDialog
		}}
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
        >
        <div className="pricing-modal">
        <Toolbar>
            <IconButton
                edge="end"
                color="inherit"
                onClick={onClose}
                aria-label="close"
            >
            <CloseIcon />
            </IconButton>
		</Toolbar>
            <div className="pricing-content">
              <div className="pricing-title">PRICING</div>
              <div className="pricing-desc">Consumption is calculated by compute time. You can find out the per minute compute rate and monitor it from within each app.</div>
              <div className="pricing-desc">Once your monthly plan limit is reached, you can either continue using ThorApps services, with additional usage charges applied to your invoice, or have the services disabled until the next payment period begins.</div>
                <div className="pricing-sb-title">- For BI Service:</div>
                <div className="pricing-desc">BI Service price is based on compute time to run report executions and subscriptions deliveries.</div>
                <div className="pricing-desc">A report execution is a user running 1 report in a web browser (either in the app or in a web part). The average report takes 3.5 seconds. </div>
                <div className="pricing-desc">A subscription delivery is a back-ground job that runs a report and either emails it or publishes it to a SharePoint Library. The average time per delivery is 1.9 seconds.</div>
                
                <div className="pricing-sb-title">-    For ListSync:</div>
                <div className="pricing-desc">ListSync price is based on item sync's and list instance sync's.</div>
                <div className="pricing-desc">An item sync is a user either creating, editing or deleting one item in a SharePoint list or library. The average time per item event is 2.7 seconds. </div>
                <div className="pricing-desc">List Instance Sync's are daily background jobs that cycle through all list instances configured for replication, and re-sync (just in case Microsoft dropped an event). The average time per list instance (average of about 8 items) is 2.5 seconds.</div>
          {/* </DialogContentText>
        </DialogContent> */}
            </div>
            <div className="download-btn-container">
                <input type="button" className="download-btn" onClick={onclickContactUS} value="CONTACT US" />
            </div>
        </div>
      </Dialog>
    )
}

export default PricingModal;