import React, { Component } from 'react';
//import CustomTable from '../../components/CustomTable';



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

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import AddIcon from '@material-ui/icons/Add';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const toolbarStyles = theme => ({
    root: {
      paddingRight: theme.spacing.unit,
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    spacer: {
      flex: '1 1 100%',
    },
    actions: {
      color: theme.palette.text.secondary,
    },
    title: {
      flex: '0 0 auto',
    },
  });
  

let EnhancedTableToolbar = props => {
    const { numSelected, classes, title ,addOnClick} = props;
  
    return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography component='span' color="inherit" variant="subtitle1">
              {numSelected} selected
            </Typography>
          ) : (
            <Typography component='span'  id="tableTitle" variant="h6">
              {title}
            </Typography>
          )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          {numSelected > 0 ? (
            <Tooltip title="Delete">
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Add New">
              <IconButton aria-label="Add New" onClick={addOnClick}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
  };
  
  EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);


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

            <Paper>
              <EnhancedTableToolbar title={'Issue List'} addOnClick={this.handleClickOpen} numSelected={0}/>
              <Table>
                <TableHead>
                  <TableRow>
                    {this.cells.map((cell, index) => (
                      <TableCell key={index} align="left">{cell.name}</TableCell>
                      ))}
                  </TableRow>
                </TableHead>
                <TableBody>                
                  {this.state.rows.map(row => (
                    <TableRow key={row.id}>
                      {this.cells.map((cell, index) => (
                      <TableCell key={index} align="left">{row[cell.keyName]}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>



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
