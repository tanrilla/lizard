import React from 'react';
//import {Link} from 'react-router-dom';
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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

        <Menu.Item>
          <Button primary>Create</Button>
        </Menu.Item>
      </Menu>

    );
  }
    
}

export default MenuHeader;