import React, { memo } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native'; 
import {Button} from 'react-native-elements' 
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; 


const RegisterBackground = ({ children }) => ( 
    <LinearGradient colors={['#2C2C5E', '#3F3164']} style={{width: '100%', height: '100%',backgroundColor:'#223077', zIndex:-1}} >   

        <KeyboardAwareScrollView style={{alignContent: 'center',width: '100%', height: '100%',zIndex:1}}>
            {children} 
            

            <View style={{transform: [{ rotate: '-90deg'}],marginTop:-100 ,marginRight:70,  backgroundColor:'transparent',zIndex:0}}>
              <Button title={''}  buttonStyle={styles.button2}>
                {null}
              </Button> 

              <Button title={''}  buttonStyle={styles.button3}>
                  {null}
              </Button>
            
              <Button title={''}  buttonStyle={styles.button4}>
                {null}
              </Button>  
            </View>  


        </KeyboardAwareScrollView> 

        
 
        {/* <View style={{transform: [{ rotate: '-90deg'}],marginTop:-190 ,  backgroundColor:'transparent',zIndex:-1}}>
            <Button title={'Register'}  buttonStyle={styles.button2}>
                Login
            </Button> 

            <Button title={'Register'}  buttonStyle={styles.button3}>
                Login
            </Button>
          
            <Button title={'Register'}  buttonStyle={styles.button4}>
              Login
            </Button>  
        </View>   */}
    </LinearGradient>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%', 
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginTop:30,
    borderWidth:2,
    borderColor:'rgba(255,255,255,.3)',
    width:'100%',  
    height:60,
    borderRadius:20,
    alignSelf:'center',
    backgroundColor:'rgba(233, 44, 129,.9)'
  }, 
  button2:{ 
    width:'100%',  
    height:80, 
    borderRadius:40,
    marginStart:'-95%',
    // transform([{ rotateX: '45deg' },  
    alignSelf:'center',
    backgroundColor:'rgba(233, 44, 129,1)',
    transform: [{ rotate: '45deg'}]
  }, 
  button3:{ 
    width:'100%',  
    height:80,  
    borderRadius:40,
    marginStart:'-95%',
    alignSelf:'center',
    backgroundColor:'rgba(102, 98, 248,1)',
    transform: [{ rotate: '45deg'}]
  },
  button4:{
    width:'100%',  
    height:80, 
    marginStart:'-95%',
    borderRadius:40,
    alignSelf:'center',
    backgroundColor:'#26C8A8',
    transform: [{ rotate: '45deg'}]
  }
});

export default memo(RegisterBackground);