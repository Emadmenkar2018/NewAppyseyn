import React from 'react';
import { StyleSheet,   View } from 'react-native';
import StackScreen from '../../../components/Banaozel/StackScreen' 
import DefaultBackground from '../../../components/Banaozel/DefaultBackground'    
import OlculerStack from '../../../components/Banaozel/OlculerStack'    
import LinearGradient from 'react-native-linear-gradient';
 
export default class OlculerimScreen extends React.Component {
    constructor(props){ 
        super(props);  
    }
  render()  
  {    console.log('Hi')
    return( 
        <View style={{ flex:1,backgroundColor:'#fff',zIndex:-1}}>

            <DefaultBackground/>  

            <View style={{ flex:1, backgroundColor: '#fff' , height:'100%',width:'100%' ,paddingLeft:10,paddingRight:10,zIndex:100}}>     

                <OlculerStack /> 

            </View>
            
        </View>
 
    )
  }
}
const styles = StyleSheet.create({ 

  });