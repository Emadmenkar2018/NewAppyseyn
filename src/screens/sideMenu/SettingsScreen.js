// import {SettingsDividerShort,  SettingsEditText, SettingsCategoryHeader, SettingsSwitch, SettingsPicker} from 'react-native-settings-components';
import React, { useRef , useState  } from 'react';
import {  StyleSheet ,ScrollView, View ,Text, Image, Platform,TouchableOpacity} from 'react-native' 
import ReactNativeSettingsPage, { 
	SectionRow, 
    NavigateRow,
    SwitchRow, 
} from 'react-native-settings-page'; 
import {DeviceEventEmitter} from 'react-native' 
// import {MaterialDialog  } from 'react-native-material-dialog';
import { Button,Icon } from 'react-native-elements';  
import {StatusBar} from 'react-native'
import { useHistory } from 'react-router-native'; 

const SettingsScreen =()=> {
    let history = useHistory();   
    const [email,setEmail] = useState('');
    const [newsletter,setNewsletter] = useState(''); 

      return( 
        <View style ={{width:'100%',height:'100%',backgroundColor:'#2C2C5E' ,paddingHorizontal:20}}>
            <View style={{flexDirection:'row',justifyContent:'space-between' ,backgroundColor:'transparent',width:'100%',marginTop:40,zIndex:0 }}>
               
               <TouchableOpacity onPress={()=>history.goBack()}>
                 <Icon name="arrow-back" type ='material' size={35}  color='#999'   />
               </TouchableOpacity>
                
   
                 <Text style ={{alignSelf:'center',fontSize:27,fontWeight:'bold',fontFamily:'Muli-Bold',color:'#999'}}>SSS</Text> 
   
                 {/* <TouchableOpacity onPress={()=>history.push('/Main/Store')}> */}
                   <Image
                     resizeMode={'contain'}
                     style={styles.stretch}
                     source={null} 
                     tintColor={ '#1D253C' }
                   />
                 {/* </TouchableOpacity> */}
            </View>
        <ScrollView style={{ flex: 0.75, paddingRight : 20,paddingBottom:20,paddingLeft:20 ,backgroundColor:'#2C2C5E',marginVertical:20 }}> 
            <SectionRow  style={{color: '#1D253C'}} text='Notification'  textStyle={{color:'#1D253C'}}>
                    <SwitchRow 
                    text='Enable Email Notifications'
                    iconName='bell'
                    _color='#000' 
                    _onValueChange={() => { setEmail(!email) }}
                    _value={email}
                    />
                    <SwitchRow 
                    text='Recieve Monthly Newsletter'
                    iconName='envelope-open'
                    _color='#000' 
                    _onValueChange={() => { setNewsletter(!newsletter) }}
                    _value={newsletter}
                     />
                </SectionRow>
                <SectionRow style={{color: '#1D253C'}} text='Account'  textStyle={{color: '#1D253C'}}>

                    <NavigateRow
                        text='Change Email'
                        iconName='at'
                        // onPressCallback={this._navigateToPasswordScreen} 
                        />
                    <NavigateRow
                        text='Change Password'
                        iconName='lock'
                        // onPressCallback={this._navigateToPasswordScreen} 
                        /> 
                    <NavigateRow 
                        text='Version 4.9.9' 
                        iconName='code'
                        // _value={this.state.switch}
                        // _onValueChange={() => { this.setState({ switch: !this.state.switch }) }}
                         />
                </SectionRow>
                <SectionRow style={{color:'#1D253C'}} text='Account'  textStyle={{color:'#1D253C'}}> 
                    <NavigateRow
                        text='Delete Account'
                        iconName='trash'
                        // onPressCallback={this._daleteAccount}
                         />
                    <NavigateRow
                        text='Logout'
                        iconName='sign-out'
                        // onPressCallback={this._logout} 
                        />
                </SectionRow> 
        </ScrollView> 
      </View >  
      )
   
}

export default SettingsScreen

const styles = StyleSheet.create({
  stretch:{ 
    height:35,
    width:45, 
  } ,
})