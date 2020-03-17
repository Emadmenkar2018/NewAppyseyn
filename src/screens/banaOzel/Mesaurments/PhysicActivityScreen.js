import React,{memo,useEffect,useState} from 'react';
import { StyleSheet,   View, FlatList } from 'react-native'; 
import DefaultHeader from '../../../../components/Banaozel/DefaultHeader'     
import SwipeableContainer from '../../../../components/Banaozel/SwipeableContainer'    
import AddMesurmentModal from '../../../../components/Banaozel/AddMesurmentModal'    
import LinearGradient from 'react-native-linear-gradient'; 
import {_fetchData,_addBodyMesurment} from '../../../../utils/requests'
import {sortList} from '../../../../utils/methods'
import moment from 'moment'; 
import ActionButton from 'react-native-action-button';
import { ScrollView, TouchableWithoutFeedback  } from 'react-native-gesture-handler'

const PhysicActivityScreen = ({exercisesData,DaysData, ...props }) => { 

    const [list, setList] = useState([])
    const [modaldayinfo, setModaldayinfo] = useState('')
    const [modaldata, setModaldata] = useState('')
    const [index, setIndex] = useState('')
    const [visibilty, setVisibility] = useState(false)
    const [showPicker, setShowPicker] = useState(false)

    useEffect(() =>{ fetchBodyMasses() }, []);


    const fetchBodyMasses=() =>{    
        _fetchData('PhysicalActivity').then(response =>{  
            setList(sortList(response.data)) 
        }
        ).catch( err =>
            console.log('err',err)
        )
    } 

    const deletefromList = (id)=> { 
        setList(list.filter(el => el.id != id )) 
    }
 

    const updatefromList = (id,data,date)=> {
        let new_record = data
        for (let i = 0 ; i<list.length ;i++){
            console.log('date1', list[i].date )
            console.log('date2', date )
            if (list[i].id == id || list[i].date === date){
                list.splice(i, 1);
                break;
            }
        }
        let newlist= list 
        newlist.push(new_record)
        setList(sortList(newlist) )
        setVisibility(false) 
    }
    

    const setModalValues = (day, data,index) =>{
        setModaldayinfo(day.toString())
        setModaldata(data.toString())
        setIndex(index) 
        setShowPicker(false)
        showModal(); 
    }

    const showModal =() =>{
        console.log('date', modaldayinfo,modaldata)
        setVisibility(true)
    }

    const openModalfromAction = () =>{ 
        let today = moment().format('YYYY-MM-DD')
        console.log('today.toString()',today.toString())
        setModaldayinfo('')
        setModaldata('')
        setShowPicker(true)
        showModal();
    }

    
    const renderItem = ({ item,index }) => ( 

        <TouchableWithoutFeedback onPress={() => {true}}>

            <SwipeableContainer  
                day= {list[index].date}
                data={list[index].content}
                imagePlaceholder='body'
                title={'Fiziksel Aktivite'}
                id = {list[index].id}
                deletefromList = {deletefromList}
                // setClosingModal={setVisibility}
                setModalValues={setModalValues}
            /> 

        </TouchableWithoutFeedback>
    )
 
    const keyExtractor = (item, index) => index.toString()
 
    return( 
        
            <LinearGradient colors={['#2C2C5E', '#3F3164']} style={{ flex:1,backgroundColor:'#fff',zIndex:-1,paddingHorizontal:20}}>

                <DefaultHeader
                    headText={'Fiziksel Aktivite'}
                />  

                <TouchableWithoutFeedback style={{width:'100%',height:'100%'}} onPressIn={() => {true}} onPressOut={() => {true}} onPress={() => {true}}>

                    <FlatList
                        keyExtractor={keyExtractor}
                        data={list ? list:[]}
                        renderItem={renderItem }
                    />

                </TouchableWithoutFeedback>

                <ActionButton   position={'right'} offsetY={80} onPress={()=>openModalfromAction()} buttonColor="rgba(231,76,60,1)"> 
                </ActionButton>

                <AddMesurmentModal
                    setVisibilty={visibilty}
                    setClosingModal={setVisibility}
                    title={'Fiziksel Aktivite'}
                    day= {modaldayinfo}
                    updatefromList={updatefromList}
                    data = {modaldata} 
                    showPicker = {showPicker}
                    id  = {index}
                />

            </LinearGradient>
    
        ) 
}
const styles = StyleSheet.create({ 

  });

  export default memo(PhysicActivityScreen);