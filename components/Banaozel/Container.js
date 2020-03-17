import React, { memo } from 'react';
import { StyleSheet, Text, Image ,View ,TouchableOpacity } from 'react-native';
import { Input, Item, Label  , Icon } from 'native-base'; 
import {IMAGES} from '../../constants/arrays'
import { useHistory } from 'react-router-native';

const Container = ({imagePlaceholder,headtext,type,prefix, ...props }) => { 
    let history = useHistory();
    getImage=(name)=> {  
      return IMAGES[name];
    }  

    _handleNavigating = (prefix) =>{ 
      history.push({
        pathname: "/Main/" + prefix ,
        state: {
          prefix
        }
      }
        )   
    }
    return (
    // <TouchableOpacity style={{width:'100%'}} onPress={()=>console.log('Hi',headtext)} > 
      <Item   style={styles.container} onPress={()=>_handleNavigating(prefix)}> 
       
        <View style={styles.iconcontainer}>
            <Image
              style={{width: 50, height: 50}}
              source={getImage(imagePlaceholder)}
              />
        </View>


        <View style={styles.Textcontainer}>
          <Text style={styles.head}>
            {headtext}
          </Text> 
        </View> 

        
        {/* <View style={styles.Addcontainer}> 
            <Image
                  style={{width: 35, height: 35}} 
                  source={ type === 'go'? getImage('arrow') : getImage('add')}
                  /> 
        </View>  */}
      
    </Item>  
    // </TouchableOpacity> 
    )
   }

const styles = StyleSheet.create({ 
  container:{
    marginBottom:10,
    height:100,
    width:'98%',
    backgroundColor:'#fff',
    borderRadius:10, 
    flexDirection:'row',
    justifyContent:'space-between',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65, 
    elevation: 4,
    paddingLeft:10,
    paddingRight:10
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
    width :'10%', 
    paddingRight:10
  },
  Textcontainer:{
    flexDirection:'column',
    width:'70%'
  },
  head:{
    fontSize:16,
    fontWeight:'bold',
    color:'#1D253C'
  },
  text:{
    fontSize:12, 
    color:'#999'
  }
});

export default memo(Container);