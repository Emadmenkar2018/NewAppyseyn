import React, { memo ,useState,useRef} from 'react';
import { StyleSheet, Text, Image ,View ,TouchableOpacity } from 'react-native';
import { Input, Item, Label  , Icon } from 'native-base'; 
import {IMAGES} from '../../constants/arrays';
import {_deleteRecord} from '../../utils/requests'
import Dialog from "react-native-dialog";
import SwipeableViews from 'react-swipeable-views-native';
import LinearGradient from 'react-native-linear-gradient';
import {  TouchableWithoutFeedback  } from 'react-native-gesture-handler'
const SwipeableContainer = ({history,imagePlaceholder,data,day,title, ...props }) => { 


    const swipnigRef = useRef(null);

  const [dialogVisibile, setDialogVisible] = useState(false)

  const [disable, setDisable] = useState(true)

  const [index, setIndex] = useState(0)

  const handleEvent = () =>{
        setIndex(index== 1 ? 0 : 1)
        setDisable(true)
        console.log(' onLongPress')
  }

  const handleEventFinished=() =>{
    setDisable(true)
    setIndex( index== 0 ?  1 : 0)
  }
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
    // handleTouchEnd ={()=>{true}} handleTouchMove ={()=>{true}} handleTouchStart={()=>{true  onPressOut={()=>false}  
    //     console.log('Hi')
    // }} 
    return ( 
        <TouchableWithoutFeedback   onPressIn={() => {}} onPressOut={() => {}}  onPress={() => {}}>
        
            <TouchableOpacity activeOpacity={1} onPress ={(e)=>{handleEvent(e)}}>

                <SwipeableViews ref={swipnigRef} index={index} disabled={disable} threshold={0} handleAnimationFinished={()=>handleEventFinished()} springConfig={{friction:200}}  style={styles.slideContainer}  >
                    
                        <View style={[styles.slide, styles.slide1]}>
                            
                                {/* <Item   style={styles.container} >  */}
                                
                                    <View style={styles.iconcontainer}>
                                        <Image
                                        style={{width: 50, height: 50}}
                                        source={getImage(imagePlaceholder)}
                                        />
                                    </View>


                                    <View style={styles.Textcontainer}>

                                        <Text style={styles.head}>
                                        Tarih : {day}
                                        </Text> 

                                        <Text style={styles.head}>
                                        Değer : {data}
                                        </Text> 

                                    </View>  
                        </View>

                        <View style={[styles.slide, styles.slide2]}>
                            {/* <Item   style={styles.container} >  */}
                                    
                                    <View style={styles.iconcontainer}>
                                        <Image
                                        style={{width: 50, height: 50}}
                                        source={getImage(imagePlaceholder)}
                                        />
                                    </View>


                                    <View style={styles.Textcontainer}>

                                        <Text style={styles.head}>
                                            Tarih : {day}
                                        </Text> 

                                        <Text style={styles.head}>
                                            Değer : {data}
                                        </Text> 

                                    </View> 


                                    {/* <LinearGradient colors={['rgba(0, 150, 136,0.4)','rgba(0, 150, 136,0.4)']}  style={{backgroundColor:'#E64A3B',width:'100%',flexDirection:'row',height:'100%',alignItems:'center',paddingLeft:30,alignContent:'center',justifyContent:'flex-start'}}>

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
                                    </LinearGradient> */}

                                    <View  style={{backgroundColor:'rgba(50, 150, 136,0.15)',width:'100%',flexDirection:'row',height:'100%',alignItems:'center',paddingLeft:30,alignContent:'center',justifyContent:'flex-start'}}>

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
                                    </View>

                                    <View style={{backgroundColor:'#000'}}>
                                        <Dialog.Container  contentStyle= {{backgroundColor:'rgba(229, 74, 61,0.8)'}} visible={dialogVisibile}>
                                        
                                            <Dialog.Title  style={{color:'#1D253C',fontWeight:'bold',fontFamily:'Muli-Bold',alignSelf:'center',fontSize:20}}>Kaydı Silmek ..</Dialog.Title>
                                            <Dialog.Description style={{color:'#fff',fontWeight:'600',fontFamily:'Muli'}}>
                                            Kaydı Silmek Istediğinden Emin Misin ??
                                            </Dialog.Description>
                                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                                            <Dialog.Button style={{backgroundColor:'#1D253C',borderRadius:20,marginHorizontal:10,width:100,fontFamily:'Muli'}} onPress={handleCancel} color={'#fff'} label="Iptal" />
                                            <Dialog.Button style={{backgroundColor:'#1D253C',borderRadius:20,marginHorizontal:10,width:100,fontFamily:'Muli'}} onPress={handleDelete} color={'#fff'}   label="Evet" />
                                            </View>
                                        </Dialog.Container>
                                    </View>
                                {/* </Item>   */}

                        </View>



                </SwipeableViews>
            </TouchableOpacity>
        </TouchableWithoutFeedback>
    )
   }

const styles = StyleSheet.create({  
  iconcontainer:{
    width :'20%'
  },
  Addcontainer:{
    width :'10%', 
    // alignSelf:'',    
    paddingRight:10,
    
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
  },
  slideContainer: {
    height: 100,
    width:'100%', 
  },
  slide: {
    padding: 15,
    height: 100, 
    width:'100%',
    borderBottomColor:'transparent',
    flexDirection:'row', 
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65, 
    elevation: 4,
    paddingLeft:10,
    paddingRight:10,
    borderBottomWidth:0
  },
  slide1: {
    alignItems:'center',
    backgroundColor: '#fff',
    height: 100,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    borderBottomWidth:0,
    marginVertical:10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65, 
    elevation: 4,
    paddingLeft:10,
    paddingRight:10,
    borderBottomWidth:0
  },
  slide2: {
    alignItems:'center',
    backgroundColor: '#fff',
    width:'100%',
    height:100,
    marginVertical:10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65, 
    elevation: 4,
    paddingLeft:10,
    paddingRight:10,
    borderBottomWidth:0,
    paddingVertical:-10
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default memo(SwipeableContainer);