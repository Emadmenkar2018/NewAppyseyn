import React, { memo ,useState} from 'react';
import { StyleSheet, Text, Image ,View ,TouchableOpacity } from 'react-native';
import { Input, Item, Label  , Icon } from 'native-base'; 
import {IMAGES} from '../../constants/arrays';
import {_deleteRecord} from '../../utils/requests'
import Dialog from "react-native-dialog";

const SingleMesaurment = ({history,imagePlaceholder,data,day,title, ...props }) => { 

  const [dialogVisibile, setDialogVisible] = useState(false)
 
    const getImage=(name)=> {  
      return IMAGES[name];
    }  

    const handleCancel = () =>{
      setDialogVisible(false)
    }

    const showDialog = () =>{
      setDialogVisible(true)
    }

    const handleDelete =()=>{
      _deleteHandler()
    }

    const _deleteHandler  = () =>{
      switch (title) {

        case 'Beden Kitle Indeksi':
          var model_name = 'BodyMass'
          _deleteRecord(day,model_name).then(response =>{   
            props.deletefromList(props.id) 
            setDialogVisible(false)
          }).catch( err =>
              console.log('err',err)
          )
          break;

        case 'Bel Çevresi değerlendirme':
        var model_name = 'WaistWidth'
        _deleteRecord(day,model_name).then(response =>{   
          props.deletefromList(props.id) 
          setDialogVisible(false)
        }).catch( err =>
            console.log('err',err)
        )
        break;

        case 'Bilek Çevresi':
          var model_name = 'WristWidth'
          _deleteRecord(day,model_name).then(response =>{   
            props.deletefromList(props.id) 
            setDialogVisible(false)
          }).catch( err =>
              console.log('err',err)
          )
          break;

        case 'Bazal Metabolizma Hızı':
          var model_name = 'MetabolicRate'
          _deleteRecord(day,model_name).then(response =>{   
            props.deletefromList(props.id) 
            setDialogVisible(false)
          }).catch( err =>
              console.log('err',err)
          )
            break;

        case 'Günlük Enerji Ihtiyacı':
            var model_name = 'EnergyNeed'
            _deleteRecord(day,model_name).then(response =>{   
              props.deletefromList(props.id) 
              setDialogVisible(false)
            }).catch( err =>
                console.log('err',err)
            )
            break;

        case 'Fiziksel Aktivite':
            var model_name = 'PhysicalActivity'
              _deleteRecord(day,model_name).then(response =>{   
                props.deletefromList(props.id) 
                setDialogVisible(false)
              }).catch( err =>
                  console.log('err',err)
              )
              break;

        case 'Egzersiz Süresi':
            var model_name = 'ExerciseTime'
              _deleteRecord(day,model_name).then(response =>{   
                props.deletefromList(props.id) 
                setDialogVisible(false)
              }).catch( err =>
                  console.log('err',err)
              )
              break;

        case 'Yağ Yakma Nabzı':
          var model_name = 'FatBurning'
            _deleteRecord(day,model_name).then(response =>{   
              props.deletefromList(props.id)
              setDialogVisible(false) 
            }).catch( err =>
                console.log('err',err)
            )
            break;

        case 'Uyku Süresi':
          var model_name = 'SleepDuration'
            _deleteRecord(day,model_name).then(response =>{   
              props.deletefromList(props.id) 
              setDialogVisible(false)
            }).catch( err =>
                console.log('err',err)
            )
            break; 
      }

    }
     
    return (

      <Item   style={styles.container} > 
       
        <View style={styles.iconcontainer}>
            <Image
              style={{width: 50, height: 50}}
              source={getImage(imagePlaceholder)}
              />
        </View>


        <View style={styles.Textcontainer}>

          <Text style={styles.head}>
            {day}
          </Text> 

          <Text style={styles.head}>
            {data}
          </Text> 

        </View> 

        <View style={styles.Addcontainer}> 

          <TouchableOpacity style={{width:'100%'}} onPress={()=>props.setModalValues(day,data.toString(),props.id)} >

            <Image
                  style={{width: 25, height: 25}} 
                  source={ getImage('edit') }
            />

          </TouchableOpacity>

        </View> 


        <View style={styles.Addcontainer}> 

          <TouchableOpacity style={{width:'100%'}} onPress={()=>showDialog()} >

            <Image
                  style={{width: 25, height: 25}} 
                  source={ getImage('delete') }
            /> 

          </TouchableOpacity>

        </View> 

        <View style={{backgroundColor:'#000'}}>
          <Dialog.Container  contentStyle= {{backgroundColor:'rgba(229, 74, 61,0.8)'}} visible={dialogVisibile}>
         
            <Dialog.Title  style={{color:'#1D253C', fontFamily:'Merienda-Regular',alignSelf:'center',fontSize:20}}>Kaydı Silmek ..</Dialog.Title>
            <Dialog.Description style={{color:'#fff', fontFamily:'Merienda-Regular'}}>
              Kaydı Silmek Istediğinden Emin Misin ??
            </Dialog.Description>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
              <Dialog.Button style={{backgroundColor:'#1D253C',borderRadius:20,marginHorizontal:10,width:100,fontFamily:'Merienda-Regular'}} onPress={handleCancel} color={'#fff'} label="Iptal" />
              <Dialog.Button style={{backgroundColor:'#1D253C',borderRadius:20,marginHorizontal:10,width:100,fontFamily:'Merienda-Regular'}} onPress={handleDelete} color={'#fff'}   label="Evet" />
            </View>
          </Dialog.Container>
        </View>
    </Item>  
    // </TouchableOpacity> 
    )
   }

const styles = StyleSheet.create({ 
  container:{
    marginBottom:10,
    height:100,
    width:'98%',
    backgroundColor:'#fff',
    borderRadius:10, 
    flexDirection:'row',
    justifyContent:'space-between',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65, 
    elevation: 4,
    paddingLeft:10,
    paddingRight:10
  },
  clickable:{
    marginBottom:10, 
    width:'100%',
    height:100,
    backgroundColor:'#fff',
    borderRadius:10, 
    flexDirection:'row',
    justifyContent:'space-between', 
  },
  iconcontainer:{
    width :'20%'
  },
  Addcontainer:{
    width :'10%', 
    paddingRight:10
  },
  Textcontainer:{
    flexDirection:'column',
    width:'50%'
  },
  head:{
    fontSize:16,
    fontWeight:'bold',
    color:'#1D253C'
  },
  text:{
    fontSize:12, 
    color:'#999'
  }
});

export default memo(SingleMesaurment);