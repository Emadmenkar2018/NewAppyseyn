import React, { memo ,useState,useEffect} from 'react';
import { StyleSheet, View, Modal  , Dimensions ,Text,TextInput } from 'react-native';
import {   Icon, Item, Input , DatePicker,Button} from 'native-base';  
import LinearGradient from 'react-native-linear-gradient'; 
const halfheight = Dimensions.get('window').height /2 
const halfWidth = Dimensions.get('window').width /2 
import {connect} from 'react-redux'
import {setBreakfastContent,setLunchContent,setDinnerContent,setExerciseContent,setAperatifContent,setSleepContent} from '../../redux/actions/meal.actions'

const AddMealModal = ({ setVisibilty,title , ...props }) => {
 
//  console.log('days',) 
// console.log('content', props.content);
const [content,setContent] = useState(props.content);

 const submittingContent = () =>{ 
    props.setClosingModal(false)
    if (title==='Kahvaltı'){
        props.setBreakfastContent(props.DaysData,content)
    }
    else if (title==='Öğle Yemeği'){
        console.log('mydate',props.DaysData,content)
        props.setLunchContent(props.DaysData,content)
    }
    else if (title==='Akşam Yemeği'){
        props.setDinnerContent(props.DaysData,content)
    } 
    else if (title==='Egzersiz'){
        props.setExerciseContent(props.DaysData,content)
    } 
    else if (title==='Aperatif'){
        props.setAperatifContent(props.DaysData,content)
    } 
    else if (title==='Uyku'){
        props.setSleepContent(props.DaysData,content)
    } 

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
                    <View style={{width:'100%',height:3/2*halfWidth,backgroundColor:'transparent',marginTop:1/2*halfheight-30}}>
                        <LinearGradient  colors={['#26C8A8', '#00BBCA']} style={{zIndex:1,alignSelf:'center',alignItems:'center',alignContent:'center',width:'110%',height:'35%' ,borderBottomRightRadius:250,borderBottomLeftRadius:250,}}>
                            <Text style={{color:'rgba(255,255,255,1)',alignSelf:'center',fontSize:24,marginTop:1/5*halfWidth,fontWeight:'bold',fontFamily:'Muli'}}>{title} Ekle</Text>
                        </LinearGradient>
                        <View style={{height:'100%',width:'85%',backgroundColor:'#fff',position:'absolute',top:10,zIndex:-1,alignSelf:'center',borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center',alignContent:'center'}}>
                            <View style={{ top:'30%' ,alignSelf:'center' ,alignItems:'center',alignContent:'center'}}>
                                

                                <View style={{borderWidth:1,borderColor:'rgba(151, 151, 151,.4)',borderRadius:10,paddingHorizontal:10,width:3/2*halfWidth ,marginBottom:15,marginTop:40,height:50}}>
                                    <Item picker style={{ width:'100%',borderBottomWidth:0}}>
                                        <Input  placeholder= { title + " Giriniz"}    onChangeText={(e)=>setContent(e)} />
                                    </Item> 
                                </View> 
                                
                                
                                <View style={{width:'100%',paddingBottom:10,flexDirection:'row',justifyContent:'space-evenly'}}> 

                                    <Button bordered style={{width:'35%',borderRadius:20,alignItems:'center',alignContent:'center'}}  onPress={()=>props.setClosingModal(false)}  >
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

export default connect(mapStateToProps, {setBreakfastContent,setLunchContent,setDinnerContent,setExerciseContent,setAperatifContent,setSleepContent})(AddMealModal);