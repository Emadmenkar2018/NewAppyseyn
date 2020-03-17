

import React, { memo ,useState} from 'react';
import { StyleSheet, Text, Image ,View, TouchableOpacity } from 'react-native'; 
import {getToday}from '../../utils/methods'

const Calender = ({ index, ...props }) => { 
    // console.log('index',index)
    // const [dayIndex,setDayIndex] = useState(index); 

    return ( 
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignContent:'center',alignItems:'baseline',justifyContent:'space-between',width:'100%',height:'100%'}}>

                <TouchableOpacity style={{width:'10%'}} onPress={()=>console.log('Hi')}>

                    <View style={{width:'100%',height:'100%',alignItems:'center'}}>
                        <View style={{height:'50%',width:'40%' ,borderRadius:10,backgroundColor: '#3CCFA4'}}>
                        </View> 

                        <Text style={{color:'#fff',marginTop:2}}>{getToday()[6]}</Text>
                    </View>
                    
                </TouchableOpacity>
 

                <TouchableOpacity style={{width:'10%'}} onPress={()=>console.log('Hi')}>

                    <View style={{width:'100%',height:'100%',alignItems:'center' ,backgroundColor:'#3CCFA4'}}>
                        <View style={{height:'80%',width:'40%',backgroundColor:'#3CCFA4',borderRadius:10}}>
                        </View> 

                        <Text style={{color:'#fff',marginTop:2}}>{getToday()[5]}</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={{width:'10%'}}  onPress={()=>console.log('Hi')}>

                    <View style={{width:'100%',height:'100%',alignItems:'center'}}>
                        <View style={{height:'40%',width:'40%',backgroundColor:'#fff',borderRadius:10}}> 
                        </View>

                        <Text style={{color:'#fff',marginTop:2}}>{getToday()[4]}</Text>
                    </View>

                </TouchableOpacity> 

                <TouchableOpacity  style={{width:'10%'}}  onPress={()=>console.log('Hi')}> 

                    <View style={{width:'100%',height:'100%',alignItems:'center'}}>
                        <View style={{height:'60%',width:'40%',backgroundColor:'#fff',borderRadius:10}}> 
                        </View>

                        <Text style={{color:'#fff',marginTop:2}}>{getToday()[3]}</Text>
                    </View>

                </TouchableOpacity> 


                <TouchableOpacity  style={{width:'10%'}}  onPress={()=>console.log('Hi')}> 
 
                    <View style={{width:'100%',height:'100%',alignItems:'center'}}>
                        <View style={{height:'40%',width:'40%',backgroundColor:'#fff',borderRadius:10}}> 
                        </View>

                        <Text style={{color:'#fff',marginTop:2}}>{getToday()[2]}</Text>
                    </View>

                </TouchableOpacity> 

                <TouchableOpacity style={{width:'10%'}}  onPress={()=>console.log('Hi')}> 

                    <View style={{width:'100%',height:'100%',alignItems:'center'}}>
                        <View style={{height:'60%',width:'40%',backgroundColor:'#fff',borderRadius:10}}> 
                        </View>

                        <Text style={{color:'#fff',marginTop:2}}>{getToday()[1]}</Text>
                    </View>

                </TouchableOpacity> 

                <TouchableOpacity style={{width:'10%'}}   onPress={()=>console.log('Hi')}> 

                    <View style={{width:'100%',height:'100%',alignItems:'center'}}>
                        <View style={{height:'50%',width:'40%',backgroundColor:'#fff',borderRadius:10}}> 
                        </View>

                        <Text style={{color:'#fff',marginTop:2}}>{getToday()[0]}</Text>
                    </View>

                </TouchableOpacity> 
               
          
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
        
    }
});

export default memo(Calender);