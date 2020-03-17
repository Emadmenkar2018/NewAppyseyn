import React , {useRef,useState,useEffect} from 'react';
import { StyleSheet,   View,Text ,Dimensions} from 'react-native';
import StackScreen from '../../../components/Banaozel/StackScreen' 
import DefaultBackgroundWithChart from '../../../components/Banaozel/DefaultBackgroundWithChart'    
import ViewPager from '@react-native-community/viewpager';
import GoalsStack from '../../../components/Banaozel/Goals/GoalsStack' 
import FatGoalScreen from './Goals/FatGoalScreen' 
import KiloGoalScreen from './Goals/KiloGoalScreen' 
import MuscleGoalScreen from './Goals/MuscleGoalScreen' 
import WaterGoalScreen from './Goals/WaterGoalScreen' 
import {_getUserGoalsApi,_getUserCurrentApi} from '../../../utils/requests'

const  GoalsSreen = ({ history, ...props }) => {

   

    const myViewPager = useRef(null);
    const [index,setIndex] = useState('');
    const [page,setPage] = useState('');
    const [goals,setGoals] = useState('');
    const [currents,setCurrents] = useState('');
    
   
    useEffect(() =>{
        myViewPager.current.setPage(0)
        getUserGoals()
        getUserCurrentState()
    } , []);


    const getUserGoals=() =>{
        _getUserGoalsApi().then(response =>{  
            setGoals(response.data)

        }
        ).catch( err =>
            console.log('err',err)
        )
    }

    const getUserCurrentState = () =>{
        _getUserCurrentApi().then(response =>{  
            setCurrents(response.data) 
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
 

    return( 

        <View style={{ flex:1,backgroundColor:'#fff',zIndex:0}}>

            <DefaultBackgroundWithChart/>  

            <View style={{ flex:1, backgroundColor: '#fff' , height:'100%',width:'100%' ,paddingLeft:10,paddingRight:10,zIndex:100}}>   


                <GoalsStack
                    index={index}
                    getCurrentpage={getCurrentpage}
                />

                <ViewPager ref={myViewPager} scrollEnabled={true} transitionStyle='curl' style={styles.viewPager} initialPage={0}  onPageSelected={onPageSelected} >
                    

                   
                    <View  style={styles.full}   key="4">
                        <KiloGoalScreen
                            data = {goals ? goals :{}}
                            currentData= {currents ? currents : {}}
                        />
                    </View>
        
                    <View style={styles.full} key="2"> 
                        <FatGoalScreen
                            data = {goals ? goals :{}}
                            currentData= {currents ? currents : {}}
                        />
                    </View>
        
                    <View style={styles.full} key="3"> 
                        <MuscleGoalScreen
                            data = {goals  ? goals :{}}
                            currentData= {currents ? currents : {}}
                        />
                    </View>
        
                    <View style={styles.full} key="1">
                        <WaterGoalScreen
                            data = {goals ? goals :{}}
                            currentData= {currents ? currents : {}}
                        />
                    </View>
        
                </ViewPager> 

            </View>
            
        </View>
 
    )
}     

export default GoalsSreen;

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