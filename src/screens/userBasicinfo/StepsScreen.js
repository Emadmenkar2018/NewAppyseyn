import React, { useRef , useState  } from 'react';
import {  StyleSheet ,View,  } from 'react-native';  
import ThreeGoalsScreen from './ThreeGoalsScreen'; 
import WhatsGenderScreen from './WhatsGenderScreen';
import WhatsWeightScreen from './WhatsWeightScreen';
import ViewPager from '@react-native-community/viewpager';
import { _updateProfileData } from '../../../utils/requests'; 

const StepsScreen = ({ history, ...props }) => {   

    const [currentPosition,setCurrentPosition] = useState(0); 
    const [sex,setSex] = useState(''); 
    const [goals,setGoals] = useState([]); 
    const [mesurement,setMesurement] = useState({}); 
    const myViewPager = useRef(null);

    const navigator =(index,choosen) =>{
        myViewPager.current.setPage(index) 
        setSex(choosen)
    }

    const getMesuremetns = (mesurementObject) =>{  
        setMesurement(mesurementObject)
        myViewPager.current.setPage(2) 
    }

    const getGaols = (goalsArray) =>{
        history.push('/Main')
        // let handedGoals = goalsArray;
        // setGoals(goalsArray) 
        // _updateProfile(handedGoals)
    }

    const _updateProfile =(handedGoals)=>{ 
        let bodyFormData = new FormData();  
        bodyFormData.append('sex', sex);
        bodyFormData.append('goals', handedGoals.toString());
        bodyFormData.append('weight', mesurement.kg); 
        bodyFormData.append('height', mesurement.height); 
        console.log('bodyFormData',bodyFormData)
        _updateProfileData(bodyFormData).then(response =>
            console.log('response',response) 
        ).catch( err =>
            console.log('err',err)
        )
    }

    
    return (
        <View style={{flex:1,height:'100%',width:'100%',backgroundColor:'#fff'}}> 
                <ViewPager ref={myViewPager} scrollEnabled={false} transitionStyle='curl' style={styles.viewPager} initialPage={0} onPageSelected = {(e) => setCurrentPosition(e.nativeEvent.position)}>
                    
                    <View key="1">
                        <WhatsGenderScreen
                            currentPosition = {currentPosition}
                            navigator={navigator}
                        />
                    </View>

                    <View key="2">
                        <WhatsWeightScreen
                            currentPosition = {currentPosition} 
                            getMesuremetns={getMesuremetns}
                            // navigator={navigator}
                        />
                    </View> 

                    <View key="3">
                        <ThreeGoalsScreen
                            currentPosition = {currentPosition}
                            getGaols ={getGaols}
                            // navigator={navigator}
                        />
                    </View>  
                </ViewPager>   

        </View>
    )
}
export default StepsScreen;

const styles = StyleSheet.create({ 
      viewPager:{
          flex:1
      }, 
      button:{
        marginVertical:20,
        paddingHorizontal:20,
        borderWidth:0.5,
        borderColor:'rgba(255,255,255,.3)',
        width:'80%',  
        height:40,
        borderRadius:20,
        alignSelf:'center',
        backgroundColor:'rgba(233, 44, 129,1)'
      }, 

}) 
