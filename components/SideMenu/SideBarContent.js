import React, {Component} from 'react';
import {Text,View,Dimensions,Image,StyleSheet ,Button} from 'react-native';
// import { Icon } from 'react-native-elements' 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Title , Left, Right, Body, Icon } from 'native-base';

const height = Dimensions.get('window').height 

export default class SideBarContent extends Component{
    constructor() {
        super();
        
    }
    
    render()
    {
        return(
            <View style={{height:"100%", position: 'absolute', top: 0, left: 0 ,alignContent:'center',alignItems:'center'}}>

                
                <View style={{height:'25%' ,backgroundColor:'transparent',width:150,alignSelf:'center'}} >

                    <Image  source={require('../../assets/guy.png')} style={styles.avatar }/>  
                    <Text style={styles.name}>New User</Text>
                    <Text style={styles.name}>user@gmail.com</Text>
                    <Text style={styles.name}>+905370320993</Text>

 
                    <TouchableOpacity onPress={()=>console.log('HI')}>
                        <Text style={styles.text}>Ürünlerim</Text>
                    </TouchableOpacity>
                    {/* <Button onPress={()=>console.log(';ad')} transparent>
                        <Text style={styles.text}>Bildirimlerim</Text>
                    </Button>
                     */}
                    <Text style={styles.text}>Ayarlar</Text>
                    <Text style={styles.text}>Hakkımızda</Text> 
                    <Text style={styles.text}>SSS</Text> 
 
                </View>
 
            </View>
        );
    }
}

  
const styles = StyleSheet.create({
    avatar: {
        marginStart:10,
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 1,
        borderColor: "white",
        marginVertical:10,
        alignSelf:'center'
      },
      name:{
        color:'#E92C81',
        marginVertical:2,
        fontFamily:'Muli',
        alignSelf:'center'
      },
      text:{
        color:'#1D253C',
        marginVertical:10,
        fontFamily:'Muli',
        alignSelf:'center'
      }
})