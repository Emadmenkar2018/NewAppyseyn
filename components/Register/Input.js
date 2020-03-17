import React, { memo } from 'react';
import { StyleSheet, Text, TextInput as NativeInput } from 'react-native';
import { Input, Item, Label   } from 'native-base'; 
import {Icon } from 'react-native-elements'
import {ValidateEmail} from '../../utils/methods'


const RegisterInput = ({ label, errorText,inputText,type, ...props }) => {


      return (

        <Item success style={styles.container}> 
            {type=='password' ?<Icon name='lock' color='rgba(29, 37, 60,0.5)' style={{  color: "#E92C81" }} /> : type=='text' ?<Icon name='font' type ='font-awesome'  color='rgba(29, 37, 60,0.5)' style={{  color: "#E92C81" }} /> :  <Icon name='email' type='material' color='rgba(29, 37, 60,0.5)' style={{  color: "#E92C81" }} />} 
            <Input   
              style={styles.input}
              placeholder={label}
              placeholderStyle={{ fontFamily:'Muli',}}
              {...props}
            />  
            { ((inputText.length>=6 && type=='password')|| (inputText.length>=3 && type=='text')|| (inputText.length>=5 && type=='email' && ValidateEmail(inputText)))&&
              <Icon    name='check-circle' type='fontawesome' color={'#13C1B9'} style={{ color: "green" }} />
            }
        </Item>  

      )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 7, 
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
    zIndex:1
  },
  input: {
    width: '100%',
    fontSize:10, 
    color:'transparent',
    alignSelf:'center',
    alignItems:'center',
    alignSelf:'center',
    textAlign: 'center',
    fontFamily:'Muli',
    
  },
  label: {
    color: '#efefef',
    paddingLeft: 4,
    opacity: 0.8,
  },
  error: {
    width: '100%',
    fontSize: 14,
    color: '#efefef',
    paddingHorizontal: 4,
  },
});

export default memo(RegisterInput);