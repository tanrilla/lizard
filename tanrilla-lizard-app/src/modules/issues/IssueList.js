import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomTable from '../../components/CustomTable';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';

import { getIssues, saveIssue, deleteIssue, getIssue, updateIssue, clearState } from '../../actions/IssueAction';



function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class IssueList extends Component {

    state = {
        openModal: false,
        id: null,
        rows: [],
        name: '',
        description: '',
        editMode: false
    };

    constructor(props){
        super(props); 
        this.cells =[
            {keyName: 'name', name: 'Name'}
          ];        
      }
    
    componentWillReceiveProps (nextProps) {
        this.setState({rows: nextProps.issueList});
        if(nextProps.issue !== null){
            this.setState({ 
                id: nextProps.issue.id,
                name: nextProps.issue.name,
                description: nextProps.issue.description,
                openModal: true 
            });
        }
        
    }

    componentDidMount () {
        this.props.getIssues();
    }

    handleClickOpen = () => {
        this.setState({ 
            editMode: false,
            openModal: true 
        });
    };

    handleClose = () => {
        this.clearForm();
    };

    handleSave = () => {
        if(this.state.editMode === true){
            this.props.updateIssue({
                id: this.state.id,
                name: this.state.name,
                description: this.state.description,
                userId: 1
            });
        }else{
            this.props.saveIssue({
                name: this.state.name,
                description: this.state.description,
                userId: 1
            });
        }

        this.clearForm();
    };

    deleteOnClick = (id) =>{
        this.props.deleteIssue(id);
    };

    editOnClick = (id) =>{
        this.setState({editMode: true});
        this.props.getIssue(1, id);        
    };

    clearForm = () => {
        this.props.clearState();
        this.setState({ 
            id: null,
            name: '',
            description: '',
            openModal: false 
        });
    }

    // Components
    handleChange = (name) => event => {
        this.setState({ [name]: event.target.value });
    };

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
                
                <TextField
                    
                    margin="dense"
                    id="name"
                    label="Name"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    fullWidth
                    />
        
                <TextField
                    margin="dense"
                    id="description"
                    label="Description"
                    value={this.state.description}
                    onChange={this.handleChange('description')}
                    fullWidth
                    />

            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    CANCEL
                </Button>
                <Button onClick={this.handleSave} color="primary">
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
                    deleteOnClick={this.deleteOnClick}
                    editOnClick={this.editOnClick}
                    title={"Issue List"}/>
                {this.newPopup()}
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        issueList: state.issue.issueList,
        issue: state.issue.issue
    };
};

const actions = {
    getIssues, 
    saveIssue, 
    deleteIssue, 
    getIssue, 
    updateIssue,
    clearState
};

export default connect(mapStateToProps,actions)(IssueList);
