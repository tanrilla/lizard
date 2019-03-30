import React from 'react';
import { Button, Modal, Menu, Form } from 'semantic-ui-react';

class CreateIssue extends React.Component {

    state = {
        friendOptions: [
            {
              key: 'Jenny Hess',
              text: 'Jenny Hess',
              value: 'Jenny Hess'
            },
            {
              key: 'Elliot Fu',
              text: 'Elliot Fu',
              value: 'Elliot Fu'
            },
            {
              key: 'Stevie Feliciano',
              text: 'Stevie Feliciano',
              value: 'Stevie Feliciano'
            },
            {
              key: 'Christian',
              text: 'Christian',
              value: 'Christian'
            },
            {
              key: 'Matt',
              text: 'Matt',
              value: 'Matt'
            },
            {
              key: 'Justen Kitsune',
              text: 'Justen Kitsune',
              value: 'Justen Kitsune'
            },
          ]
    }
    

    render() {
        return (
            <div>
                <Menu.Item>
                    <Modal trigger={<Button primary>Create</Button>}>
                        <Modal.Header>Create issue</Modal.Header>
                        <Modal.Content scrolling>
                            <Modal.Description>
                                <Form>
                                    <Form.Dropdown label="Project" placeholder='Select Friend' fluid selection options={this.state.friendOptions} />
                                    <Form.Dropdown label="Type" placeholder='Select Friend' fluid selection options={this.state.friendOptions} />
                                    <Form.Input label="Summary" placeholder='First name' />
                                    <Form.TextArea label='Description' placeholder='Tell us more about you...' />
                                    <Form.Dropdown label="Priority" placeholder='Select Friend' fluid selection options={this.state.friendOptions} />
                                    <Form.Dropdown label="Asignee" placeholder='Select Friend' fluid selection options={this.state.friendOptions} />
                                    <Form.Input label="Due date" placeholder='First name' />
                                </Form>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button primary>Create</Button>
                        </Modal.Actions>
                    </Modal>
                </Menu.Item>
            </div>
        );
    }
}

export default CreateIssue;