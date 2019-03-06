import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomTable from '../../components/CustomTable';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';

import { getIssues } from '../../actions/IssueAction';



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
    
    componentWillReceiveProps (nextProps) {
        this.setState({rows: nextProps.issueList});
    }

    componentDidMount () {
        this.props.getIssues();
    }

    handleClickOpen = () => {
        this.setState({ openModal: true });
    };

    handleClose = () => {
        this.setState({ openModal: false });
    };

    // Components

    newPopup = () => {
        return (
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

        );
    };

    render(){
        return(
            <div> 

                <CustomTable 
                    data={this.state.rows} 
                    header={this.cells} 
                    addOnClick={this.handleClickOpen} 
                    title={"Issue List"}/>
                {this.newPopup()}
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        issueList: state.issue.issueList
    };
};

export default connect(mapStateToProps,{getIssues})(IssueList);
