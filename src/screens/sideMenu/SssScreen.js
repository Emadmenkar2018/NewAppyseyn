import React, { Component ,useEffect} from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,Image,BackHandler} from 'react-native';
import { WebView } from 'react-native-webview';
import { useHistory } from 'react-router-native'; 
import { Icon } from 'react-native-elements'  
const SssScreen= ({  ...props })=> {
 
  let history = useHistory();   

    useEffect(() =>{ 
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
      <View style ={{width:'100%',height:'100%'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between' ,backgroundColor:'transparent',width:'100%',marginTop:40,zIndex:0}}>
               
            <TouchableOpacity onPress={()=>history.goBack()}>
              <Icon name="arrow-back" type ='material' size={35}  color='#999'   />
            </TouchableOpacity>
             

              <Text style ={{alignSelf:'center',fontSize:27,fontWeight:'bold',fontFamily:'Muli-Bold',color:'#999'}}>SSS</Text> 

              {/* <TouchableOpacity onPress={()=>history.push('/Main/Store')}> */}
                <Image
                  resizeMode={'contain'}
                  style={styles.stretch}
                  source={null} 
                  tintColor={ '#1D253C' }
                />
              {/* </TouchableOpacity> */}
          </View>
          <WebView source={{ uri: 'http://appisyen.com/' }} />
      </View>  
    )
    
} 
export default SssScreen;

const styles = StyleSheet.create({
  stretch:{ 
    height:35,
    width:45, 
  } ,
})