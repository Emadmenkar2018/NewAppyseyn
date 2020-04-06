import React, { memo } from 'react';
import { StyleSheet, Text, TextInput as NativeInput } from 'react-native';
import { Input, Item, Label   } from 'native-base'; 
import { Icon } from 'react-native-elements'
import {ValidateEmail} from '../../utils/methods'

const LoginInput = ({ label, errorText,inputText,type, ...props }) => { 

  const _handleUsername=(e) =>{
    const {setUsernameValue}=props; 
    setUsernameValue(e)
  }

  const _handlePassword=(e) =>{
    const {setPasswordValue}=props; 
    setPasswordValue(e)
  }
  

  return (
      <Item success style={styles.container}> 
          {type=='password' ?<Icon name='lock'  type='fontawesome' style={{  color: "#E92C81" }} /> :  <Icon name='person'  type='material' style={{  color: "#E92C81" }} />} 
          <Input   
            style={styles.input}
            secureTextEntry={type=='password' ?true : false}
            placeholder={label}
            placeholderStyle={{ fontFamily:'Merienda-Regular',}}
            {...props}
            onChangeText={type=='password' ? (e)=>_handlePassword(e) : (e)=>_handleUsername(e)}
          />  
          { ((inputText.length>=6 && type=='password')|| (inputText.length>=5 && type=='email' && ValidateEmail(inputText)))&&
            <Icon    name='check-circle' type='fontawesome' color={'#13C1B9'} style={{ color: "green" }} />
            }
      </Item>  
      )
    };

const styles = StyleSheet.create({
  container: {
    marginVertical: 12, 
    borderBottomWidth:0, 
    borderWidth:1,
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    backgroundColor:'rgba(255,255,255,.8)',
    borderRadius:30,
    width: '100%',
    height:40,
    paddingLeft:20,
    paddingRight:30,
    shadowColor: "#000",
    shadowOffset: {
        width: 2,
        height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65, 
    elevation: 5,
  },
  input: {
    width: '100%',
    fontSize:10, 
    fontFamily:'Merienda-Regular',
    color:'transparent',
    alignSelf:'center',
    alignItems:'center',
    alignSelf:'center',
    textAlign: 'center',
    
  },
  label: {
    color: '#efefef',
    paddingLeft: 4,
    opacity: 0.8,
    fontFamily:'Merienda-Regular',
  },
  error: {
    width: '100%',
    fontSize: 14,
    color: '#efefef',
    paddingHorizontal: 4,
  },
});

export default memo(LoginInput);