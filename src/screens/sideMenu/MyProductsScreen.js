import React , {useEffect,useRef,useState} from 'react'; 
import { StyleSheet,   View ,Text,TouchableOpacity,BackHandler} from 'react-native';   
import {_fetchMealsData} from '../../../utils/requests' 
import MyStoreStack from '../../../components/SideMenu/MyStoreStack'
import {Icon } from 'react-native-elements' 
import { useHistory } from 'react-router-native'; 
import {
    responsiveHeight,
    responsiveWidth,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";

const MyProductsScreen = ({  ...props }) => {  

    let history = useHistory(); 

    useEffect(() =>{ 
        BackHandler.addEventListener("hardwareBackPress", backButtonHandler);

        return () => {
        BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
        };
    }, [backButtonHandler]);

    const backButtonHandler = () => {
        history.goBack()
        return true;
    } 
    


    return(  
        <View style={{ flex:1,backgroundColor:'#fff',zIndex:0,marginVertical:15,paddingHorizontal:15}}>

                <TouchableOpacity onPress={()=>history.goBack()}>
                    <Icon name="arrow-back" type ='material' size={35} containerStyle={{alignSelf:'flex-start'}}  color='#1D253C'/>
                </TouchableOpacity>
                

                <Text style={{alignSelf:'center',fontSize:responsiveScreenFontSize(2.5),fontFamily:'Merienda-Regular'}}>Benim Ürünlerim</Text>
                
                <MyStoreStack/>
            
        </View>
 
    )
} 

const mapStateToProps = (state) => {
    return { 
        user_meals: state.user_meals
    }
} 

export default MyProductsScreen;


const styles = StyleSheet.create({ 
    viewPager:{
        flex:1,
        zIndex:1
    }
  });