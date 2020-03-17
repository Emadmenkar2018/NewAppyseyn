import React , {useState,useEffect} from 'react';
import { StyleSheet,   View,Text,Dimensions } from 'react-native'; 
import Background from '../../../components/Randevu/RandevuBackground'   
import MyCalender from '../../../components/Randevu/MyCalender'    
import CreateRandevuModal from '../../../components/Randevu/CreateRandevuModal' 
import {_fetchmyRandevuData} from '../../../utils/requests'



const width = Dimensions.get('window').width /2 


const  RandevuMainScreen = ({ history, ...props }) => { 

  const [myradevus, setmyRandevus] =useState({})

    useEffect(() =>{
      fetchmyRandevus() }, []);


      const fetchmyRandevus=() =>{    
        _fetchmyRandevuData().then(response =>{  
            setmyRandevus(response.bookingTimes)   
            console.log('-1',myradevus)
        }
        ).catch( err =>
            console.log('err',err)
        )
}  
    return( 

        <View style={{ flex:1}}> 
            <View style={{ flex:1, backgroundColor: '#fff' , height:'100%',width:'100%'  ,alignContent:'center'}}>    
                
                { myradevus.length>0 &&
                    <MyCalender
                        MyRandevus = {myradevus}
                    />
                }

            </View>

            <Background/>

            <CreateRandevuModal/>

        </View>
 
    )
} 

export default RandevuMainScreen;

const styles = StyleSheet.create({ 

  });