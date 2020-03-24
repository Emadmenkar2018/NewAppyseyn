import React from 'react';
import { StyleSheet,   View } from 'react-native';
import StackScreen from '../../../components/Banaozel/StackScreen' 
import MainBackground from '../../../components/Banaozel/MainBackground'    
import MySideBar from '../../../components/SideMenu/MySideBar'
 
export default class BanaOzelScreen extends React.Component {
    constructor(props){ 
        super(props);  
        this.myMenu = React.createRef();
    }

     _openControlPanel = () => {
      // _drawer.open()
      this.myMenu.current.open()
      // myMenu.current.open()
  };
  render()  
  {     
    return( 
        <MySideBar 
            ref={this.myMenu}
            {...this.props}
          > 
        <View style={{ flex:1,backgroundColor:'#fff',zIndex:0}}>

            <MainBackground
              {...this.props}
              firstColor={'#26C8A8'}
              secondColor={'#26C8A8'}
              openControlPanel={this._openControlPanel}
              title={'Bana Özel'}
            />  

            <View style={{ flex:1, backgroundColor: '#fff' , height:'100%',width:'100%' ,paddingLeft:10,paddingRight:10,zIndex:100 }}>     

                <StackScreen 
                  history = {this.props.history}
                  {...this.props}
                /> 

            </View>
            
        </View>
        </MySideBar>
    )
  }
}
const styles = StyleSheet.create({ 

  });