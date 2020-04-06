import React , {useEffect,useRef,useState} from 'react'; 
import { StyleSheet,   View ,Text,TouchableOpacity,BackHandler,Image} from 'react-native';   
import {_fetchMealsData} from '../../../utils/requests' 
import StoreStack from '../../../components/Store/StoreStack'
import TabsMenu from '../../../components/Store/TabsMenu' 
import {Icon } from 'react-native-elements' 
import { useHistory } from 'react-router-native'; 
import Alert from '../../../components/Login/Alert'
import {_fetchProductsFromApi} from '../../../utils/requests'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";

const MainStoreScreen = ({  ...props }) => {  
 
    let history = useHistory(); 
    const [alertMessege, setAlertMessege] = useState(''); 
    const showAlert = useRef(null); 
    const [ productsData, setProductsData] = useState('') 


    useEffect(() =>{ 
        fetchProducts()
        BackHandler.addEventListener("hardwareBackPress", backButtonHandler);

        return () => {
        BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
        };
    }, [backButtonHandler]);


    const fetchProducts = ()=>{ 
            _fetchProductsFromApi().then(response =>{ 
              setProductsData( response.data ) 
            }).catch(err => {
              console.log('err',err)
            })
          }  
         

    const backButtonHandler = () => {
        history.goBack()
        return true;
    } 
    
    if (alertMessege.length > 0){
        showAlert.current.open()
    }

    return(  
        <View style={{ flex:1,backgroundColor:'#fff',zIndex:0,marginVertical:15,paddingHorizontal:15}}>

                <View style={{width:'100%' ,alignItems:'center',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20}}>
                    <TouchableOpacity style={{backgroundColor:'transparent'}} onPress={()=>history.goBack()}>
                        <Icon name="arrow-back" type ='material' size={35}    color='#1D253C'/>
                    </TouchableOpacity>
                    
                    <Text style={{alignSelf:'center',fontSize:30,textAlign:'center',marginLeft:-10,fontFamily:'Merienda-Regular' ,fontSize:responsiveScreenFontSize(2.5)}}>Store</Text>

                   {/* <TouchableOpacity style={{backgroundColor:'transparent'}} onPress={()=>history.goBack()}>
                        <Icon name="arrow-back" type ='material' size={35}    color='#1D253C'/>
                    </TouchableOpacity>  */}
                    <Image  />  
                </View>
                
                  <StoreStack
                    setAlertMessege={setAlertMessege}
                />  
                {/* <TabsMenu/> */}
                
                <Alert
                    ref={showAlert}
                    text={alertMessege} 
                />
                
        </View>
 
    )
} 

const mapStateToProps = (state) => {
    return { 
        user_meals: state.user_meals
    }
} 

export default MainStoreScreen;


const styles = StyleSheet.create({ 
    viewPager:{
        flex:1,
        zIndex:1
    }
  });