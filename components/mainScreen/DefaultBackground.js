import React, { memo } from 'react';
import {
  View,
  StyleSheet,  
  Image,
  TouchableOpacity
} from 'react-native'; 
import { Icon } from 'react-native-elements'  
import LinearGradient from 'react-native-linear-gradient';
import Calender from './Calender' 

const DefaultBackground = ({ children, ...props  }) => (  
    
    <LinearGradient colors={['#2C2C5E', '#3F3164']}  style={{width: '100%', height: '35%',backgroundColor:'#fff',borderLeftColor:'#fff',paddingLeft:15,paddingRight:15,borderBottomLeftRadius:40,borderBottomRightRadius:40,zIndex:-1}}  > 
      <View style={{flexDirection:'row',justifyContent:'space-between' ,backgroundColor:'transparent',width:'100%',marginTop:40,zIndex:-1}}>
          <Icon name="arrow-back" type ='material' size={35}  color='#999'   />
          <Image
            style={styles.stretch}
            source={require('../../assets/icon.png')}
            tintColor={'#999'}
            resizeMode={'contain'}
          />
          <TouchableOpacity onPress={()=>console.log('HI')}>
            <Image
              resizeMode={'contain'}
              style={styles.stretch}
              source={require('../../assets/addBtn.png')} 
            />
          </TouchableOpacity>
      </View>

      <Calender
        index={props.index}
      />
      {/* <View style={{height:'20%',width:'100%',paddingHorizontal:40,backgroundColor:'#000',marginTop:10}}>

      </View> */}
      
      {/* <MealsLogo/> */}
    </LinearGradient>  
);

const styles = StyleSheet.create({ 
  stretch:{ 
    height:35,
    width:45, 
},
});

export default memo(DefaultBackground);