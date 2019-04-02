import React from 'react';
import { connect } from 'react-redux';
import { Table, Dropdown } from 'semantic-ui-react';

import {
    getProjects,
    deleteProject,
    getProject,
    clearProjectState
} from '../actions/ProjectAction';

class ProjectList extends React.Component {

    componentDidMount () {
        this.props.getProjects(window.currentUser.id);
        document.title = "Projects";
      }
    
      selectRowAction = (id) => {
        //this.props.clearState();
        this.props.history.push(`/project-issues/${id}`);
      };
    
      renderDropdownOptions (id) { 
        return (
        <Dropdown icon='sidebar'>
          <Dropdown.Menu>
            <Dropdown.Item text='Show Issues' description='' onClick={event => this.selectRowAction(id)}/>
            <Dropdown.Item text='Favourite' /> 
            <Dropdown.Item icon="star" text='Favourite'/> 
            <Dropdown.Item icon='trash' text='Delete' />
          </Dropdown.Menu>
        </Dropdown>);
      }

    renderList() {
        return this.props.projectList.map(proy => {
          return (
            <Table.Row key={proy.id} onClick={event => this.selectRowAction(proy.id)} >
              <Table.Cell>{this.renderDropdownOptions(proy.id)}</Table.Cell>
              <Table.Cell>{proy.id}</Table.Cell>
              <Table.Cell>{proy.name}</Table.Cell>
              <Table.Cell>{proy.shortName}</Table.Cell>       
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
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Short Name</Table.HeaderCell>
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
        projectList: state.project.projectList,
        project: state.project.project
    };
  };
  
  const actions = {
    getProjects, 
    deleteProject, 
    getProject, 
    clearProjectState
  };
  
  export default connect(mapStateToProps,actions)(ProjectList);