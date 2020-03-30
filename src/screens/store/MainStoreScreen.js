import React , {useEffect,useRef,useState} from 'react'; 
import { StyleSheet,   View ,Text,TouchableOpacity} from 'react-native';   
import {_fetchMealsData} from '../../../utils/requests' 
import StoreStack from '../../../components/Store/StoreStack'
import {Icon } from 'react-native-elements' 
import { useHistory } from 'react-router-native'; 
import Alert from '../../../components/Login/Alert'
const MainStoreScreen = ({  ...props }) => {  

    let history = useHistory(); 
    const [alertMessege, setAlertMessege] = useState(''); 
    const showAlert = useRef(null); 

    if (alertMessege.length > 0){
        showAlert.current.open()
    }

    return(  
        <View style={{ flex:1,backgroundColor:'#fff',zIndex:0,marginVertical:15,paddingHorizontal:15}}>

                <TouchableOpacity onPress={()=>history.goBack()}>
                    <Icon name="arrow-back" type ='material' size={35} containerStyle={{alignSelf:'flex-start'}}  color='#1D253C'/>
                </TouchableOpacity>
                

                <Text style={{alignSelf:'center',fontSize:30}}>Ürünlerimiz ve Paketlerimiz</Text>
                
                <StoreStack
                setAlertMessege={setAlertMessege}
                />

                
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