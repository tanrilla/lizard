import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Modal, Menu, Button, Form } from "semantic-ui-react";
import { Link } from 'react-router-dom';

import {    
    saveProject,    
    getProject,
    updateProject,
    clearProjectState
} from '../actions/ProjectAction';

class CreateProject extends React.Component {

    constructor() {
        super();
        this.state = { 
            open: false,
            shortName: '',
            name: ''
        };

        this.openModal = this.openModal.bind(this);

      }
    
      openModal(evt) {
        evt.preventDefault();
        this.setState({
            shortName: '',
            name: ''
        });
        this.setState({ open: !this.state.open });
      }


      /* Actions */
      saveProject () {
          var project = {
            name: this.state.name,
            shortName: this.state.shortName,
            createdBy: window.currentUser.id
          };

          this.props.saveProject(project, project.createdBy);

          this.setState({ open: false });
          //this.props.history.push(`/project-list`);
      }
    
      onChangeName = (event) => {
        this.setState({name: event.target.value});
      };

      onChangeShortName = (event) => {
        this.setState({shortName: event.target.value});
      };

      render() {
        return (
        <Menu.Item>
          <Dropdown text="Project">
            <Dropdown.Menu>
              <Modal trigger={<Dropdown.Item onMouseDown={this.openModal}> New Project </Dropdown.Item>} open={this.state.open}>
                <Modal.Header>Create Project</Modal.Header>
                <Modal.Content scrolling>
                    <Modal.Description>
                        <Form>
                            <Form.Input label="Name" value={this.state.name} onChange={this.onChangeName} />
                            <Form.Input label="Short Name" value={this.state.shortName} onChange={this.onChangeShortName} />
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                     <Button color="gray" onClick={event => this.setState({open: false})}>Cancel</Button>
                     <Button primary onClick={event => this.saveProject(event)}>Create</Button>
                </Modal.Actions>

              </Modal>

              <Dropdown.Item as={Link} to='/project-list'>Search for Projects</Dropdown.Item>
            
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        );
      }
}

const mapStateToProps = state => {
    return {
        project: state.project.project
    };
  };
  
  const actions = {
    saveProject, 
    getProject, 
    updateProject,
    clearProjectState
  };
  
export default connect(mapStateToProps,actions)(CreateProject);