import React, { memo ,useState} from 'react';
import {
  View,
  StyleSheet,  
  Image,
  TouchableOpacity
} from 'react-native'; 
import { Icon } from 'react-native-elements'  
import LinearGradient from 'react-native-linear-gradient'; 
// import VideoCallModal from './VideoCallModal';
import { useHistory } from 'react-router-native'; 

const Header =  ({ children,firstColor,secondColor ,...props  }) => {
    let history = useHistory();
    const [visibility,setVisibility] = useState(false);
    
    return(
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[ '#2C2C5E','#3F3164']}  style={{height:60 ,width: '100%'  ,zIndex:1 ,alignItems:'center',alignContent:'center'}}  > 
            <View style={{flexDirection:'row',justifyContent:'space-between' ,backgroundColor:'transparent',width:'100%',zIndex:1,paddingTop:10,paddingHorizontal:10}}>


                <View style={{flexDirection:'row',alignItems:'center',alignContent:'center'}}>
                    {/* change here  the photo */}

                    <TouchableOpacity onPress={()=>history.goBack()}> 
                        <Icon name="arrow-back" type ='material' size={35} containerStyle={{marginHorizontal : 10}} color='#fff'   />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>console.log('Hi')}> 
                        <Image style={styles.logo} source={require('../../assets/guy.png')}  /> 
                    </TouchableOpacity>

                </View>


                <View style={{flexDirection:'row',alignItems:'center',alignContent:'center'}}>
                    <TouchableOpacity onPress={()=>console.log('Hi')}>
                        <Image
                            style={styles.stretch}
                            source={require('../../assets/phone.png')} 
                            resizeMode={'contain'}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>history.push('/chat/VideoCallScreen')}>
                        <Image
                            resizeMode={'contain'}
                            style={styles.stretch}
                            source={require('../../assets/video-call.png')} /> 
                    </TouchableOpacity>
                </View>
            </View>
    
            {/* <VideoCallModal
                setVisibilty={visibility}
            />
         */}
        </LinearGradient>  
    )}

const styles = StyleSheet.create({ 
  stretch:{ 
    height:30,
    width:40, 
    alignSelf:'center',
    marginHorizontal : 10,
    },
    logo:{ 
        borderRadius:35, 
        height:35,
        width:35,
        marginHorizontal : 5,
        borderWidth:1,
        borderColor:'#000'
    }
});

export default memo(Header);