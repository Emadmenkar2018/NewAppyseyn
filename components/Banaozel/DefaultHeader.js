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

const DefaultHeader =  ({ children,headText, ...props  }) => {
  let history = useHistory();

  return ( 
      <View style={{flexDirection:'row',justifyContent:'space-between' ,backgroundColor:'transparent',width:'100%', height: '5%',marginTop:40,zIndex:0,marginBottom:20,alignItems:'center'}}>
          <TouchableOpacity onPress={()=>history.goBack()}>
            <Icon name="arrow-back" type ='material' size={35}  color='#999'   />
          </TouchableOpacity>
          <Text style={{fontSize:28,fontFamily:'Muli-Bold',color:'#fff'}}>{headText}</Text>
          <Image
            resizeMode={'contain'}
            style={styles.stretch}
            source={null} 
          />
      </View>
  )
}


const styles = StyleSheet.create({ 
  stretch:{ 
    height:35,
    width:45, 
},
});

export default memo(DefaultHeader);