import React from 'react';
import { StyleSheet,   View ,BackHandler } from 'react-native';
import StackScreen from '../../../components/Banaozel/StackScreen' 
import DefaultBackground from '../../../components/Banaozel/DefaultBackground'    
import OlculerStack from '../../../components/Banaozel/OlculerStack'    
import LinearGradient from 'react-native-linear-gradient';
 
export default class OlculerimScreen extends React.Component {
    constructor(props){ 
        super(props);  
    }

    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  
  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    // this.props.history.goBack()
    // console.log('historyxxx2',this.props.history)
    return true;
}

  render()  
  {     
    return( 
        <View style={{ flex:1,backgroundColor:'#fff',zIndex:-1}}>

            <DefaultBackground
              title={'Ölçümlerim'}
            />  

            <View style={{ flex:1, backgroundColor: '#fff' , height:'100%',width:'100%' ,paddingLeft:10,paddingRight:10,zIndex:100}}>     

                <OlculerStack /> 

            </View>
            
        </View>
 
    )
  }
}
const styles = StyleSheet.create({ 

  });