import React from 'react';
import { connect } from 'react-redux';
import { saveIssue } from '../actions/IssueAction';
import { getProjectList, getTypeList, getPriorityList, getUsers } from '../actions/CommonAction';
import { Button, Modal, Menu, Form } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

class CreateIssue extends React.Component {

    state = {
      projects: [],
      types: [],
      priorities: [],
      users: [],
      projectId: null,
      typeId: null,
      summary: '',
      description: '',
      priorityId: null,
      asigneeId: null,
      dueDate: '',
      statusId: 1,
      modalOpen: false
    }
    
    componentDidMount() {
      this.props.getTypeList();
      this.props.getProjectList();
      this.props.getPriorityList();
      this.props.getUsers();
    }
/*
    componentWillReceiveProps(nextProps) {
      if(nextProps.projectList){
        this.setState({ projects: nextProps.projectList.map(element => ({
          key: element.id,
          text: element.name,
          value: element.id
        }))});
      }
      if(nextProps.typeList){
        this.setState({ types: nextProps.typeList.map(element => ({
          key: element.id,
          text: element.name,
          value: element.id
        }))});
      }
    }
*/

    static getDerivedStateFromProps(nextProps, prevState){
      let newState = {};
      if(nextProps.projectList){
        newState.projects = nextProps.projectList.map(element => ({
          key: element.id,
          text: element.name,
          value: element.id
        }));
      } 
      if(nextProps.typeList){
        newState.types = nextProps.typeList.map(element => ({
          key: element.id,
          text: element.name,
          value: element.id
        }));
      }
      if(nextProps.priorityList){
        newState.priorities = nextProps.priorityList.map(element => ({
          key: element.id,
          text: element.name,
          value: element.id
        }));
      }

      if(nextProps.userList){
        newState.users = nextProps.userList.map(element => ({
          key: element.id,
          text: `${element.firstName} ${element.lastName}`,
          value: element.id
        }));
      }

      return newState;
    }

    /** Actions */
    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false });

    clearState = () => {
      this.setState({
        projectId: null,
        typeId: null,
        summary: '',
        description: '',
        priorityId: null,
        asigneeId: null,
        dueDate: ''
      });
    }

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
      this.handleClose();
      this.clearState();
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

    onChangeDueDate = (event, {value}) => {
      this.setState({dueDate: value});
    }

    render() {
        return (
            <div>
                <Menu.Item>
                    <Modal
                      trigger={<Button primary onClick={this.handleOpen}>Create</Button>}
                      open={this.state.modalOpen}
                      onClose={this.handleClose}
                      >
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
                                    <DateInput closable label="Due date" name="date" placeholder="Date" value={this.state.dueDate} iconPosition="left" onChange={this.onChangeDueDate} dateFormat="YYYY-MM-DD" />
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

const mapStateToProps = state => {
  return {
      projectList: state.project.projectList,
      typeList: state.type.typeList,
      priorityList: state.priority.priorityList,
      userList: state.user.users
  };
};

const actions = {
  saveIssue,
  getProjectList,
  getTypeList,
  getPriorityList,
  getUsers
};

export default connect(mapStateToProps,actions)(CreateIssue);