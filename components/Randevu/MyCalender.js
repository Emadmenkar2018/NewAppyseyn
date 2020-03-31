

import React, { Component,useState,useEffect,useRef } from 'react';
import { View, Text, StyleSheet, StatusBar ,Dimensions,Image,TouchableOpacity} from 'react-native'; 
const halfheight = Dimensions.get('window').height /2 
const halfwidth = Dimensions.get('window').width /2 
import Carousel from 'react-native-snap-carousel';
import {_getDates,_extractDays,_extractDays2,_getDates2} from '../../utils/methods'
import DateComponent from './DateComponent'
import EmptyStateComponent from './EmptyStateComponent'
import { Icon } from 'react-native-elements' 
import { useHistory } from 'react-router-native'; 

const MyCalender = ({   ...props }) => { 
 

   const [showRandevu, setShowRandevu] =useState(false) 
   const [myRan, setmyRandevus] =useState('')
   const [index, setIndex] =useState(2)
   const [firstIndex, setFirstindex] =useState('')
   const [myitem, setMyitem] =useState('')
   const [passingData,setPassingData]=useState('')
   const carrousel = useRef(null);
   let history = useHistory();  


   useEffect(() =>{ 
        showRandevus(2) 
        setmyRandevus(props.MyRandevus) 
        props.setRender(true) 
    }, []);
   
    
    const _snaptoNearest  = () =>{   
        let calender = _getDates() 
        let index =  calender.findIndex(item  => {
            if(item ===props.randevudays[0]) {   
                return item
            }
        })  
        if (index > 0 ){ 
            carrousel.current.snapToItem(index); 
        }  
    }
     

    const _renderItem = ({item, index}) => { 
            return (
                <View   style={styles.slide}> 
                    <Text style={props.randevudays.includes(item)? styles.titleHighlighted : styles.title}>{ item }</Text> 
                </View>

            );
    }

 
    const handleSnapToItem =(myindex) =>{  
        setIndex(myindex)
        showRandevus(myindex) 
    }
 
    const showRandevus = (index) =>{  
        let calender = _getDates2()   
        if (!props.showrandevudays.includes(calender[index])){ 
            setShowRandevu(false) 
        }
        if (props.showrandevudays.includes(calender[index])){ 
            setShowRandevu(true)  
            let passedtime = props.MyRandevus.filter( (el) => { 
                return el.desired_date.includes(calender[index])  
              }); 
            setPassingData(passedtime)
        }
    }  
 
    //Current Date 
       return ( 
           <View style={{width:'100%',height:'100%',alignItems:'center',paddingHorizontal:10}}>
               <View style={{flexDirection:'row',justifyContent:'space-between' ,backgroundColor:'transparent',width:'100%',marginTop:40,zIndex:0}}>
                    <TouchableOpacity onPress={()=>props.openControlPanel()}>
                        <Icon name="menu" type ='material' size={35}  color={'#1D253C'}   />
                    </TouchableOpacity>                  
                  
                  
                   <Text style={{fontSize:27,color:'#1D253C',fontWeight:'bold',alignSelf:'flex-start',marginStart:20}}>Randevu Sistemi</Text>

                   <TouchableOpacity onPress={()=>{
                            if (props.setMainPAgeIndex){
                                props.setMainPAgeIndex(1)
                            }
                            history.push('/Main/Store')}
                       }>
                        <Image
                        resizeMode={'contain'}
                        style={styles.stretch}
                        source={require('../../assets/addBtn.png')} 
                        tintColor={ '#1D253C'}
                        />
                    </TouchableOpacity>
               </View>
 
                {showRandevu && passingData &&  
                    <DateComponent
                        time={passingData ? passingData : {}}
                    />    
               } 
               {!showRandevu && 
                    <View>
                        <EmptyStateComponent/>    
                        <TouchableOpacity style={{width:'100%',height:70,alignSelf:'center',flexDirection:'row',alignItems:'center'}} onPress={_snaptoNearest}>
                            <Text style={{color:'#E92C81',fontSize:12,textAlign:'center',alignSelf:'center',fontFamily:'Muli' ,zIndex:1,marginRight:2}}>En Yakın Randevuya Geç</Text>
                            <Icon type='material' name='forward' color='#E92C81'/>
                        </TouchableOpacity>  
                    </View>
               } 
                <View style={{width:'100%',position:'absolute',bottom:15  ,alignItems:'center',alignContent:'center'}}>   
                    <View style={{alignContent:'center'}}> 
                            <Carousel 
                            //  
                            ref={carrousel} //this one
                            activeSlideOffset={2}
                            swipeThreshold={2}
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
                            inactiveSlideOpacity={0.2}
                            // contentContainerCustomStyle={{backgroundColor:'#000' }}
                            /> 
                        {/* } */}
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
        color:'rgba(29, 37, 60,.9)',textAlign:'center'
    },
    stretch:{ 
        height:35,
        width:45, 
    },
 });