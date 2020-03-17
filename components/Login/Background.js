import React, { memo } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Background = ({ children }) => ( 
  <ImageBackground
    source={require('../../assets/LoginBackground.png')}
    style={{width: '100%', height: '100%'}} 
    >
        <KeyboardAwareScrollView style={{paddingLeft:20,paddingRight:20,alignContent: 'center',}}>
            {children} 
        </KeyboardAwareScrollView>
  </ImageBackground> 
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
});

export default memo(Background);