import React, { memo } from 'react';
import { StyleSheet, Text, Image ,View ,TouchableOpacity } from 'react-native';
import { Input, Item, Label  , Icon } from 'native-base'; 
import {IMAGES} from '../../constants/arrays'
import { useHistory } from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';

const ContainerStore = ({imagePlaceholder,headtext,type,prefix,firstcolor,secondcolor,price, ...props }) => { 
    let history = useHistory();
    getImage=(name)=> {  
      return IMAGES[name];
    }  
 
    return (
    <TouchableOpacity style={{overflow:'hidden',width:'98%'}} onPress={()=>console.log('Hi',headtext)} > 

          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={[firstcolor,secondcolor]} style={styles.container} onPress={()=>_handleNavigating(prefix)}> 
            
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
              <Text style={{color:'#1D253C',backgroundColor:'#fff',width:'20%',textAlign:'center',borderRadius:20,fontFamily:'Muli',marginVertical:10,marginEnd:5}}>{type}</Text> 
              <Text style={{color:'#1D253C',backgroundColor:'rgba(233, 44, 129,.8)',width:'20%',textAlign:'center',borderRadius:20,fontFamily:'Muli',marginVertical:10,marginEnd:5}}>{price} tl</Text> 
            </View>

            
            <View style={{flexDirection:'row',justifyContent:'flex-start'}} >
              <Text style={styles.head}>
                {headtext}
              </Text>  
            </View> 

            <View >
              <Text style={styles.specification}>
                Daha fazla bilgi için {"\n"}lütfen  bizimle sohbet edin
              </Text> 
            </View> 

            
            <View style={styles.Addcontainer}> 
                <Image
                      style={{width: 80, height: 80 ,backgroundColor:'transparent'}} 
                      source={ type === 'packet'? getImage('ozelcalender') : getImage('cross')}
                      /> 
            </View>  
          
        </LinearGradient>  
    </TouchableOpacity> 
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
    right:-20,
    // alignSelf:'flex-end',
    width :'20%', 
    overflow:'hidden',
    zIndex:0
  },
  Textcontainer:{ 
    backgroundColor:'#fff'
  },
  head:{
    fontSize:24,
    fontWeight:'600',
    color:'#fff',
    fontFamily:'Muli'
  },
  specification:{ 
    fontSize:14,
    fontWeight:'200',
    color:'#fff',
    fontFamily:'Muli'
  },
  text:{
    fontSize:12, 
    color:'#999'
  }
});

export default memo(ContainerStore);