import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import CreateIssue from './CreateIssue';

class MenuHeader extends React.Component {

  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Menu size='mini'>
        <Menu.Item header
          content='LIZARD'
          as={Link} to='/'
        />
        <Dropdown item text='Issues'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/issue-list'>Search for issues</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <CreateIssue />

      </Menu>

    );
  }
    
}

export default MenuHeader;