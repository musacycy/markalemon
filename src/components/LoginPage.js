import React, { Component } from 'react';
import {Image, Dimensions} from 'react-native';
import { Container, Content,Form,Item,Label,Input} from 'native-base';
import SubmitButton from '../commons/SubmitButton.js';
import FbLogin from '../commons/FbLogin';
import GoogleLogin from '../commons/GoogleLogin';
const {width, height} = Dimensions.get('window');
export default class LoginPage extends Component {
  render() {
    return (
      <Container>
        <Content>
        <Image style={{width: width, height: height * 0.35}}  source={require('../img/slashbg1.png')}></Image>
        <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <SubmitButton Text="Sign in" />
            <FbLogin Text='Login with Facebook'></FbLogin>
            <GoogleLogin Text='Login with Google'></GoogleLogin>
         
          </Form>
          

        </Content>
      
      </Container>
    );
  }
}
