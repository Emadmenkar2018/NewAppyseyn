import React, { memo } from 'react';
import { StyleSheet, View, Text  , Dimensions} from 'react-native';

const halfheight = Dimensions.get('window').height /2 
const halfwidth = Dimensions.get('window').width /2 

const DateComponent = ({ time, ...props }) => { 
    return(
    <View style={styles.container}> 
        <Text style={{fontSize:20,color:'#E92C81',fontSize:20,textAlign:'center',alignSelf:'center' }}>Bir Randevun Var</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%' }}>
            <View style={{alignItems:'center',alignContent:'center' ,width:'45%'}}>
                <Text style={{fontSize:52,color:'#1D253C'}}>{time.length>0? time[0].start_at.split(":")[0] : ''}</Text>  
                <Text style={{fontSize:30,color:'#1D253C'}}>Saat</Text>  
            </View>

            <View style={{alignItems:'center',alignContent:'center',width:'10%'}}>
                <Text style={{fontSize:52,color:'#E92C81',textAlign:'center'}}>:</Text>
            </View>
            
            <View style={{alignItems:'center',alignContent:'center',width:'45%'}}>
                <Text style={{fontSize:52,color:'#1D253C'}}>{time.length>0? time[0].start_at.split(":")[1] : ''}</Text> 
                <Text style={{fontSize:30,color:'#1D253C'}}>Dakika</Text>  
            </View>
            
        </View>
    </View>
    
    )
}

const styles = StyleSheet.create({ 
    stretch:{ 
        alignSelf:'center',
        tintColor:'#E92C81',  
    },
    container:{  
        margin:halfwidth/3,
        width: '70%',
        height: 3*halfwidth/4,
        backgroundColor:'transparent',
        alignSelf:'center'
    }
});

export default memo(DateComponent);