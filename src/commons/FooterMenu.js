import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faUser,faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import { Footer, FooterTab} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

 class FooterMenu extends Component {

    state = {
        isClick : true,
        
      }
        clickEvent = () => {
     
       this.setState({
     
         isClick : !this.state.isClick
       })
     }

    render() {
        const {isClick} = this.state;
        return (
            <Footer>
            <FooterTab style={{marginHorizontal:20, justifyContent: 'space-between', alignItems:'center'}}>
              <TouchableOpacity key='home' onPress={this.clickEvent}>
                {
                  isClick ? <FontAwesomeIcon name='home' icon={faHome} size={32} size={32}></FontAwesomeIcon> :
                            <FontAwesomeIcon name='home' icon={faHome} size={32} color='orange'></FontAwesomeIcon> 
                }
  
              </TouchableOpacity>
              <TouchableOpacity key='search' onPress={this.clickEvent}>
                {
                  isClick ? <FontAwesomeIcon name='search' icon={faSearch} size={32}></FontAwesomeIcon> :
                            <FontAwesomeIcon name='search' icon={faSearch} size={32} color='orange'></FontAwesomeIcon> 
                }
  
              </TouchableOpacity>
              <TouchableOpacity onPress={this.clickEvent}>
                {
                  isClick ? <FontAwesomeIcon name='basket'icon={faShoppingBasket} size={32}></FontAwesomeIcon> :
                                  <FontAwesomeIcon name='basket'icon={faShoppingBasket} size={32} color='orange'></FontAwesomeIcon> 
                }
  
              </TouchableOpacity>
              <TouchableOpacity onPress={this.clickEvent}>
                {
                  isClick ? <FontAwesomeIcon name='account' icon={faUser} size={32}></FontAwesomeIcon> :
                                  <FontAwesomeIcon name='account' icon={faUser} size={32} color='orange'></FontAwesomeIcon>
                }
  
              </TouchableOpacity>
              
            </FooterTab>
          </Footer>
        )
    }
}
export default FooterMenu;