import React, {memo,} from 'react';
import {Text,View,Dimensions,Image,StyleSheet ,TouchableOpacity} from 'react-native';
// import { Icon } from 'react-native-elements'  
import { Container, Header, Title , Left, Right, Body, Icon ,Button} from 'native-base';
import { useHistory } from 'react-router-native'; 

const height = Dimensions.get('window').height 

const SideBarContent = ({ children }) =>{  
    let history = useHistory();   

        return(
            <View style={{height:"100%",alignContent:'center',alignItems:'center'}}>

                
                <View style={{height:'100%' ,backgroundColor:'transparent',alignSelf:'center',alignContent:'center',alignItems:'center',flexDirection:'row'}} >

                    <View style={{ flexDirection:'column',alignSelf:'flex-start'}}>
                        <View style ={{marginBottom:20}}>
                            <Image  source={require('../../assets/guy.png')} style={styles.avatar }/>  
                            <Text style={styles.name}>New User</Text>
                            <Text style={styles.name}>user@gmail.com</Text>
                            <Text style={styles.name}>+905370320993</Text>
                        </View>

    
                        {/* <TouchableOpacity onPress={()=>console.log('HI')} style={{width:'100%',height:40,backgroundColor:'#000'}}>
                            <Text style={styles.text}></Text>
                        </TouchableOpacity> */}
                        
                        <TouchableOpacity onPress={()=>console.log(';ad')} style={{alignSelf:'center',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'flex-start',width:'100%'}}>

                            <Image source={require('../../assets/items.png')} resizeMode={'contain'} style={styles.icon }/>  
 
                            {/* <Button   transparent > </Button> */}
                                <Text style={styles.text}>Ürünlerim</Text>
                           
                        </TouchableOpacity>

                       
                        <TouchableOpacity onPress={()=>console.log(';ad')} style={{alignSelf:'center',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'flex-start',width:'100%'}}>

                            <Image source={require('../../assets/notification.png')} resizeMode={'contain'} style={styles.icon }/>  

                            {/* <Button style={{alignSelf:'center'}}   transparent ></Button> */}
                                <Text style={styles.text}>Bildirimlerim</Text>
                            
                        </TouchableOpacity>
                        
                        
                        <TouchableOpacity onPress={()=> history.push('/SideBar/Settings')}  style={{alignSelf:'center',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'flex-start',width:'100%' }}>

                            <Image source={require('../../assets/gear.png')} resizeMode={'contain'} style={styles.icon }/>  

                            {/* <Button style={{alignSelf:'center'}}  onPress={()=>console.log(';ad')} transparent ></Button> */}
                                <Text style={styles.text}>Ayarlar</Text>
                            
                        </TouchableOpacity>

                        
                        <TouchableOpacity onPress={()=> history.push('/SideBar/AboutUs')} style={{alignSelf:'center',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'flex-start',width:'100%'}}>


                            <Image source={require('../../assets/technician.png')} resizeMode={'contain'} style={styles.icon }/>  

                            {/* <Button style={{alignSelf:'center'}}  
                            
                             transparent > */}
                                <Text style={styles.text}>Hakkımızda</Text>
                            {/* </Button> */}
                        </TouchableOpacity>

                        
                        <TouchableOpacity onPress={()=>history.push('/SideBar/Sss')} style={{alignSelf:'center',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'flex-start',width:'100%'}}>

                            <Image source={require('../../assets/question.png')} resizeMode={'contain'} style={styles.icon }/>  

                            {/* <Button style={{alignSelf:'center'}} 
                             onPress={()=>  history.push('/SideBar/Sss')}
                              transparent > */}
                                <Text style={styles.text}>SSS</Text>
                            {/* </Button> */}
                        </TouchableOpacity>
                        {/* <Text style={styles.text}></Text>
                        <Text style={styles.text}></Text> 
                        <Text style={styles.text}></Text>  */}
                    </View>
 
                </View>
 
            </View>
        );
} 

export default memo(SideBarContent);
  
const styles = StyleSheet.create({
    avatar: { 
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 1,
        borderColor: "white",
        marginVertical:10, 
        alignSelf:'center'
      },
      icon:{
        height:30,
        width:30,
        marginRight:10
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
        alignSelf:'center',
        fontSize:15
      }
})