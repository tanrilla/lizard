import React from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getIssues, saveIssue, deleteIssue, getIssue, updateIssue, clearState } from '../actions/IssueAction';

class IssueList extends React.Component {

  state = {
    rows: [],
  };

  componentDidMount () {
    this.props.getIssues();
    console.log(this.props.issueList);
    this.setState({ rows : this.props.issueList });
  }

  renderList() {
    //console.log(this.state.rows);
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Registration Date</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jamie Harington</Table.Cell>
            <Table.Cell>January 11, 2014</Table.Cell>
            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 11, 2014</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }

  render() {
    return (
        <div>
            {this.renderList()}
        </div>
    );
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