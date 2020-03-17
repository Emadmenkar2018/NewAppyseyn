

import React, { memo ,useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, Image ,View, TouchableOpacity } from 'react-native'; 
import {getToday,TodayIndicatorList}from '../../utils/methods'

const Calender = ({ currentIndex, ...props })=> {
 

    let DaysIndicator = TodayIndicatorList().reverse().map(day => { 
        return(
            <TouchableOpacity style={{width:'11%'}} onPress={()=>console.log('Hi')}  key={day.day}>

                <View style={{width:'100%',height:'100%',alignItems:'center'}}>
                    <View   style={{height:`${day.height}%` ,width:'40%',backgroundColor:day.index === currentIndex? '#3CCFA4':'#fff',borderRadius:10}}>
                    </View> 

                    <Text style={{color:'#fff',marginTop:2,fontSize:12,fontFamily:'Muli-SemiBold',color:day.index === currentIndex? '#3CCFA4':'#fff'}}>{day.day}</Text>
                </View>
            
            </TouchableOpacity>
            )
        }
      );
  

    return ( 
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignContent:'center',alignItems:'baseline',justifyContent:'space-between',width:'100%',height:'100%'}}>

                {DaysIndicator} 
                
            </View>
        </View>
    )
   }

const styles = StyleSheet.create({  
    container:{
        paddingVertical:5,
        height:'20%',
        width:'100%',
        paddingHorizontal:40,
        backgroundColor:'transparent',
        marginTop:10 ,
        zIndex:0
        
    }
});

export default memo(Calender);