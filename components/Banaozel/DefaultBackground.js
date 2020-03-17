import React, { memo } from 'react';
import {
  View,
  StyleSheet,  
  Image
} from 'react-native'; 
import { Icon } from 'react-native-elements'  
import LinearGradient from 'react-native-linear-gradient';
import Calender from './Calender'
import { useHistory } from 'react-router-native';
import { TouchableOpacity } from 'react-native';

const DefaultBackground =  ({ children,firstColor,secondColor ,...props  }) => { 
  let history = useHistory();

  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={[firstColor?firstColor :'#2C2C5E', secondColor? secondColor:'#3F3164']}  style={{width: '100%',  height: (firstColor ==='#fff' &&secondColor ==='#fff')?  '15%':'35%',backgroundColor:'#fff',borderLeftColor:'#fff',paddingLeft:15,paddingRight:15,borderBottomLeftRadius:40,borderBottomRightRadius:40,zIndex:-1,overflow:'visible'}}  > 
      <View style={{flexDirection:'row',justifyContent:'space-between' ,backgroundColor:'transparent',width:'100%',marginTop:40,zIndex:0}}>
          <TouchableOpacity onPress={()=>history.goBack()}>
            <Icon name="arrow-back" type ='material' size={35}  color='#1D253C'   />
          </TouchableOpacity>
          <Image
            style={styles.stretch}
            source={require('../../assets/icon.png')}
            tintColor={'#1D253C'}
            resizeMode={'contain'}
          />

          <TouchableOpacity onPress={()=>history.push('/Main/Store')}>
            <Image
              resizeMode={'contain'}
              style={styles.stretch}
              source={require('../../assets/addBtn.png')} 
              tintColor={'#1D253C'}
            />
          </TouchableOpacity>
      </View>
 
      
    </LinearGradient>
  )  
}

const styles = StyleSheet.create({ 
  stretch:{ 
    height:35,
    width:45, 
},
});

export default memo(DefaultBackground);