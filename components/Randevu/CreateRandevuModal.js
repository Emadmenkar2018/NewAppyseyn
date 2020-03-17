import React, { memo ,useState} from 'react';
import { StyleSheet, View, Modal  , Dimensions ,Text,TextInput } from 'react-native';
import {   Icon, Item, Picker , DatePicker} from 'native-base';     
const halfheight = Dimensions.get('window').height /2 
const halfWidth = Dimensions.get('window').width /2 
 

const CreateRandevuModal = ({ label, errorText,inputText,type, ...props }) => {
    const [showPicker, setShowPicker] = useState(true)
    return( 
        <Modal
            animationType="slide"
            visible={false}
            transparent={true} 
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');}}
        >  
                <View style={{alignSelf:'center',alignContent:'center',width:'100%',height:'100%',alignItems:'center',backgroundColor:'rgba(89, 64, 213,.4)' }}>
                    <View style={{width:'100%',height:2*halfWidth,backgroundColor:'transparent',marginTop:1/2*halfheight-30}}>
                        <View style={{zIndex:1,alignSelf:'center',alignItems:'center',alignContent:'center',width:'110%',height:'35%',backgroundColor:'#725ED2',borderBottomRightRadius:250,borderBottomLeftRadius:250,}}>
                            <Text style={{color:'rgba(255,255,255,.7)',alignSelf:'center',fontSize:24,marginTop:1/3*halfWidth,fontWeight:'bold'}}>Randevu Oluştur</Text>
                        </View>
                        <View style={{height:'100%',width:'85%',backgroundColor:'#fff',position:'absolute',top:10,zIndex:-1,alignSelf:'center',borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center',alignContent:'center'}}>
                            <View style={{ top:'30%' ,alignSelf:'center' ,alignItems:'center',alignContent:'center'}}>
                                {/* <Text
                                    style={{ height: 40  ,fontSize:22,color:'#1D253C', padding : 5,alignSelf:'center',fontWeight:'bold'}} >
                                        Tarih Seç
                                </Text> */}

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
                                            textStyle={{ color: "green" }}
                                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                                            // onDateChange={this.setDate}
                                            disabled={false}
                                            />  
                                    </Item> 
                                </View>


                                <View style={{borderWidth:1,borderColor:'rgba(151, 151, 151,.4)',borderRadius:10,paddingHorizontal:10 ,height:50,width:3/2*halfWidth}}>
                                    <Item picker style={{ width:'100%',borderBottomWidth:0 }}>
                                        <Picker
                                            mode="dropdown"
                                            iosIcon={<Icon name="arrow-down" />}
                                            style={{ width: undefined, textAlign:'center'}}
                                            placeholder="Saa"
                                            placeholderStyle={{ color: "#bfc6ea" }}
                                            placeholderIconColor="#007aff"
                                            // selectedValue={this.state.selected2}
                                            // onValueChange={this.onValueChange2.bind(this)}
                                        >
                                            <Picker.Item label="Wallet" value="key0" />
                                            <Picker.Item label="ATM Card" value="key1" />
                                            <Picker.Item label="Debit Card" value="key2" />
                                            <Picker.Item label="Credit Card" value="key3" />
                                            <Picker.Item label="Net Banking" value="key4" />
                                        </Picker>
                                    </Item>
                                </View>

                                <View style={{width:'100%',paddingBottom:10}}>
                                    {/* <GradientButton
                                        style={{ marginVertical: 8   }}
                                        textStyle={{ fontSize: 16 }}
                                        gradientBegin={'#26C8A8'}
                                        gradientEnd={'#00BBCA'}
                                        gradientDirection="diagonal"
                                        height={40}
                                        width={3/2*halfWidth}
                                        radius={25}
                                        impact
                                        impactStyle='Light'
                                        // onPressAction={this.props.navigation.state.params.onupdatewebsite.bind(this, this.state.profiledata, 'instagram')}  
                                        >
                                            Talep Oluştur
                                    </GradientButton> */}

                                    {/* <GradientButton
                                        style={{ marginVertical: 8  }}
                                        textStyle={{ fontSize: 16 }}
                                        gradientBegin={'#1D253C'}
                                        gradientEnd={'#1D253C'}
                                        gradientDirection="diagonal"
                                        height={40}
                                        width={3/2*halfWidth}
                                        radius={25}
                                        impact
                                        impactStyle='Light'
                                        // onPressAction={this.props.navigation.state.params.onupdatewebsite.bind(this, this.state.profiledata, 'instagram')}  
                                        >
                                            Iptal Et
                                    </GradientButton> */}
                                </View>

                                
                            </View>
                        </View>  
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