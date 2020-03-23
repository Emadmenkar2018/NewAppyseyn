import React, { memo } from 'react';
import {
  View,
  StyleSheet,  
  Image,
  Text,
  TouchableOpacity
} from 'react-native'; 
import { Icon } from 'react-native-elements'  
import LinearGradient from 'react-native-linear-gradient';
import Calender from './Calender' 
import { useHistory } from 'react-router-native'; 

const DefaultBackground =  ({ children,firstColor,secondColor, ...props  }) =>   {
  let history = useHistory();
  return(

    <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={[firstColor?firstColor :'#2C2C5E', secondColor? secondColor:'#3F3164']}  style={{width: '100%', height: '35%',backgroundColor:'#fff',borderLeftColor:'#fff',paddingLeft:15,paddingRight:15,borderBottomLeftRadius:40,borderBottomRightRadius:40,zIndex:-1,overflow:'visible'}}  > 
      <View style={{flexDirection:'row',justifyContent:'space-between' ,backgroundColor:'transparent',width:'100%',marginTop:40,zIndex:0}}>
          <TouchableOpacity onPress={()=>props.openControlPanel()}>
            <Icon name="menu" type ='material' size={35}  color={firstColor ? '#1D253C':'#999'}   />
          </TouchableOpacity>

          <Text style ={{alignSelf:'center',fontSize:27,fontWeight:'bold',fontFamily:'Muli-Bold',color:'#999'}}>{props.title}</Text> 

          <TouchableOpacity onPress={()=>history.push('/Main/Store')}>
            <Image
              resizeMode={'contain'}
              style={styles.stretch}
              source={require('../../assets/addBtn.png')} 
              tintColor={ firstColor ? '#1D253C':'#999'}
            />
          </TouchableOpacity>
      </View>

      <Calender
       currentIndex={props.index}
       /> 
      
    </LinearGradient>  
  )}

const styles = StyleSheet.create({ 
  stretch:{ 
    height:35,
    width:45, 
},
});

export default memo(DefaultBackground);