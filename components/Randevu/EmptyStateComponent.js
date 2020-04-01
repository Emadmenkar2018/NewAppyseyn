import React, { memo } from 'react';
import { StyleSheet, View, Text  , Dimensions,Image, TouchableOpacity} from 'react-native';
import { useHistory } from 'react-router-native';

const halfheight = Dimensions.get('window').height /2 
const halfwidth = Dimensions.get('window').width /2 

const EmptyStateComponent = ({ time, ...props }) => {
    let history = useHistory();
    return(
    <View style={styles.container}>  
        <Image
            style={styles.stretch}
            source={require('../../assets/dissapointment.png')}
            tintColor={'#1D253C'}
            resizeMode={'contain'}
          /> 
          <Text style={{color:'#1D253C',fontSize:16,textAlign:'center',alignSelf:'center',fontFamily:'Muli' }}>Randevu Bulunmamaktadır</Text>
          {/* <TouchableOpacity onPress={()=>history.push('/Main/Store')}> */}
          
    </View>
    
    )
}

const styles = StyleSheet.create({ 
    stretch:{ 
        height:halfwidth-50,
        width:halfwidth-50,
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
    }
});

export default memo(EmptyStateComponent);