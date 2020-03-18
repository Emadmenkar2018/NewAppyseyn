import React , {useEffect,useRef,useState} from 'react';
import {connect} from 'react-redux'
import { StyleSheet,   View ,Text} from 'react-native'; 
import MealsStack from '../../../components/Meals/MealsStack'
import DefaultBackground from '../../../components/Meals/DefaultBackground'    
import ViewPager from '@react-native-community/viewpager';
import {getTodayNumbers,sortKeys} from '../../../utils/methods'
import {mealsData} from '../../../constants/arrays'
import {_fetchMealsData} from '../../../utils/requests'
import {setUserMeals} from '../../../redux/actions/meal.actions' 
import MySideBar from '../../../components/SideMenu/MySideBar'
  
const HomeMealsScreen = ({ history, ...props }) => {  
    const myStackPager = useRef(null); 
    const myMenu = useRef(null); 
    const [index,setIndex] = useState('');
    const [meals, setMeals] =useState({})
    

    useEffect(() =>{
        myStackPager.current.setPage(6)
        console.log('omar1 ',props.user_meals)
        if (Object.keys(props.user_meals).length===0){
            console.log('omar2 ',props.user_meals)
            fetchMeals()
        }
        // renderMeals() 
        
     }, []);


     const fetchMeals=() =>{    
            _fetchMealsData().then(response =>{  
                props.setUserMeals(response.data)  
                
                
            }
            ).catch( err =>
                console.log('err',err)
            )
    } 
     
    const onPageSelected = (e) => { 
        setIndex(e.nativeEvent.position)
    }; 
     
    const _openControlPanel = () => {
        // _drawer.open()
       myMenu.current.open()
        // myMenu.current.open()
    };

    const arrange = () =>{
        return sortKeys(props.user_meals) 
    }

    let DaysPages = getTodayNumbers().map((day ,index)=> {  
        let a = arrange()   
        return(
            <View style={styles.full} key={index}> 
                <MealsStack 
                    MealsData={Object.values( props.user_meals?  props.user_meals:{})[index]}
                    DaysData = {Object.keys( props.user_meals?  props.user_meals :{})[index]}
                /> 
            </View>
            )
    }); 

    return(  

        <MySideBar
        ref={myMenu}
        > 
            <View style={{ flex:1,backgroundColor:'#fff',zIndex:0}}>

                <DefaultBackground
                    index={index}
                    openControlPanel={_openControlPanel}
                />  

                <View style={{ flex:1, backgroundColor: '#fff' , height:'100%',width:'100%' ,paddingLeft:10,paddingRight:10,zIndex:100}}>    

                    <ViewPager ref={myStackPager} onPageSelected={onPageSelected} scrollEnabled={true} transitionStyle='curl' style={styles.viewPager} initialPage={0} >
    
                        {DaysPages}  
            
                    </ViewPager> 
    

                </View>
                
            </View>
        </MySideBar>
 
    )
} 

const mapStateToProps = (state) => {
    return { 
        user_meals: state.user_meals
    }
} 

export default connect(mapStateToProps, {setUserMeals})(HomeMealsScreen);


const styles = StyleSheet.create({ 
    viewPager:{
        flex:1,
        zIndex:1,
        marginTop:-20
    }
  });