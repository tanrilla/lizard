import React from 'react';
import { connect } from 'react-redux';
import { saveIssue } from '../actions/IssueAction';
import { Button, Modal, Menu, Form } from 'semantic-ui-react';

class CreateIssue extends React.Component {

    state = {
      projects: [
        {
          key: '1',
          text: 'Lizard',
          value: '1'
        }
      ],
      types: [
        {
          key: '1',
          text: 'Defect',
          value: '1'
        },
        {
          key: '2',
          text: 'New Feature',
          value: '2'
        },
        {
          key: '3',
          text: 'Improvement',
          value: '3'
        }
      ],
      priorities: [
        {
          key: '1',
          text: 'P1',
          value: '1'
        },
        {
          key: '2',
          text: 'P2',
          value: '2'
        },
        {
          key: '3',
          text: 'P3',
          value: '3'
        }
      ],
      users: [
        {
          key: '1',
          text: 'Cesar K',
          value: '1'
        },
        {
          key: '2',
          text: 'Ricardo F',
          value: '2'
        }
      ],
      projectId: null,
      typeId: null,
      summary: '',
      description: '',
      priorityId: null,
      asigneeId: null,
      dueDate: '',
      statusId: 1
    }
    
    /** Actions */
    saveIssue () {
      let issue = {
        summary: this.state.summary,
        description: this.state.description,
        project: {
          id: this.state.projectId
        },
        dueDate: this.state.dueDate,
        priority: {
          id: this.state.priorityId
        },
        status: {
          id: this.state.statusId
        },
        type: {
          id: this.state.typeId
        },
        assignee: {
          id: this.state.asigneeId
        },
        createdDate: new Date(),
        modifiedDate: new Date()
      };
      this.props.saveIssue(issue);
      console.log(this.state);
    }

    onChangeProject = (event, data) => {
      this.setState({projectId: data.value});
    }

    onChangeType = (event, data) => {
      this.setState({typeId: data.value});
    }

    onChangeSummary = (event) => {
      this.setState({summary: event.target.value});
    }

    onChangeDescription = (event) => {
      this.setState({description: event.target.value});
    }

    onChangePriority = (event, data) => {
      this.setState({priorityId: data.value});
    }

    onChangeAsignee = (event, data) => {
      this.setState({asigneeId: data.value});
    }

    onChangeDueDate = (event) => {
      this.setState({dueDate: event.target.value});
    }

    render() {
        return (
            <div>
                <Menu.Item>
                    <Modal trigger={<Button color="green">Create</Button>}>
                        <Modal.Header>Create issue</Modal.Header>
                        <Modal.Content scrolling>
                            <Modal.Description>
                                <Form>
                                    <Form.Dropdown label="Project" placeholder='Select project' fluid selection options={this.state.projects} value={this.state.projectId} onChange={this.onChangeProject} />
                                    <Form.Dropdown label="Type" placeholder='Select type' fluid selection options={this.state.types} value={this.state.typeId} onChange={this.onChangeType} />
                                    <Form.Input label="Summary" value={this.state.summary} onChange={this.onChangeSummary} />
                                    <Form.TextArea label='Description' value={this.state.description} onChange={this.onChangeDescription} />
                                    <Form.Dropdown label="Priority" placeholder='Select priority' fluid selection options={this.state.priorities} value={this.state.priorityId} onChange={this.onChangePriority} />
                                    <Form.Dropdown label="Asignee" placeholder='Select asignee' fluid selection options={this.state.users} value={this.state.asigneeId} onChange={this.onChangeAsignee} />
                                    <Form.Input label="Due date" value={this.state.dueDate} onChange={this.onChangeDueDate} placeholder="YYYY-MM-DD" />
                                </Form>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button primary onClick={event => this.saveIssue()}>Create</Button>
                        </Modal.Actions>
                    </Modal>
                </Menu.Item>
            </div>
        );
    }
}

const actions = {
  saveIssue
};

export default connect(null,actions)(CreateIssue);