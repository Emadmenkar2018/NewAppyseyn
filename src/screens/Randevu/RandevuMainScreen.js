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
    useEffect(() =>{
      fetchmyRandevus() }, []);


      const fetchmyRandevus=() =>{    
        _fetchmyRandevuData().then(response =>{  
            console.log('omar here' ,response.bookingTimes)
            setmyRandevus(response.bookingTimes)   
            console.log('-1',myradevus)
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
        > 
        <View style={{ flex:1}}> 
            <View style={{ flex:1, backgroundColor: '#fff' , height:'100%',width:'100%'  ,alignContent:'center'}}>    
                
                { myradevus.length>=0 &&
                    <MyCalender
                        MyRandevus = {myradevus}
                        openControlPanel={_openControlPanel}
                    />
                }

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