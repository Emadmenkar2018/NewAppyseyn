import React ,{useEffect} from 'react';
import { StyleSheet,   View ,BackHandler } from 'react-native';
import StackScreen from '../../../components/Banaozel/StackScreen' 
import DefaultBackground from '../../../components/Banaozel/DefaultBackground'    
import OlculerStack from '../../../components/Banaozel/OlculerStack'    
import LinearGradient from 'react-native-linear-gradient'; 
import { useHistory } from 'react-router-native'; 

const  OlculerimScreen = (...props ) =>{  
  let history = useHistory();   

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backButtonHandler);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
    };
  }, [backButtonHandler]);
 

  const backButtonHandler = () => {
    history.goBack()
    return true;
  } 
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
export default OlculerimScreen
const styles = StyleSheet.create({ 

  });