import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
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

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

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


class CustomTable extends Component{

    constructor(props){
      super(props);
      this.rows = props.data;
      this.cells = props.header;
      
    }
      
    render() {

        const { classes, title, addOnClick } = this.props;
        console.log(this.rows);
        return (
            <Paper className={classes.root}>
              <EnhancedTableToolbar title={title} addOnClick={addOnClick} numSelected={0}/>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    {this.cells.map((cell, index) => (
                      <TableCell key={index} align="left">{cell.name}</TableCell>
                      ))}
                  </TableRow>
                </TableHead>
                <TableBody>                
                  {this.rows.map(row => (
                    <TableRow key={row.id}>
                      {this.cells.map((cell, index) => (
                      <TableCell key={index} align="left">{row[cell.keyName]}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          );

    }


}

CustomTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(CustomTable);