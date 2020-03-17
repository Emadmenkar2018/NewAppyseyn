import React, { memo } from 'react';
import {
  View,
  StyleSheet,  
  Text
} from 'react-native'; 
import { Icon } from 'react-native-elements'  
import LinearGradient from 'react-native-linear-gradient';
// import GradientButton from 'react-native-gradient-buttons';   

const Background = ({ children }) => ( 
  <LinearGradient colors={['#F97346', '#F97346']} style={{width: '100%', height: '35%',backgroundColor:'#2A2C5F',paddingLeft:15,paddingRight:15,alignContent:'center',alignItems:'center'}} >
      <View style={styles.stretch}>
        <Icon
          name='keyboard-arrow-up'
          type='material'
          iconStyle={{textAlign: 'center',marginBottom:2}} 
          containerStyle={{marginTop:5,backgroundColor:'#fff',width:20,height:20,borderRadius:10,alignSelf:'center' }}
        />
      </View>   
      <Text style ={{alignSelf:'center' ,color:'#1D253C',fontFamily:'Muli-Bold'}}>Günü Seçmek Için Sola Veya Sağa Kaydır</Text>
      {/* <GradientButton
          style={{ marginVertical: 8 , marginTop:'auto',marginBottom:30}}
          textStyle={{ fontSize: 16 }}
          gradientBegin={'#26C8A8'}
          gradientEnd={'#00BBCA'}
          gradientDirection="diagonal"
          height={45}
          width={'95%'}
          radius={25}
          impact
          impactStyle='Light'
          // onPressAction={this.props.navigation.state.params.onupdatewebsite.bind(this, this.state.profiledata, 'instagram')}  
          >
            Randevu Yap
      </GradientButton> */}
 </LinearGradient>  
);

const styles = StyleSheet.create({ 
  stretch:{ 
    marginTop:-5,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F97346',
    // borderTopLeftRadius:20,
    transform: [
      {scaleY: 1.5}, 
      {scaleX: 1.5}, 
      {rotate: '0deg'}
    ]
      
},
});

export default memo(Background);