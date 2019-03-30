import React from 'react';
import { Table, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getIssues, saveIssue, deleteIssue, getIssue, updateIssue, clearState } from '../actions/IssueAction';

class IssueList extends React.Component {

  componentDidMount () {
    this.props.getIssues();
    document.title = "Issues";
  }

  selectRowAction = (id) => {
    this.props.clearState();
    this.props.history.push(`/issue-detail/${id}`);
  };

  renderDropdownOptions (id) { 
    return (
    <Dropdown>
      <Dropdown.Menu>
        <Dropdown.Item text='Show' description='' onClick={event => this.selectRowAction(id)}/>
        <Dropdown.Item text='Edit' />        
        <Dropdown.Item icon='trash' text='Delete' />
      </Dropdown.Menu>
    </Dropdown>);
  }

  renderList() {
    return this.props.issueList.map(issue => {
      return (
        <Table.Row key={issue.id} onClick={event => this.selectRowAction(issue.id)} >
          <Table.Cell>{this.renderDropdownOptions(issue.id)}</Table.Cell>
          <Table.Cell>{issue.id}</Table.Cell>
          <Table.Cell>{issue.summary}</Table.Cell>
          <Table.Cell>{issue.status.name}</Table.Cell>
          <Table.Cell>{issue.type.name}</Table.Cell>
          <Table.Cell>{issue.project === null ? '' : issue.project.name}</Table.Cell>
          <Table.Cell>{issue.dueDate}</Table.Cell>
          <Table.Cell>{issue.assignee === null ? 'Unassigned' : issue.assignee.firstName}</Table.Cell>          
        </Table.Row>
      );
    });
  }

  render() {
    return (
        <div>
          <Table selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Summary</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Project</Table.HeaderCell>
                <Table.HeaderCell>Due date</Table.HeaderCell>
                <Table.HeaderCell>Asignee</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.renderList()}
            </Table.Body>
          </Table>
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