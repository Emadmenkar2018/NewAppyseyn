import React, { memo ,useState,useRef } from 'react';
import { StyleSheet, View, Text  , Dimensions,Image, TouchableOpacity} from 'react-native';
import { useHistory } from 'react-router-native';
import {
    responsiveHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";


const halfheight = Dimensions.get('window').height /2 
const halfwidth = Dimensions.get('window').width /2 

const EmptyStateComponent = ({ time, ...props }) => {
    let history = useHistory(); 
     

    return(
    <View style={styles.container}>   
            <Text style={{color:'#1D253C',  fontSize:responsiveScreenFontSize(3),textAlign:'center',alignSelf:'center',fontFamily:'Merienda-Bold' ,marginBottom:5}}>Randevu Bulunmamaktadır</Text>
            <TouchableOpacity onPress={()=>props.openDialoug()} style={styles.btn}>
                <Text style ={{alignSelf:'center' ,color:'#fff',fontFamily:'Merienda-Regular',fontSize:responsiveScreenFontSize(1.75),marginVertical:7,textAlign:'center'}}>Randevu Talebi Oluştur</Text>   
                <Image
                    style={{width:25,height:25,marginLeft:5}}
                    source={require('../../assets/addRandevu.png')}
                    tintColor={'#fff'}
                    resizeMode={'contain'}
                /> 
            </TouchableOpacity>  
               {/* i have here a modal ok ?  and above i definded the state of the visibility i pass them as props  ok ?*/}
          
          
    </View>
    
    )
}

const styles = StyleSheet.create({ 
    stretch:{ 
        height:halfwidth-100,
        width:halfwidth-100,
        alignSelf:'center',
        marginBottom:10
    },
    container:{  
        zIndex:1,
        marginLeft:halfwidth/3,
        marginRight:halfwidth/3,
        marginTop:halfwidth/3,
        marginBottom:5,
        width: '70%',
        height: 3*halfwidth/4,
        backgroundColor:'transparent',
        alignSelf:'center'
    },
    btn : {
      flexDirection:'row',
      width:responsiveScreenWidth(70), 
      backgroundColor:'rgba(29, 37, 60,.9)', 
      borderRadius:20, 
      justifyContent:'center',
      borderWidth:1,
      borderColor:'#efefef',
      alignItems:'center',
      paddingHorizontal:5
    }
});

export default memo(EmptyStateComponent);