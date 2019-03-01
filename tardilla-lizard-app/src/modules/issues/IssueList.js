import React, { Component } from 'react';
import CustomTable from '../../components/CustomTable';



import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import IssueService from '../../services/IssueService';
import axios from 'axios';


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class IssueList extends Component {

    state = {
        openModal: false,
        rows: [],
    };

    constructor(props){
        super(props); 
        this.cells =[
            {keyName: 'email', name: 'Name'}
          ];

        
      }
    
    async componentDidMount () {

        var obj = new IssueService();
        //obj.getAllIssues();
        var url = 'http://rfigueroa.duckdns.org/tool/api/mail';
        const { data: rows } = await axios.get(url);
        this.setState({rows});
    }

    handleClickOpen = () => {
        this.setState({ openModal: true });
    };

    handleClose = () => {
        this.setState({ openModal: false });
    };

    render(){
        return(
            <div> 

                <CustomTable data={this.state.rows} header={this.cells} addOnClick={this.handleClickOpen} title={"Issue List"}/>
                <div>
                    <Dialog
                    open={this.state.openModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"New Issue"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            fullWidth
                            />

                        <TextField
                            margin="dense"
                            id="description"
                            label="Description"
                            fullWidth
                            />

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            CANCEL
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            SAVE
                        </Button>
                    </DialogActions>
                    </Dialog>
                </div>        
            </div>

        )
    }
}


export default IssueList;
