import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { login } from '../../actions/LoginAction';
import MenuHeader from '../MenuHeader';
import Main from '../Main';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: null,
      password: null
    };
  }

  loginOnClick = () => {
    this.props.login(this.state.username, this.state.password);
  }

  
  onChangeUsername = (event) => {
    this.setState({username: event.target.value});
  };

  onChangePassword = (event) => {
    this.setState({password: event.target.value});
  };

  LoginForm () {
      return  (
          <div className='login-form'>
            <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}
            </style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='grey' textAlign='center'>
                  <Image src='/lizard.png' /> 
                    Log-in to your account
                </Header>
                <Form size='large'>
                  <Segment stacked>
                    <Form.Input 
                      fluid 
                      icon='user' 
                      iconPosition='left' 
                      placeholder='E-mail address' 
                      onChange={this.onChangeUsername}/>
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                      onChange={this.onChangePassword}
                    />
        
                    <Button color='green' fluid size='large' onClick={this.loginOnClick}>
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  New to us? Sign Up
                </Message>
              </Grid.Column>
            </Grid>
          </div>
        );
      }


    renderLogin() {
      if(this.props.isLoggedIn){
        return (
          <BrowserRouter>
            <div>
              <MenuHeader />
              <Main/>
            </div>
          </BrowserRouter>
          );
      }
      return this.LoginForm();
    }

    render () {
      return this.renderLogin();
    }

}



const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
};

const actions = {
  login
};

export default connect(mapStateToProps,actions)(Login);