import React from 'react';
// import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './TodoItem/TodoItem.css';

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);

    // const { id, onRemove } = this.props;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const handleRemove = (id) => {
    //     onRemove(id);
    // };

    return (
        <div>

            {/* <div className="remove" onClick={(e) => {
                e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                onRemove(id)
            }
            }> Delete </div> */}

            {/* <div className="remove" onClick={(e) => {
                e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                onRemove(id)
            }
            }>11</div> */}

            <div className="remove" variant="outlined" color="primary" onClick={handleClickOpen}>
                Delete
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete Confirm"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        if you delete this list, can't go back
            </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
            </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        YES
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
