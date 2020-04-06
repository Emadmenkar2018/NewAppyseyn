import React, { memo } from 'react';
import {
  View,
  StyleSheet,  
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native'; 
import { Icon } from 'react-native-elements'  
import LinearGradient from 'react-native-linear-gradient';
// import GradientButton from 'react-native-gradient-buttons';   
import { useHistory } from 'react-router-native';

const Background = ({ children ,...props}) => {   
  let history = useHistory();
  return( 
    <ImageBackground   source={require('../../assets/randevu.jpg')} resizeMode={'cover'}   style={{width: '100%' ,zIndex:-1 ,flex:0.5}} >
        
        <View style={{backgroundColor:'rgba(0,0,0,.3)' ,flex:1,paddingHorizontal:15,alignItems:'center',overflow:'visible'}}> 
    {/* <LinearGradient colors={['#F97346', '#F97346']} style={{width: '100%', height: '35%',backgroundColor:'#2A2C5F',paddingLeft:15,paddingRight:15,alignContent:'center',alignItems:'center'}} > */}
        <View style={styles.stretch1}>
          <Icon
            name='keyboard-arrow-up'
            type='material'
            iconStyle={{textAlign: 'center',marginBottom:1}} 
            containerStyle={{marginTop:5,backgroundColor:'#fff',width:20,height:20,borderRadius:10,alignSelf:'center',zIndex:1 }}
          />
        </View>   
        {/* {props.MyRandevus && 'rgba(249, 115, 70,0.5)'
          <View style={{flexDirection:'row',}}>
            <Text style ={{alignSelf:'center' ,color:'#1D253C',fontFamily:'Merienda-Regular',marginVertical:3}}>En Yakın Randevun : </Text>  
            <Text style ={{alignSelf:'center' ,color:'#1D253C',fontFamily:'Merienda-Regular',marginVertical:3}}>{props.MyRandevus[0].desired_date.split(" ")[0]}</Text>  
          </View>Günü Seçmek Için Sola Veya Sağa Kaydır
        } */} 
        {/* <TouchableOpacity onPress={()=>history.push('/Main/Store')} style={styles.btn}>
          <Text style ={{alignSelf:'center' ,color:'#fff',fontFamily:'Merienda-Regular',fontSize:18,marginVertical:7,textAlign:'center'}}>Randevu Talebi Oluştur</Text>   
          <Image
            style={{width:25,height:25,marginLeft:5}}
            source={require('../../assets/addRandevu.png')}
            tintColor={'#fff'}
            resizeMode={'contain'}
          /> 
        </TouchableOpacity>   */}
        </View>    
  </ImageBackground>  
  )
}

const styles = StyleSheet.create({ 
  stretch1:{
    marginTop:-5,
    width: 50,
    height: 50,
    borderRadius: 25,
   backgroundColor: 'transparent', 
    transform: [
      {scaleY: 1.5}, 
      {scaleX: 1.5}, 
      {rotate: '0deg'}
    ] ,
    zIndex:1
  },
  stretch:{ 
    marginTop:-5,
    width: 50,
    height: 50,
    borderRadius: 25,
   backgroundColor: '#F97346',
    // backgroundColor: 'transparent',
    // borderTopLeftRadius:20,
    transform: [
      {scaleY: 1.5}, 
      {scaleX: 1.5}, 
      {rotate: '0deg'}
    ] ,
    zIndex:1
  },
  btn : {
    flexDirection:'row',
    width:'70%', 
    backgroundColor:'rgba(29, 37, 60,.9)', 
    borderRadius:20, 
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#efefef',
    alignItems:'center',
    paddingHorizontal:5
  }

});

export default memo(Background);