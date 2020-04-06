import React , {useRef,useState,useEffect} from 'react';
import { StyleSheet,   View,Text ,Dimensions,BackHandler} from 'react-native';
import StackScreen from '../../../components/Banaozel/StackScreen' 
import DefaultBackgroundWithChart from '../../../components/Banaozel/DefaultBackgroundWithChart'    
import ViewPager from '@react-native-community/viewpager';
import GoalsStack from '../../../components/Banaozel/Goals/GoalsStack' 
import FatCompareScreen from './BeforeAfter/FatCompareScreen' 
import KiloCompareScreen from './BeforeAfter/KiloCompareScreen' 
import MuscleCompareScreen from './BeforeAfter/MuscleCompareScreen' 
import WaterCompareScreen from './BeforeAfter/WaterCompareScreen' 
import {_getUserBeforeAfterApi} from '../../../utils/requests'

const  BeforeAfterScreen = ({ history, ...props }) => {

   

    const myViewPager = useRef(null);
    const [index,setIndex] = useState(''); 
    const [beforeafter,setBeforeAfter] = useState(''); 
    
   
    useEffect(() =>{
        myViewPager.current.setPage(0)
        getUserBeforeAfter()
        BackHandler.addEventListener("hardwareBackPress", backButtonHandler);

        return () => {
        BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
        };
    }, [backButtonHandler]);

    const backButtonHandler = () => {
        history.goBack()
        return true;
    } 

    const getUserBeforeAfter=() =>{
        _getUserBeforeAfterApi().then(response =>{  
            setBeforeAfter(response.data) 
        }
        ).catch( err =>
            console.log('err',err)
        )
    }
 

    const getCurrentpage=(index) =>{
        myViewPager.current.setPage(index) 
    }


    const onPageSelected = (e) => { 
        setIndex(e.nativeEvent.position) 
    }; 
 
    console.log('1',beforeafter)
    return( 

        <View style={{ flex:1,backgroundColor:'#fff',zIndex:0}}>

            <DefaultBackgroundWithChart
                title={'Önce - Sonra'}
            />  

            <View style={{ flex:1, backgroundColor: '#fff' , height:'100%',width:'100%' ,paddingLeft:10,paddingRight:10,zIndex:100}}>   


                <GoalsStack
                    index={index}
                    getCurrentpage={getCurrentpage}
                />

                <ViewPager ref={myViewPager} scrollEnabled={true} transitionStyle='curl' style={styles.viewPager} initialPage={0}  onPageSelected={onPageSelected} >
                    

                   
                    <View  style={styles.full}   key="4">
                        
                        {Object.keys(beforeafter).length > 0  &&
                       
                            <KiloCompareScreen 
                                data = {beforeafter} 
                            />
                        }
                    </View>
        
                    <View style={styles.full} key="2"> 

                        {Object.keys(beforeafter).length > 0  &&
                            <FatCompareScreen 
                                data = {beforeafter} 
                            />
                        }
                    </View>
        
                    <View style={styles.full} key="3">

                        {Object.keys(beforeafter).length > 0  && 
                            <MuscleCompareScreen 
                                data = {beforeafter } 
                            />
                        }
                    </View>
        
                    <View style={styles.full} key="1">

                        {Object.keys(beforeafter).length > 0  && 
                            <WaterCompareScreen 
                                data = {beforeafter} 
                            />
                        }
                    </View>
        
                </ViewPager> 

            </View>
            
        </View>
 
    )
}     

export default BeforeAfterScreen;

const styles = StyleSheet.create({ 
    viewPager:{
        flex:1,
        width:'90%',
        alignSelf:'center'
        
    },  
    full:{
        flex:1,
        backgroundColor:'transparent',
        width:'100%',
        alignSelf:'center',
        alignContent:'center',
        alignItems:'center',   
        zIndex:0
    }
  });