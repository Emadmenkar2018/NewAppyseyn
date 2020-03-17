

import React, { Component,useState,useEffect,useRef } from 'react';
import { View, Text, StyleSheet, StatusBar ,Dimensions} from 'react-native'; 
const halfheight = Dimensions.get('window').height /2 
const halfwidth = Dimensions.get('window').width /2 
import Carousel from 'react-native-snap-carousel';
import {_getDates,_extractDays,_extractDays2,_getDates2} from '../../utils/methods'
import DateComponent from './DateComponent'
import EmptyStateComponent from './EmptyStateComponent'





const MyCalender = ({ history, ...props }) => { 
 

   const [showRandevu, setShowRandevu] =useState(false)
   const [myRandevus, setmyRandevus] =useState(props.MyRandevus)
   const [index, setIndex] =useState(2)
   const [passingData,setPassingData]=useState('')
   const carrousel = useRef(null);

   useEffect(() =>{
        setmyRandevus(props.MyRandevus)
        showRandevus(2)
    }, []);

 

    const _renderItem = ({item, index}) => {
    // get the list of the appointment days and make it down here   
    let randevudays=_extractDays(myRandevus) 
        return (
            <View style={styles.slide}>
                <Text style={randevudays.includes(item)? styles.titleHighlighted : styles.title}>{ item }</Text>
            </View>
        );
    }


    const handleSnapToItem =(myindex) =>{ 
        setIndex(myindex)
        showRandevus(myindex)
      }

      const showRandevus = (index) =>{
        let randevudays=_extractDays2(myRandevus)  
        let calender = _getDates2()   
        if (!randevudays.includes(calender[index])){ 
            setShowRandevu(false) 
        }
        if (randevudays.includes(calender[index])){ 
            setShowRandevu(true)  
            let passedtime = myRandevus.filter( (el) => { 
                return el.desired_date.includes(calender[index])  
              }); 
            setPassingData(passedtime)
        }
      } 
    //Current Date 
       return ( 
           <View style={{width:'100%',height:'100%',alignItems:'center'}}>
               <Text style={{fontSize:30,color:'#1D253C',marginTop:30,fontWeight:'bold',alignSelf:'flex-start',marginStart:20}}>Randevu Sistemi</Text>
               {showRandevu && passingData &&
                    <DateComponent
                        time={passingData}
                    />    
               } 
               {!showRandevu && 
                    <EmptyStateComponent
                        time={passingData}
                    />    
               } 
                <View style={{width:'100%',position:'absolute',bottom:15  ,alignItems:'center',alignContent:'center'}}>  
                    {/* <Text style={{color:'#1D253C',alignSelf:'center',marginBottom:10,textAlign:'center'}}>Randevu Yapmak Için Günü Seçin</Text> */}
                    <View style={{alignContent:'center'}}>
                        {props.MyRandevus.length > 0 &&
                            <Carousel 
                            ref={carrousel} 
                            data={_getDates()}
                            enableMomentum={false}
                            renderItem={_renderItem}
                            sliderWidth={ 4*halfwidth }
                            itemWidth={2*halfwidth/5}
                            firstItem={2}
                            slideStyle={{ flex: 1,marginHorizontal:0  }}
                            onSnapToItem={(index)=>handleSnapToItem(index)} 
                            initialNumToRender={34}
                            activeSlideAlignment={'center'} 
                            sliderHeight={100} 
                            onBeforeSnapToItem={()=>setShowRandevu(false) }
                            // contentContainerCustomStyle={{backgroundColor:'#000' }}
                            />
                        }
                    </View>
                </View>
           </View>
       ) 
   } 

   export default MyCalender;


const styles = StyleSheet.create({ 
    slide:{
        
    },
    titleHighlighted:{
        fontSize:25,
        color:'#26C8A8',textAlign:'center'
    },
    title:{
        fontSize:25,
        color:'rgba(29, 37, 60,.5)',textAlign:'center'
    }
 });