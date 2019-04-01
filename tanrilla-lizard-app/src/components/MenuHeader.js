import React from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class MenuHeader extends React.Component {

  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Menu size='mini'>
        <Menu.Item>
          <img src='/lizard.png' />
        </Menu.Item>

        <Menu.Item header
          content='LIZARD'
          as={Link} to='/'
        />
        <Dropdown item text='Issues'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/issue-list'>Search for issues</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <Button color="green">Create</Button>
        </Menu.Item>

        <Menu.Menu position='right'>
            <Dropdown item text={window.currentUser.firstName + ' ' + window.currentUser.lastName} image>
              <Dropdown.Menu>
                <Dropdown.Item>Account</Dropdown.Item>
                <Dropdown.Item>Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
      </Menu>

    );
  }
    
}

export default MenuHeader;