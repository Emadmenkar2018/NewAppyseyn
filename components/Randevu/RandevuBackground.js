import React, { memo } from 'react';
import {
  View,
  StyleSheet,  
  Text,
  TouchableOpacity
} from 'react-native'; 
import { Icon } from 'react-native-elements'  
import LinearGradient from 'react-native-linear-gradient';
// import GradientButton from 'react-native-gradient-buttons';   
import { useHistory } from 'react-router-native';

const Background = ({ children ,...props}) => {
  let history = useHistory();
  return(
    <LinearGradient colors={['#F97346', '#F97346']} style={{width: '100%', height: '35%',backgroundColor:'#2A2C5F',paddingLeft:15,paddingRight:15,alignContent:'center',alignItems:'center'}} >
        <View style={styles.stretch}>
          <Icon
            name='keyboard-arrow-up'
            type='material'
            iconStyle={{textAlign: 'center',marginBottom:2}} 
            containerStyle={{marginTop:5,backgroundColor:'#fff',width:20,height:20,borderRadius:10,alignSelf:'center' }}
          />
        </View>   
        {/* {props.MyRandevus && 
          <View style={{flexDirection:'row',}}>
            <Text style ={{alignSelf:'center' ,color:'#1D253C',fontFamily:'Muli-Bold',marginVertical:3}}>En Yakın Randevun : </Text>  
            <Text style ={{alignSelf:'center' ,color:'#1D253C',fontFamily:'Muli-Bold',marginVertical:3}}>{props.MyRandevus[0].desired_date.split(" ")[0]}</Text>  
          </View>Günü Seçmek Için Sola Veya Sağa Kaydır
        } */} 
        <TouchableOpacity onPress={()=>history.push('/Main/Store')} style={{flexDirection:'row',}}>
          <Text style ={{alignSelf:'center' ,color:'#1D253C',fontFamily:'Muli-Bold',fontSize:18,marginVertical:3}}>Ürünleri keşfetmek için buraya tıklayın</Text>    
        </TouchableOpacity>  
  </LinearGradient>  
  )
}

const styles = StyleSheet.create({ 
  stretch:{ 
    marginTop:-5,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F97346',
    // borderTopLeftRadius:20,
    transform: [
      {scaleY: 1.5}, 
      {scaleX: 1.5}, 
      {rotate: '0deg'}
    ]
      
},
});

export default memo(Background);