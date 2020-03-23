import React, { memo } from 'react';
import {
  View,
  StyleSheet,  
  Image
} from 'react-native'; 
import { Icon } from 'react-native-elements'  
import StepIndicator from 'react-native-step-indicator';
import LinearGradient from 'react-native-linear-gradient';

const customStyles = {
  stepIndicatorSize: 12,
  currentStepIndicatorSize:12,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#E92C81',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#E92C81',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#E92C81',
  separatorUnFinishedColor: 'rgba(170, 170, 170,.5)',
  stepIndicatorFinishedColor: '#E92C81',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#E92C81',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#E92C81',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#E92C81'
}
 

const Background = ({ children , ...props}) => {
  _renderIndicator=(state)=>{ 
    if (state.stepStatus == 'current'){
      return (
        <View style={{height:25,width:25,borderRadius:12,backgroundColor:'transparent',borderWidth:2,borderColor:'#E92C81'}}>
            <View style={{height:12,width:12,borderRadius:6,backgroundColor:'E92C81'}}> 
            </View>
        </View>
      )
    }

  }
  return(
    <View style={{width: '100%', height: '40%',backgroundColor:'#E92C81'}}  >   
      <LinearGradient colors={['#2C2C5E', '#3F3164']} style={{width: '100%', height: '95%',backgroundColor:'#2A2C5F'}}  > 
        <View style={{marginTop:30,width:'70%',alignSelf:'center'}}> 
          <StepIndicator
                stepCount={3}
                customStyles={customStyles}
                currentPosition={props.currentPosition} 
                renderStepIndicator={
                  (state)=>_renderIndicator(state)
                }
            />
        </View>  
        {/* <Icon name="chevron-left" type ='font-awesome' size={30}  color='#fff' containerStyle={{position:'absolute',left:20,top:30}}  />  */}
        <View style={{marginTop:'10%',marginStart:20,alignContent:'center',}}>  
          { children }
        </View>
      </LinearGradient> 
    </View> 
  )
}

const styles = StyleSheet.create({ 
  stretch:{ 
    height:35,
    width:45, 
},
});

export default memo(Background);