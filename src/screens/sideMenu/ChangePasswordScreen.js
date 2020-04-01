import React , {useEffect,useRef,useState} from 'react'; 
import { StyleSheet,   View ,TouchableOpacity,TextInput,BackHandler} from 'react-native';   
import {_fetchMealsData} from '../../../utils/requests' 
import MyStoreStack from '../../../components/SideMenu/MyStoreStack'
import {Icon } from 'react-native-elements' 
import { useHistory } from 'react-router-native';  
import { Container, Header, Content, Item, Input , Button,    Text} from 'native-base';
import Alert from '../../../components/Login/Alert'

const ChangePasswordScreen = ({  ...props }) => {  

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(''); 
    const [rePassword,setrePassword] = useState('');  
  
    const [alertMessege, setAlertMessege] = useState('Bilgileri Tamamlayınız'); 
    const showAlert = useRef(null); 

    let history = useHistory(); 


    
    useEffect(() =>{ 
        BackHandler.addEventListener("hardwareBackPress", backButtonHandler);

        return () => {
        BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
        };
    }, [backButtonHandler]);

    const backButtonHandler = () => {
        history.goBack()
        return true;
    } 

    const openAlert=()=>{
        if ( email.length ===0 ||   password.length ===0 ||    rePassword.length ===0){
        
            showAlert.current.open()
        }
        else{
            history.goBack()
        }
      }

    return(  
        <View style={{ flex:1,backgroundColor:'#fff',zIndex:0,marginVertical:15,paddingHorizontal:25}}>

                {/* <TouchableOpacity onPress={()=>history.goBack()}>
                    <Icon name="arrow-back" type ='material' size={35} containerStyle={{alignSelf:'flex-start'}}  color='#1D253C'/>
                </TouchableOpacity> */}
                
                <Text style={{alignSelf:'center',fontSize:30,marginBottom:20}}>Şifre Değişter</Text>

                <View style ={{marginVertical:5  }}> 
                    <Item>
                        <Input value={email} onChangeText={(e)=>setEmail(e)} placeholder="Email :" />
                    </Item> 
                </View>

                <View style ={{marginVertical:5 }}> 
                    <Item>
                        <Input value={password} onChangeText={(e)=>setPassword(e)} placeholder="Şifre :" />
                    </Item> 
                </View>

                <View style ={{marginVertical:5 }}> 
                    <Item>
                        <Input value={rePassword} onChangeText={(e)=>setrePassword(e)} placeholder="Tekrar Şifre :" />
                    </Item> 
                </View>

               
                <View style={{alignSelf:'center',marginTop:'auto',marginBottom:50,justifyContent:'center'}}>
                    <Button onPress={openAlert} style={{alignSelf:'center', borderBottomColor:'rgba(29, 37, 60,.1)',borderBottomWidth:1,alignItems:'center'}} hasText transparent>
                        <Text style={{ color:'#E92C81'}}>Şifre Değişter</Text>
                    </Button>
                    <Button onPress={()=>history.goBack()} style={{ alignSelf:'center',borderBottomColor:'rgba(29, 37, 60,.1)',borderBottomWidth:1,alignItems:'center'}} hasText transparent>
                        <Text style={{color:'#E92C81'}}>Cancel</Text>
                    </Button>
                </View>
               
                 
                <Alert
                    ref={showAlert}
                    text={alertMessege} 
                />
        </View>
 
    )
} 

const mapStateToProps = (state) => {
    return { 
        user_meals: state.user_meals
    }
} 

export default ChangePasswordScreen;


const styles = StyleSheet.create({ 
    viewPager:{
        flex:1,
        zIndex:1
    }
  });