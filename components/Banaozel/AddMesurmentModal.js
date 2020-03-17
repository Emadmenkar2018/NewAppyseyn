import React, { memo ,useState,useEffect} from 'react';
import { StyleSheet, View, Modal  , Dimensions ,Text,TextInput } from 'react-native';
import {   Icon, Item, Input , DatePicker,Button} from 'native-base';  
import {_addRecord} from '../../utils/requests'
import LinearGradient from 'react-native-linear-gradient'; 
var dateFormat = require('dateformat');
const halfheight = Dimensions.get('window').height /2 
const halfWidth = Dimensions.get('window').width /2 

const AddMesurmentModal = ({ setVisibilty,title ,day,data,showPicker, ...props }) => {
 
    const [content,setContent] = useState(data);
    const [date,setDate] = useState('');
 
    const submittingContent = () =>{ 
        switch (title) {
            case 'Beden Kitle Indeksi':
                var newdate = dateFormat(date,'yyyy-mm-dd')
                var model_name = 'BodyMass'
                _addRecord(content,day?day : newdate,model_name).then(response =>{ 
                    let newday =   day?day : newdate 
                    props.updatefromList(props.id,response.data ,newday) 
                    setContent('')
                }).catch( err =>
                    console.log('err',err)
                )
                break;

            case 'Bel Çevresi değerlendirme':
                var newdate = dateFormat(date,'yyyy-mm-dd')
                console.log('tarih',typeof(newdate))
                var model_name = 'WaistWidth'
                _addRecord(content,day?day : newdate,model_name).then(response =>{ 
                    let newday =   day?day : newdate 
                    props.updatefromList(props.id,response.data ,newday) 
                    setContent('')
                }).catch( err =>
                    console.log('err',err)
                )
                break;

            case 'Bilek Çevresi':
                var newdate = dateFormat(date,'yyyy-mm-dd')
                console.log('tarih',typeof(newdate))
                var model_name = 'WristWidth'
                _addRecord(content,day?day : newdate,model_name).then(response =>{ 
                    let newday =   day?day : newdate 
                    props.updatefromList(props.id,response.data ,newday) 
                    setContent('')
                }).catch( err =>
                    console.log('err',err)
                )
                break;

            case 'Bazal Metabolizma Hızı':
                var newdate = dateFormat(date,'yyyy-mm-dd')
                console.log('tarih',typeof(newdate))
                var model_name = 'MetabolicRate'
                _addRecord(content,day?day : newdate,model_name).then(response =>{ 
                    let newday =   day?day : newdate 
                    props.updatefromList(props.id,response.data ,newday) 
                    setContent('')
                }).catch( err =>
                    console.log('err',err)
                )
                break;

            case 'Günlük Enerji Ihtiyacı':
                var newdate = dateFormat(date,'yyyy-mm-dd')
                console.log('tarih',typeof(newdate))
                var model_name = 'EnergyNeed'
                _addRecord(content,day?day : newdate,model_name).then(response =>{ 
                    let newday =   day?day : newdate 
                    props.updatefromList(props.id,response.data ,newday) 
                    setContent('')
                }).catch( err =>
                    console.log('err',err)
                )
                break;

            case 'Fiziksel Aktivite':
                var newdate = dateFormat(date,'yyyy-mm-dd')
                console.log('tarih',typeof(newdate))
                var model_name = 'PhysicalActivity'
                _addRecord(content,day?day : newdate,model_name).then(response =>{ 
                    let newday =   day?day : newdate 
                    props.updatefromList(props.id,response.data ,newday) 
                    setContent('')
                }).catch( err =>
                    console.log('err',err)
                )
                break;

            case 'Egzersiz Süresi':
                var newdate = dateFormat(date,'yyyy-mm-dd')
                console.log('tarih',typeof(newdate))
                var model_name = 'ExerciseTime'
                _addRecord(content,day?day : newdate,model_name).then(response =>{ 
                    let newday =   day?day : newdate 
                    props.updatefromList(props.id,response.data ,newday) 
                    setContent('')
                }).catch( err =>
                    console.log('err',err)
                )
                break;

            case 'Yağ Yakma Nabzı':
                var newdate = dateFormat(date,'yyyy-mm-dd')
                console.log('tarih',typeof(newdate))
                var model_name = 'FatBurning'
                _addRecord(content,day?day : newdate,model_name).then(response =>{ 
                    let newday =   day?day : newdate 
                    props.updatefromList(props.id,response.data ,newday) 
                    setContent('')
                }).catch( err =>
                    console.log('err',err)
                )
                break;

            case 'Uyku Süresi':
                var newdate = dateFormat(date,'yyyy-mm-dd')
                console.log('tarih',typeof(newdate))
                var model_name = 'SleepDuration'
                _addRecord(content,day?day : newdate,model_name).then(response =>{ 
                    let newday =   day?day : newdate 
                    props.updatefromList(props.id,response.data ,newday) 
                    setContent('')
                }).catch( err =>
                    console.log('err',err)
                )
                break; 
          }
        
    }   
    const closeModal = () =>{
        console.log('id',props.id)
        setContent('')
        props.setClosingModal(false)
    }


    return( 
        <Modal
            animationType="slide"
            visible={setVisibilty}
            // visible={visiblity}
            transparent={true} 
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');}}
        >  
                <LinearGradient  colors={['rgba(44, 44, 94,.3)', 'rgba(63, 49, 100,.3)']} style={{alignSelf:'center',alignContent:'center',width:'100%',height:'100%',alignItems:'center' }}>
                    <View style={{width:'100%',height:showPicker ?2*halfWidth: 3/2*halfWidth ,backgroundColor:'transparent',marginTop:1/2*halfheight-30}}>
                        <LinearGradient  colors={['#26C8A8', '#00BBCA']} style={{zIndex:1,alignSelf:'center',alignItems:'center',alignContent:'center',width:'110%',height:'35%' ,borderBottomRightRadius:250,borderBottomLeftRadius:250,}}>
                            <Text style={{color:'rgba(255,255,255,1)',alignSelf:'center',fontSize:24,marginTop:1/5*halfWidth,fontWeight:'bold',fontFamily:'Muli'}}>{title} Ekle</Text>
                        </LinearGradient>
                        <View style={{height:'100%',width:'85%',backgroundColor:'#fff',position:'absolute',top:10,zIndex:-1,alignSelf:'center',borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center',alignContent:'center'}}>
                            <View style={{ top:'30%' ,alignSelf:'center' ,alignItems:'center',alignContent:'center'}}>

                                { !showPicker && 
                                    <Text style ={{marginTop:30,fontSize:18}}>{day} Tarih İçin</Text>
                                }

                                { showPicker &&
                                    <View style={{borderWidth:1,borderColor:'rgba(151, 151, 151,.4)',borderRadius:10,paddingHorizontal:10,width:3/2*halfWidth ,marginBottom:15,marginTop:15,height:50}}>
                                        <View style ={{height:30}}>
                                            <DatePicker
                                                defaultDate={new Date()}
                                                minimumDate={new Date(2020, 1, 1)}
                                                maximumDate={new Date(2040, 12, 31)}
                                                locale={"en"} 
                                                timeZoneOffsetInMinutes={undefined}
                                                modalTransparent={false}
                                                animationType={"fade"}
                                                androidMode={"spinner"}
                                                placeHolderText="Tarih Seç"
                                                placeholderTextColor={'#3A4155'}
                                                textStyle={{ color: "green" }}
                                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                                onDateChange={setDate}
                                                disabled={false}
                                                />  
                                                
                                        </View>
                                          
                                    </View> 
                                }
                                         
                                <View style={{borderWidth:1,borderColor:'rgba(151, 151, 151,.4)',borderRadius:10,paddingHorizontal:10,width:3/2*halfWidth ,marginBottom:15,marginTop:15,height:50}}>
                                    <TextInput  placeholder= {data? data :  title + " Giriniz" }  style={{color:'#3A4155'}} placeholderTextColor={'#3A4155'}   onChangeText={(e)=>setContent(e)} />
                                </View>
                                
                                <View style={{width:'100%',paddingBottom:10,flexDirection:'row',justifyContent:'space-evenly'}}> 

                                    <Button bordered style={{width:'35%',borderRadius:20,alignItems:'center',alignContent:'center'}}  onPress={()=>closeModal()}  >
                                        <Text style={{textAlign:'center',width:'100%',fontFamily:'Muli'}}>Iptal</Text>
                                    </Button>

                                    <Button bordered style={{width:'35%',borderRadius:20}}onPress={()=>submittingContent()}   >
                                        <Text style={{textAlign:'center',width:'100%',fontFamily:'Muli'}}>Tamam</Text>
                                    </Button>

                                </View>
                            </View>
                        </View>  
                    </View>
                    
                </LinearGradient>  
        </Modal> 
   )
}
const mapStateToProps = (state) => {
    return { 
        user_meals: state.user_meals
    }
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

export default AddMesurmentModal;