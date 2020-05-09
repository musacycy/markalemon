import React, { Component } from 'react';
import {Image, Dimensions} from 'react-native';
import { Container, Header, Content,Form,Item,Label,Input, Button, Left, Right, Body, Icon, Text} from 'native-base';
import SubmitButton from '../commons/SubmitButton.js';
import FooterMenu from '../commons/FooterMenu';
const {width, height} = Dimensions.get('window');
export default class LoginPage extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
           <Text>mobilemarket</Text>
          </Body>
          <Right />
        </Header>
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
            <SubmitButton Text="Submit" />
          </Form>
        </Content>
        <FooterMenu />
        
      </Container>
    );
  }
}
