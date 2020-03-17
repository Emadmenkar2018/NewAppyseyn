import React, { memo } from 'react';
import { StyleSheet, View, Image  , Dimensions} from 'react-native'; 

const halfheight = Dimensions.get('window').height /2 

const Logo = ({ label, errorText,inputText,type, ...props }) => (
    <>
    <View style={styles.container}>
        <Image
            style={styles.stretch}
            source={require('../../assets/logo.png')}
            />
    </View>
    </>
    )

const styles = StyleSheet.create({ 
    stretch:{ 
        alignSelf:'center',
        tintColor:'#E92C81',  
    },
    container:{
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65, 
        elevation: 5,
    }
});

export default memo(Logo);