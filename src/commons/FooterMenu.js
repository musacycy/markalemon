import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
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
        const {isClick} = this.state
        return (
          <TouchableOpacity onPress={this.clickEvent} >
          {
            isClick ? <FontAwesomeIcon  icon={this.props.icon} size={this.props.size}></FontAwesomeIcon> :
                      <FontAwesomeIcon  icon={this.props.icon} size={this.props.size} color={this.props.color} ></FontAwesomeIcon> 
          }

        </TouchableOpacity>
        )
    }
}
export default FooterMenu;