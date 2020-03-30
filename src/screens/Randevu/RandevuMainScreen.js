import React , {useState,useEffect,useRef} from 'react';
import { StyleSheet,   View,Text,Dimensions } from 'react-native'; 
import Background from '../../../components/Randevu/RandevuBackground'   
import MyCalender from '../../../components/Randevu/MyCalender'    
import CreateRandevuModal from '../../../components/Randevu/CreateRandevuModal' 
import {_fetchmyRandevuData} from '../../../utils/requests'

import MySideBar from '../../../components/SideMenu/MySideBar'

const width = Dimensions.get('window').width /2 


const  RandevuMainScreen = ({ history, ...props }) => { 

  const [myradevus, setmyRandevus] =useState({})
  const myMenu = useRef(null); 
  
  console.log('randevus',myradevus)

    useEffect(() =>{
      fetchmyRandevus() }, []);


      const fetchmyRandevus=() =>{    
        _fetchmyRandevuData().then(response =>{   
            setmyRandevus(response.bookingTimes)    
        }
        ).catch( err =>
            console.log('err',err)
        )
    }  

    const _openControlPanel = () => {
        // _drawer.open()
       myMenu.current.open()
        // myMenu.current.open()
    };
    return(  
    <MySideBar
        ref={myMenu}
        {...props}
        > 
        <View style={{ flex:1}}> 
            <View style={{ flex:1, backgroundColor: '#fff' , height:'100%',width:'100%'  ,alignContent:'center'}}>    
                 
                    <MyCalender
                        MyRandevus = {myradevus}
                        openControlPanel={_openControlPanel}
                        setMainPAgeIndex={ props.setMainPAgeIndex}
                    /> 

            </View>

            <Background/>

            <CreateRandevuModal/>

        </View>
     </MySideBar>
    )
} 

export default RandevuMainScreen;

const styles = StyleSheet.create({ 

  });