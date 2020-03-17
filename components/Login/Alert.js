import React, { useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import AlertPro from "react-native-alert-pro";
 

const Alert = React.forwardRef((props, ref) => { 
    return (
        <AlertPro  
            ref={ref}
            onConfirm={() => ref.current.close()}
            onCancel ={() => ref.current.close()}
            title="Uyarı"
            message={props.text}
            textCancel="Iptal"
            textConfirm="Tamam"
            customStyles={{
            mask: {
                backgroundColor: "transparent"
            },
            container: {
                backgroundColor:'rgba(54, 43, 109,.9)',
                borderWidth: 1,
                borderColor: "transparent",
                shadowColor: "#000000",
                shadowOpacity: 0.1,
                shadowRadius: 10,
                borderRadius:20
            },
            title: {
                width:'100%',
                color:'#E92C81'
            },
            message:{
                color:'#fff'
            },
            buttonCancel: {
                backgroundColor: "transparent"
            },
            buttonConfirm: {
                backgroundColor: "#ffa31a"
            },
            textCancel:{
                // backgroundColor:''
            },
            textConfirm:{
                color : '#1D253C'
            }
            }}
        />
    ) 
})

const styles = StyleSheet.create({ 
    stretch:{ 
        height:65,
        width:80,
        alignSelf:'center', 
    },
});

export default Alert;