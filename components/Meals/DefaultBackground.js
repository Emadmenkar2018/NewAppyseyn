import React, { memo } from 'react';
import {
  View,
  StyleSheet,  
  Image,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native'; 
import { Icon } from 'react-native-elements'  
import LinearGradient from 'react-native-linear-gradient';
import Calender from './Calender' 
import { useHistory } from 'react-router-native'; 
import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
const DefaultBackground =  ({ children,firstColor,secondColor, ...props  }) =>   {
  let history = useHistory();
  return(

    <ImageBackground   source={require('../../assets/meals.jpg')} resizeMode={'cover'}   style={{width: '100%' ,zIndex:-1 ,flex:0.4}} >
        {/* style={{width: '100%', height: '35%',backgroundColor:'#fff',borderLeftColor:'#fff',paddingLeft:15,paddingRight:15,borderBottomLeftRadius:40,borderBottomRightRadius:40,zIndex:-1,overflow:'visible'}}  >  */}
        <View style={{backgroundColor:'rgba(0,0,0,.3)' ,flex:1,paddingHorizontal:15}}>

            
          <View style={{flexDirection:'row',justifyContent:'space-between' ,backgroundColor:'transparent',width:'100%',marginTop:40,zIndex:0}}>
              <TouchableOpacity onPress={()=>props.openControlPanel()}>
                <Icon name="menu" type ='material' size={35}  color={firstColor ? '#1D253C':'rgba(255,255,255,.8)'}   />
              </TouchableOpacity>

              <Text style ={{alignSelf:'center',fontSize:responsiveScreenFontSize(2.5),fontFamily:'Merienda-Regular',color:'rgba(255,255,255,.8)'}}>{props.title}</Text> 

              <TouchableOpacity onPress={()=>history.push('/Main/Store')}>
                <Image
                  resizeMode={'contain'}
                  style={styles.stretch}
                  source={require('../../assets/addBtn.png')} 
                  tintColor={ firstColor ? '#1D253C':'rgba(255,255,255,8)'}
                />
              </TouchableOpacity>
          </View>

          <Calender
          currentIndex={props.index}
          _pressOnday={props._pressOnday}
          /> 
       </View>

      
    </ImageBackground>  
  )}

const styles = StyleSheet.create({ 
  stretch:{ 
    height:35,
    width:45, 
},
});

export default memo(DefaultBackground);