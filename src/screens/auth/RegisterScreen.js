import React, { memo, useState ,useRef} from 'react';
import {connect} from 'react-redux'
import { Text, StyleSheet ,View   , TouchableOpacity, Dimensions} from 'react-native';  
import RegisterInput from '../../../components/Register/Input'
import RegisterBackground from '../../../components/Register/Background'
import RegisterLogo from '../../../components/Register/Logo'
import MyIcon from '../../../components/Login/Icon'
import {Button} from 'react-native-elements'    
import {loginUser} from '../../../redux/actions/user.actions' 
import Alert from '../../../components/Login/Alert'
import {CreateAccount} from '../../../utils/methods' 
import {ValidateEmail} from '../../../utils/methods'

const RegisterScreen = ({ history, ...props  }) => { 
    const [firstname, setFirstname] = useState({ value: '', error: '' });
    const [lastname, setLastname] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' }); 
    const [alertMessege, setAlertMessege] = useState(''); 
    const chipRef = useRef(null);
    const showAlert = useRef(null);

    const _navigateToSignScreen = ()=>{
        history.push("/")
    }

    const _handleRegistration = () =>{ 
      if (!firstname.value || !lastname.value || !email.value || !password.value)
      {
        setAlertMessege('kullanıcının bilgilerini doldurun')
        showAlert.current.open()
      }
      else 
      {
        if (ValidateEmail(email.value))
        {
          // setShowProgress=(true)
          let bodyFormData = new FormData();  
          bodyFormData.append('first_name', firstname.value);
          bodyFormData.append('last_name', lastname.value);
          bodyFormData.append('email', email.value );
          bodyFormData.append('password', password.value); 
              CreateAccount(bodyFormData).then(function (response) {     
                props.loginUser(response);
                global.AccesToken = response.token;  
                history.push("/steps")  
                // setShowProgress=(false)
                 return response.data;
              })
              .catch(function (err) {    
                 setAlertMessege(err.message[`${[Object.keys(err.message)[0]]}`][0])
                 showAlert.current.open() 
                  return err;
              });   
        }
        else 
        {
          setAlertMessege('Geçerli E-posta Girin')
          showAlert.current.open()
        }
      }
    }
  
    return (
         <RegisterBackground>  
 

              <View style={{ marginTop:15,height:60,marginBottom:20}}>
                <MyIcon/>
              </View>

              <View style={{ height:60,marginBottom:15}}>
                <RegisterLogo/>
              </View>

              <View style={{paddingLeft:20,paddingRight:20}}>

                    <RegisterInput 
                      style={{ textAlign: 'center' ,alignSelf:'center' , width:'90%',fontSize:14, height: 25,backgroundColor:'transparent'  ,marginRight : 10, padding : 5,paddingLeft:15,borderRadius:20}} 
                      onChangeText={text => { 
                        setFirstname({ value: text, error: '' })}}
                      label='Adı'  
                      inputText={firstname.value}
                      type='text'
                    />  

                    <RegisterInput 
                        style={{  textAlign: 'center' ,alignSelf:'center', width:'90%',fontSize:14, height: 25,backgroundColor:'transparent'   ,marginRight : 10, padding : 5,paddingLeft:15,borderRadius:20}} 
                        onChangeText={text => { 
                          setLastname({ value: text, error: '' })}}
                        label='Soyadı'
                        type='text' 
                        inputText={lastname.value}
                    />   
                    <RegisterInput 
                        style={{ textAlign: 'center' ,alignSelf:'center' , width:'90%',fontSize:14, height: 25,backgroundColor:'transparent'  ,marginRight : 10, padding : 5,paddingLeft:15,borderRadius:20}} 
                        onChangeText={text => { 
                          setEmail({ value: text, error: '' })}}
                        label='E-posta'  
                        inputText={email.value}
                        type='email'
                    />  

                    <RegisterInput 
                        style={{  textAlign: 'center' ,alignSelf:'center', width:'90%',fontSize:14, height: 25,backgroundColor:'transparent'   ,marginRight : 10, padding : 5,paddingLeft:15,borderRadius:20}} 
                        onChangeText={text => { 
                          setPassword({ value: text, error: '' })}}
                        label='Şifre'
                        type='password'
                        secureTextEntry={true} 
                        inputText={password.value}
                    />    

                    <Button title={'Register'}  onPress={() => _handleRegistration()}  buttonStyle={styles.button}>
                      Login
                    </Button>   
 

                    <View style={styles.row}>

                      <Text style={styles.label}>Hesabınız Var Mı? </Text>
                      <TouchableOpacity onPress={() => _navigateToSignScreen()}>
                        <Text style={styles.link}>Giriş Yap</Text>
                      </TouchableOpacity>
                      
                    </View>

               </View>    

                <Alert
                  ref={showAlert}
                  text={alertMessege} 
                />
 
         </RegisterBackground>
        )
  };  

  const mapStateToProps = (state) => {
    return { 
        user: state.user,
    }
} 
export default connect(mapStateToProps, {loginUser})(RegisterScreen);

const styles = StyleSheet.create({
  text: {
    marginTop : 6,
    fontSize: 16,
    color : '#00A383'
    // fontFamily: "EvilIcons"
  }, 
  button:{
    marginTop:10,
    borderWidth:2,
    borderColor:'rgba(255,255,255,.3)',
    width:'100%',  
    height:40,
    borderRadius:20,
    alignSelf:'center',
    zIndex:1,
    backgroundColor:'rgba(233, 44, 129,.9)',
    paddingLeft:20,
    paddingRight:20
  }, 
  button2:{ 
    width:'100%',  
    height:40, 
    borderRadius:20,
    alignSelf:'center',
    backgroundColor:'rgba(233, 44, 129,.9)'
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
  registerbtn:{
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width:'100%',  
    height:40,
    borderRadius:20,
    alignSelf:'center',
  }
}); 