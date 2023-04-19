import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {useEffect} from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({ showMessage, setShowMessage,closeDuration = 6000 }) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowMessage({
      ...showMessage,
      visible: false,
    });
  };

  useEffect(()=>{
  const timer =  setTimeout(()=>{
      setShowMessage({
        ...showMessage,
        visible: false,
      });
    },closeDuration)
    return () => {
      clearTimeout(timer)
    }
  },[showMessage])

  return (
    <Stack spacing={2} sx={{ width: '100%' }} className={`toast-wrapper-${showMessage.type}`}>
      <Snackbar open={showMessage.visible}  onClose={handleClose} anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }} >
        <Alert onClose={handleClose} severity={showMessage.type} sx={{ width: '100%' }}>
          {showMessage.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}





