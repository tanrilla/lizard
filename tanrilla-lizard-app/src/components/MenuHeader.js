import React from 'react';
import { Button, Dropdown, Menu, Modal } from 'semantic-ui-react';
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
          <Modal trigger={<Button primary>Create</Button>}>
            <Modal.Header>Create issue</Modal.Header>
            <Modal.Content scrolling>
              <Modal.Description>
                <p>Body of issue creation modal...</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary>Create</Button>
            </Modal.Actions>
          </Modal>
        </Menu.Item>
      </Menu>

    );
  }
    
}

export default MenuHeader;