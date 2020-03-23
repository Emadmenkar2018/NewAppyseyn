import React, { useRef , useState ,useEffect } from 'react';
import {connect} from 'react-redux'
import { Text, StyleSheet ,View,  TouchableOpacity, Dimensions,KeyboardAvoidingView} from 'react-native';  
import MyIcon from '../../../components/Login/Icon'
import Alert from '../../../components/Login/Alert'
import Logo from '../../../components/Login/Logo'
import LoginInput from '../../../components/Login/Input'
import Background from '../../../components/Login/Background'
import {Button} from 'react-native-elements'
import {ValidateEmail} from '../../../utils/methods'
import {signinUser,setUsernameValue ,setPasswordValue} from '../../../redux/actions/user.actions' 
import SelectableChips from 'react-native-chip/SelectableChips'

const halfheight = Dimensions.get('window').height /2 

const LoginScreen = ({ history, ...props }) => {  
    const [chipSelected, setChipSelected] = useState(''); 
    const [alertMessege, setAlertMessege] = useState(''); 
 

    const chipRef = useRef(null);
    const showAlert = useRef(null); 

    const {setUsernameValue,setPasswordValue} = props 
    const userdata = props.user

    const _navigateToRegisterScreen=()=>{ 
      history.push("/register")
    }

    const handleRedirect = () => {
      history.push('/Main')
      // const {history, signinUser} = props; 
      // if ( !userdata.username_value  || !userdata.password_value)
      // { 
      //   setAlertMessege('kullanıcının bilgilerini doldurun')
      //   showAlert.current.open()
      // }
      // else 
      // {
      //   if (chipSelected=='')
      //   {  
      //     setAlertMessege('Lütfen Seçim Yapın') 
      //     showAlert.current.open()
      //   } 
      //   else 
      //   {
      //     if (!ValidateEmail(userdata.username_value))
      //     {  
      //       setAlertMessege('Geçerli E-posta Girin') 
      //       showAlert.current.open()
      //     }
      //     else if (chipSelected==='Kullanıcı')
      //     {
      //       signinUser(userdata).then(() => 
      //         { console.log('then'); }
      //         ).catch(err => {
      //             setAlertMessege('Kullanıcı adı veya şifre hatalıdır.') 
      //             showAlert.current.open()
      //               return;
      //         }); 
      //     }
      //     else{ 
      //       console.log('admin');  
      //     }
      //   } 
      // }
  }

    const selectChip =(chips) =>{ 
      let chipContent = chips[0] ? chips[0]: ''
      chipRef.current.state.selectedChips =  [chips[0]] 
      setChipSelected(chipContent)  
    } 
    
    return ( 
         <Background>  

           <View style={{marginTop:halfheight-150 ,width:'100%',height:'100%'}}> 

              <View style={{ height:60,marginBottom:20}}>
                <MyIcon/>
              </View>

              <View style={{ height:60,marginBottom:20}}>
                <Logo/>
              </View>

             <LoginInput 
                style={{ textAlign: 'center' ,alignSelf:'center' , width:'90%',fontSize:14, height: 30,backgroundColor:'transparent'  ,marginRight : 10, padding : 5,paddingLeft:15,borderRadius:20}} 
                // onChangeText={text => { 
                //     setUsername({ value: text, error: '' })}}
                label='E-posta'
                setUsernameValue={setUsernameValue}
                inputText={userdata.username_value?userdata.username_value : ''}
                type='email'
            />  

            <LoginInput 
                style={{  textAlign: 'center' ,alignSelf:'center', width:'90%',fontSize:14, height: 30,backgroundColor:'transparent'   ,marginRight : 10, padding : 5,paddingLeft:15,borderRadius:20}} 
                // onChangeText={text => { 
                //   setPassword({ value: text, error: '' })}}
                label='Şifre'
                type='password'
                setPasswordValue={setPasswordValue}
                inputText={userdata.password_value?userdata.password_value : '' }  
            />   
  
  {false &&

            <View style ={{height:20,alignSelf:'center'}}> 
              <SelectableChips ref={chipRef} valueStyleSelected={{backgroundColor:'#E92C81',color:'#fff'}} chipStyleSelected={{backgroundColor:'#E92C81'}} chipStyle ={{height:30 ,borderColor:'transparent', backgroundColor:'rgba(255,255,255,.8)',}} valueStyle={{color:'#1D253C',fontSize:12,fontFamily:'Muli'}} initialChips={["Diyetisyen", "Kullanıcı"]} onChangeChips={(chips) => selectChip(chips)} alertRequired={false}/>
            </View>
  }
        
            <Button onPress={() => handleRedirect()} title={'Giriş'}  buttonStyle={styles.button}>
              Giriş
            </Button>  
          
                 
            <View style={styles.row}>
              <Text style={styles.label}>Hesabınız Yok Mu? </Text>
              <TouchableOpacity onPress={() => _navigateToRegisterScreen()}>
                <Text style={styles.link}>Şimdi kaydol</Text>
              </TouchableOpacity>
            </View>

           </View>
 
           <Alert
              ref={showAlert}
              text={alertMessege} 
           />

         </Background> 
    )
};  

const mapStateToProps = (state) => {
    return {
        test: state.test,
        user: state.user
    }
} 

export default connect(mapStateToProps, {signinUser,setUsernameValue ,setPasswordValue})(LoginScreen);

const styles = StyleSheet.create({
  text: {
    marginTop : 6,
    fontSize: 16,
    color : '#00A383' 
  }, 
  button:{
    marginTop:30,
    borderWidth:0.5,
    borderColor:'rgba(255,255,255,.3)',
    width:'100%',  
    height:40,
    borderRadius:20,
    alignSelf:'center',
    backgroundColor:'rgba(59, 89, 152,.9)'
  }, 
  button2:{ 
    width:'100%',  
    height:40, 
    borderRadius:20,
    alignSelf:'center',
    backgroundColor:'transparent' 
  },
  row: { 
    flexDirection: 'row',
    alignSelf:'center',   
    backgroundColor:'transparent',
    marginTop:10 
  },
  label: {
    color:'rgba(255,255,255,.5)',
    fontFamily:'Muli-Bold',
  },
  link: {
    fontWeight: 'bold',
    fontSize:15,
    color: 'rgba(255,255,255,.5)',
    fontFamily:'Muli-Bold',
  },
});
  
  