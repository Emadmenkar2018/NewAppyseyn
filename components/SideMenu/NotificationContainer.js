import React, { memo } from 'react';
import { StyleSheet, Text, Image ,View ,TouchableOpacity } from 'react-native';
import { Input, Item, Label  , Icon } from 'native-base'; 
import {IMAGES} from '../../constants/arrays'
import { useHistory } from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';

const NotificationContainer = ({ headtext,type,prefix,firstcolor,secondcolor,text,date, ...props }) => { 
    let history = useHistory();
    getImage=(name)=> {  
      return IMAGES[name];
    }  
 
    return (
    
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={headtext ==='msg' ? ['#67D1FF','#2B67FB'] : ['#FF825F','#FF4C51']} style={styles.container} onPress={()=>_handleNavigating(prefix)}> 
               <TouchableOpacity style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',height:'100%'}} onPress={()=>console.log('Hi',headtext)} > 

               <View style={{flexDirection:'row',alignItems:'center'}}> 
                  <Image style={styles.avatar} tintColor={'#1D253C'} resizeMode={'contain'} source={headtext !=='msg' ? require('../../assets/telephone.png') : require('../../assets/notifi.png')}  />  
                  {/* <Text style={styles.head}>  {headtext} </Text>    */}
               </View>
 
            <View >
              <Text style={styles.head}>
                  {text}  
              </Text> 
            </View>  

            
            <View >
              <Text style={styles.date}>
                 {date }
              </Text> 
            </View> 
            </TouchableOpacity> 
        </LinearGradient>  
    
    )
   }

const styles = StyleSheet.create({ 
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding :20,
    marginBottom:10,
    height:60,
    width:'100%',
    backgroundColor:'#fff',
    borderRadius:10,   
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65, 
    elevation: 4,
    paddingLeft:10,
    zIndex:1
  },  
  avatar:{
    height:30,
    width:30,  
  },
  head:{
    fontSize:15,
    fontWeight:'800',
    color:'#1D253C',
    fontFamily:'Muli-Bold'
  }, 
  date:{
    fontSize:13,
    fontWeight:'400',
    color:'#1D253C',
    fontFamily:'Muli'
  }
});

export default memo(NotificationContainer);