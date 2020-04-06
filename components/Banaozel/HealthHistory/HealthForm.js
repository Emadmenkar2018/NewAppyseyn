import React, { memo ,useState ,useEffect} from 'react';
import {
  View,
  StyleSheet,  
  Image,
  Text, 
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';  
import LinearGradient from 'react-native-linear-gradient';
import { Body, Left, Item, Input, Right } from 'native-base';
import { Icon } from 'react-native-elements'
import DocumentPicker from 'react-native-document-picker';
import {  _getHistoryDataapi,_getHistoryFilesapi} from '../../../utils/requests'
 
const width = Dimensions.get('window').width/4 

const HealthForm = ({ children , ...props}) => {
 
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [surgery, setSurgery] = useState('')
  const [medical, setMedical] = useState('')

  
  useEffect(() =>{ 
    getHistoryData()
    // getHistoryFiles() 
} , []);

  const getHistoryData = () =>{
    _getHistoryDataapi().then(response =>{
      setSurgery(response.data.surgery)
      setMedical(response.data.medical)
    }).catch(err=>{
      console.log('err',err)
    })
  }

  const getHistoryFiles = () =>{
    _getHistoryFilesapi().then(response =>{
      setInput1(response.data.firstFile)
      setInput2(response.data.secondFile)
      setInput3(response.data.thirdFile)
    }).catch(err=>{
      console.log('err',err)
    })
  }

  async function pickfile(prefix) {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });  
        switch(prefix) {
          case 'first':
            setInput1(res.name) 
            props.setfirstinput(res)
            break;
          case 'second':
            setInput2(res.name)
            props.setsecondinput(res)
            break;
          case 'third':
            setInput3(res.name) 
            props.setthirdinput(res)
            break;
          default: 
        }
        
      }
      catch (err) 
      {
          if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
          } 
          else {
            throw err;
          }
      }
    } 
   
  return( 
      <LinearGradient colors={['#fff', '#fff']} style={{width: '100%', height: '100%',paddingHorizontal:20}}  > 

        <Text style={{fontSize:18,fontFamily:'Merienda-Regular' ,color:'#1D253C'}}>Kan Tahlilleri :</Text>

        <View style={{width:'100%',paddingRight:20}}>

          <Item style={{marginVertical:10,width:'100%' ,flexDirection:'row',justifyContent:'flex-start'}} onPress={()=>pickfile('first')}>
            
            {input1 ?  <Icon  name='close' color={'#000'}  type={'material'}/>  : <Icon  active name='attachment'  type={'material'}/>  }
            <Input placeholderTextColor={input1 ? '#E92C81' :'#1D253C'}  style={{}}  disabled placeholder={input1 ? input1 :'Bir dosya ekle'} />  
              
          </Item>

          <Item style={{marginVertical:10}} onPress={()=>pickfile('second')}>

            {input2 ?  <Icon  name='close' color={'#000'}  type={'material'}/>   : <Icon  active name='attachment'  type={'material'}/>  } 
            <Input placeholderTextColor={input2 ? '#E92C81' :'#1D253C'} style={{}} disabled placeholder={input2 ? input2 :'Bir dosya ekle'} /> 
            
          </Item>

          <Item style={{marginVertical:10}} onPress={()=>pickfile('third')}>

            {input3 ?  <Icon  name='close' color={'#000'}  type={'material'}/>   : <Icon  active name='attachment'  type={'material'}/>  }  
            <Input onPress placeholderTextColor={input3 ? '#E92C81' :'#1D253C'} style={{}} disabled placeholder={input3 ? input3 :'Bir dosya ekle'}/> 

          </Item>

        </View> 

        <Text style={{fontSize:18,fontFamily:'Merienda-Regular' ,color:'#1D253C'}}>Ameliyetler :</Text>
  
        <TextInput onChangeText={(e)=>props.setsurgery(e)} multiline style={{marginVertical:8, height: 100,width:'100%',  borderColor:'#E92C81',borderWidth:1 ,fontSize:16,fontFamily:'Merienda-Regular'}} />

        <Text style={{fontSize:18,fontFamily:'Merienda-Regular' ,color:'#1D253C'}}>İlaçlar :</Text>
  
        <TextInput onChangeText={(e)=>props.setmedical(e)} multiline style={{marginVertical:8, height: 100,width:'100%',  borderColor:'#E92C81',borderWidth:1 ,fontSize:16,fontFamily:'Merienda-Regular'}} />
        
      </LinearGradient>  
  )
}

const styles = StyleSheet.create({ 
  stretch:{ 
    height:35,
    width:45, 
},
});

export default memo(HealthForm);