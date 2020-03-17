import React, { memo } from 'react';
import { StyleSheet, Text, Image  , Dimensions} from 'react-native'; 

const halfheight = Dimensions.get('window').height /2 

const MyIcon = ({ label, errorText,inputText,type, ...props }) => (
    <>
    <Image
          style={styles.stretch}
          source={require('../../assets/icon.png')}
        />
    </>
    )

const styles = StyleSheet.create({ 
    stretch:{ 
        height:65,
        width:80,
        alignSelf:'center', 
    },
});

export default memo(MyIcon);