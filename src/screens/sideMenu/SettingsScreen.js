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
import Dialog from "react-native-dialog";

const SettingsScreen =()=> {
    let history = useHistory();   
    const [email,setEmail] = useState('');
    const [newsletter,setNewsletter] = useState(''); 
    const [dialogVisibile,setDialogVisibile] = useState(false);  
    const [deletedialogVisibile,setDeleteDialogVisibile] = useState(false);  


    const handleDeleteCancel = () =>{
      setDeleteDialogVisibile(false)
    }

    const handleDelete =()=>{
      // _deleteHandler()
      history.push('/')
    }


    const handleCancel = () =>{
      setDialogVisibile(false)
    }

    const handleLogout =()=>{
      // _deleteHandler()
      history.push('/')
    }
    
    const _daleteAccount = () => {
      setDeleteDialogVisibile(true)
    }
    const _logout = () => {
      setDialogVisibile(true)
    }
      return( 
        <View style ={{width:'100%',height:'100%',backgroundColor:'#2C2C5E' ,paddingHorizontal:20}}>
            <View style={{flexDirection:'row',justifyContent:'space-between' ,backgroundColor:'transparent',width:'100%',marginTop:40,zIndex:0 }}>
               
               <TouchableOpacity onPress={()=>history.goBack()}>
                 <Icon name="arrow-back" type ='material' size={35}  color='#999'   />
               </TouchableOpacity>
                
   
                 <Text style ={{alignSelf:'center',fontSize:27,fontWeight:'bold',fontFamily:'Muli-Bold',color:'#999'}}>Ayarlar</Text> 
   
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
                        onPressCallback={()=>history.push('/SideBar/ChangeEmail')} 
                        />
                    <NavigateRow
                        text='Change Password'
                        iconName='lock'
                        onPressCallback={()=>history.push('/SideBar/ChangePassword')} 
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
                        onPressCallback={_daleteAccount}
                         />
                    <NavigateRow
                        text='Logout'
                        iconName='sign-out'
                        onPressCallback={_logout} 
                        />
                </SectionRow> 
        </ScrollView> 


        <View style={{backgroundColor:'#000'}}>
            <Dialog.Container  contentStyle= {styles.dialog} visible={deletedialogVisibile}> 
                <Dialog.Title  style={{color:'#1D253C',fontWeight:'bold',fontFamily:'Muli-Bold',alignSelf:'center',fontSize:20}}>Profilini Silme ..</Dialog.Title>
                <Dialog.Description style={{color:'#fff',fontWeight:'600',fontFamily:'Muli'}}>
                  Profilini Silmek Istediğinden Emin Misin ??
                </Dialog.Description>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Dialog.Button style={{backgroundColor:'#1D253C',borderRadius:20,marginHorizontal:10,width:100,fontFamily:'Muli'}} onPress={handleDeleteCancel} color={'#fff'} label="Iptal" />
                <Dialog.Button style={{backgroundColor:'#1D253C',borderRadius:20,marginHorizontal:10,width:100,fontFamily:'Muli'}} onPress={handleDelete} color={'#fff'}   label="Evet" />
                </View>
            </Dialog.Container>
        </View>


        <View style={{backgroundColor:'#000'}}>
            <Dialog.Container  contentStyle= {styles.dialog} visible={dialogVisibile}> 
                <Dialog.Title  style={{color:'#1D253C',fontWeight:'bold',fontFamily:'Muli-Bold',alignSelf:'center',fontSize:20}}>Çıkış Yapma ..</Dialog.Title>
                <Dialog.Description style={{color:'#fff',fontWeight:'600',fontFamily:'Muli'}}>
                 Çıkış Yapmak Istediğinden Emin Misin ??
                </Dialog.Description>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Dialog.Button style={{backgroundColor:'#1D253C',borderRadius:20,marginHorizontal:10,width:100,fontFamily:'Muli'}} onPress={handleCancel} color={'#fff'} label="Iptal" />
                <Dialog.Button style={{backgroundColor:'#1D253C',borderRadius:20,marginHorizontal:10,width:100,fontFamily:'Muli'}} onPress={handleLogout} color={'#fff'}   label="Evet" />
                </View>
            </Dialog.Container>
        </View>
      </View >  
      )
   
}

export default SettingsScreen

const styles = StyleSheet.create({
  stretch:{ 
    height:35,
    width:45, 
  } ,
  dialog:{
    backgroundColor:'rgba(233, 44, 129,0.9)',
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84, 
    elevation: 5,
  }
})