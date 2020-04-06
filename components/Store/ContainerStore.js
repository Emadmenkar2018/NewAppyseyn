import React, { memo } from 'react';
import { StyleSheet, Text, Image ,View ,TouchableOpacity } from 'react-native';
import { Input, Item, Label  , Icon } from 'native-base'; 
import {IMAGES} from '../../constants/arrays'
import { useHistory } from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const ContainerStore = ({imagePlaceholder,headtext,type,prefix,firstcolor,secondcolor,price, ...props }) => { 
    let history = useHistory();
    const getImage=(name)=> {  
      return IMAGES[name];
    }  
 
    return (
    // <TouchableOpacity style={{overflow:'hidden',width:'98%'}} onPress={()=>console.log('Hi',headtext)} > 

          <View style={styles.container} onPress={()=>_handleNavigating(prefix)}> 

            {type ==='packet'  &&
                <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                  <Text style={{fontSize:responsiveScreenFontSize(1.75),paddingHorizontal:5,paddingVertical:3,color:'#1D253C',backgroundColor:'transparent',borderColor:'rgba(15, 192, 188,0.9)',borderWidth:1 ,textAlign:'center',borderRadius:20,fontFamily:'CormorantGaramond-SemiBold',marginVertical:3,marginEnd:5}}>Haftanın Fırsatı</Text>  
                </View>   
            }

            {type !=='packet'  &&
                <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                  <Text style={{fontSize:responsiveScreenFontSize(1.75),paddingHorizontal:5,paddingVertical:3,color:'#1D253C',backgroundColor:'transparent',borderColor:'rgba(249, 112, 68,0.9)',borderWidth:1 ,textAlign:'center',borderRadius:20,fontFamily:'CormorantGaramond-SemiBold',marginVertical:3,marginEnd:5}}>30% Indirim</Text>  
                </View>   
            }


            <View style={{flexDirection:'row',justifyContent:'flex-start',marginVertical:3}} >
              <Text style={styles.head}>
                {headtext}
              </Text>  
            </View> 
            
            {/* <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
              <Text style={{color:'#1D253C',backgroundColor:'#fff',width:'20%',textAlign:'center',borderRadius:20,fontFamily:'Muli',marginVertical:10,marginEnd:5}}>{type}</Text> 
              <Text style={{color:'#1D253C',backgroundColor:'rgba(233, 44, 129,.8)',width:'20%',textAlign:'center',borderRadius:20,fontFamily:'Muli',marginVertical:10,marginEnd:5}}>{price} tl</Text> 
            </View>  */}

            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>  
              <Text style={{color:'#1D253C' ,fontWeight:'900' ,textAlign:'center' ,fontFamily:'CormorantGaramond-Bold',marginVertical:3,marginEnd:5,fontSize:responsiveScreenFontSize(2)}}>Fiyat : {price} tl</Text> 
            </View> 

            <View style={{ flexDirection:'row',justifyContent:'flex-end',alignItems:'center',marginTop:'auto'}}>

              <TouchableOpacity style={{backgroundColor:'rgba(249, 112, 68,0.9)',width:'37%',padding:5,alignItems:'center',borderRadius:20,marginHorizontal:5 }} >
                  <Text style={styles.specification}>
                      Detayları Sor
                  </Text> 
              </TouchableOpacity> 
            
            
              <TouchableOpacity style={{backgroundColor:'rgba(15, 192, 188,0.9)',width:'35%',padding:5,alignItems:'center',borderRadius:20,marginHorizontal:5}} >
                <Text style={styles.specification}>
                  Sepete Ekle
                </Text> 
              </TouchableOpacity> 

            </View>


            
            <View style={styles.Addcontainer}> 
                <Image
                      style={{width: 80, height: 80 ,backgroundColor:'transparent'}} 
                      source={ type === 'packet'? getImage('ozelcalender') : getImage('cross')}
                      /> 
            </View>  
          
        </View>  
    // </TouchableOpacity> 
    )
   }

const styles = StyleSheet.create({ 
  container:{
    paddingVertical:10,
    marginBottom:10,
    height:150,
    width:'100%',
    backgroundColor:'#fff',
    borderRadius:10,   
    borderColor:'rgba(29, 37, 60,0.3)',
    borderWidth:1,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65, 
    elevation: 4,
    paddingLeft:10,
    zIndex:1,
    // alignItems:'center'
  },
  clickable:{
    marginBottom:10, 
    width:'100%',
    height:100,
    backgroundColor:'#fff',
    borderRadius:10, 
    flexDirection:'row',
    justifyContent:'space-between', 
  },
  iconcontainer:{
    width :'20%'
  },
  Addcontainer:{
    position:'absolute',
    top:'12%',
    right:5,
    // alignSelf:'flex-end',
    width :'20%', 
    overflow:'hidden',
    zIndex:0
  },
  Textcontainer:{ 
    backgroundColor:'#fff'
  },
  head:{
    fontSize:responsiveScreenFontSize(3.5),
    fontWeight:'600',
    color:'#1D253C',
    fontFamily:'CormorantGaramond-BoldItalic',
  },
  specification:{ 
    fontSize:responsiveScreenFontSize(1.75),
    fontWeight:'200',
    color:'#1D253C',
    fontFamily:'CormorantGaramond-SemiBold'
  },
  text:{
    fontSize:responsiveScreenFontSize(1.75), 
    color:'#999'
  }
});

export default memo(ContainerStore);