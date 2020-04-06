import React, { memo ,useState,useRef} from 'react';
import { StyleSheet, View, Modal  , Dimensions ,TextInput, TouchableOpacity } from 'react-native';
import {   Icon, Item, Picker , DatePicker, Button, Text  } from 'native-base';          
import TimePicker from "react-native-24h-timepicker";
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";

  const halfheight = Dimensions.get('window').height /2 
  const halfWidth = Dimensions.get('window').width /2  

const CreateRandevuModal = ({visiblity,setClosingModal, closeDialoug,...props}) => {   

    const MyTimePicker = useRef(null);
    const [time, setTime] =useState('')
    
    const onCancel = () => {
        MyTimePicker.current.close();
      }
     
      const  onConfirm = (hour, minute) =>  { 
        setTime(hour + ':' + minute)
        MyTimePicker.current.close();
      }
 
      const onOpen = () =>{ 
          console.log('asdas',MyTimePicker)
        MyTimePicker.current.open();
      }
    return( 
        <Modal 
            animationType="fade"
            // here i gor the props and pass them here the props is not readable what can i do it reads them the firsttime then i got undefined i swear im going mad
            // lk i made the exact step in another screen a while ago and wait omar
            visible={visiblity} 
            transparent={true} 
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');}}
        >  
                <View style={{alignSelf:'center',alignContent:'center',width:'100%',height:'100%',alignItems:'center',backgroundColor:'rgba(89, 64, 213,.2)' }}>
                    <View style={{width:'100%',height:responsiveScreenHeight(52),backgroundColor:'transparent',marginTop:1/2*halfheight-30}}>
                        <View style={{zIndex:1,alignSelf:'center',alignItems:'center',alignContent:'center',width:'110%',height:'35%',backgroundColor:'#725ED2',borderBottomRightRadius:250,borderBottomLeftRadius:250,}}>
                            <Text style={{color:'rgba(255,255,255,.7)',alignSelf:'center',fontSize:responsiveScreenFontSize(3),marginTop:1/3*halfWidth,fontWeight:'bold'}}>Randevu Talebi Oluştur</Text>
                        </View>
                        <View style={{height:'100%',width:'85%',backgroundColor:'#fff',position:'absolute',top:10,zIndex:-1,alignSelf:'center',borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center',alignContent:'center'}}>
                            <View style={{ top:'30%' ,alignSelf:'center' ,alignItems:'center',alignContent:'center'}}> 

                             <View style={{borderWidth:1,borderColor:'rgba(151, 151, 151,.4)',borderRadius:10,paddingHorizontal:10,width:3/2*halfWidth ,marginBottom:15,marginTop:15,height:50}}>
                                    <Item picker style={{ width:'100%',borderBottomWidth:0}}>
                                        <DatePicker
                                            defaultDate={new Date(2018, 4, 4)}
                                            minimumDate={new Date(2018, 1, 1)}
                                            maximumDate={new Date(2018, 12, 31)}
                                            locale={"en"} 
                                            timeZoneOffsetInMinutes={undefined}
                                            modalTransparent={false}
                                            animationType={"fade"}
                                            androidMode={"spinner"}
                                            placeHolderText="Tarih Seç"
                                            textStyle={{ color: "#1D253C" }}
                                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                                            // onDateChange={this.setDate}
                                            disabled={false}
                                            />  
                                    </Item> 
                                </View>


                                
                                <TouchableOpacity  onPress={()=>onOpen()} style={{borderWidth:1,borderColor:'rgba(151, 151, 151,.4)',borderRadius:10,paddingHorizontal:10,width:3/2*halfWidth ,marginBottom:15,marginTop:15,height:50}}>
                                    {/* <Item   style={{ width:'100%',borderBottomWidth:0,alignItems:'center' , alignContent:'center',alignSelf:'center'}}>
                                        <Text style={{textAlign:'center',alignSelf:'center',marginTop:10}}>{time}</Text>
                                    </Item> */}
                                    <Text placeHolderTextStyle={{color:'#000'}} placeHolderText={'Saat Seç'} style={{ width:'100%',borderBottomWidth:0,alignItems:'center' , alignContent:'center',alignSelf:'center',margin:10,marginLeft:10}}>{time}</Text>
                                </TouchableOpacity>    

                                <View style={{width:'100%',paddingBottom:10,flexDirection:'row',marginTop:10,justifyContent:'space-evenly'}}> 
                                    <Button onPress={()=>closeDialoug()} style={{borderRadius:20, width:responsiveScreenWidth(30),justifyContent:'center'}} bordered  >
                                        <Text style={{color:'#1D253C'}}  >Iptal</Text>
                                    </Button>

                                    <Button style={{borderRadius:20, width:responsiveScreenWidth(30),justifyContent:'center'}} bordered  >
                                        <Text style={{color:'#1D253C'}} >Oluştur</Text>
                                    </Button> 
                                </View>

                                
                            </View>
                        </View>  
                    </View>
                    <View  style={{backgroundColor:'#efefef'}} >
                        <TimePicker
                            ref={MyTimePicker}
                            onCancel={() =>  onCancel()}
                            onConfirm={(hour, minute) =>  onConfirm(hour, minute)}
                           
                        />  
                    </View>
                </View>  
        </Modal> 
   )
} 

const styles = StyleSheet.create({ 
    stretch:{ 
        width:'100%',
        height:'100%',
        alignSelf:'center', 
        backgroundColor:'#999'
    },  
    oval: {
        alignSelf:'center',
        width: '75%',
        height: 125,
        borderRadius: 250, 
        backgroundColor: 'red',
        transform: [
          {scaleX: 2}
        ]
    },
});

export default memo(CreateRandevuModal);