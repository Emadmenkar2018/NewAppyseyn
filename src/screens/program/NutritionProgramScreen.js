import React , {useEffect,useRef,useState} from 'react';
import {connect} from 'react-redux'
import { StyleSheet,   View ,Text} from 'react-native';  
import MealsStack from '../../../components/Program/MealsStack'
import DefaultBackground from '../../../components/Program/DefaultBackground'    
import ViewPager from '@react-native-community/viewpager';
import {getTodayNumbers2,sortKeys} from '../../../utils/methods'
import {mealsData} from '../../../constants/arrays'
import {_fetchProgramData} from '../../../utils/requests'
import {setUserMeals} from '../../../redux/actions/meal.actions' 
import MySideBar from '../../../components/SideMenu/MySideBar'
import SideBarContent from '../../../components/SideMenu/SideBarContent';
import Drawer from 'react-native-drawer';
import NetInfo from "@react-native-community/netinfo";
import Alert from '../../../components/Login/Alert'

const NutritionProgramScreen = ({ history, ...props }) => {  
    const myStackPager = useRef(null); 
    const myMenu = useRef(null); 
    const showAlert = useRef(null); 
    const [index,setIndex] = useState('');
    const [program, setProgram] =useState({})
    const [alertMessege, setAlertMessege] = useState(''); 

    useEffect(() =>{
        myStackPager.current.setPage(0)
        fetchProgram()
        // renderMeals()
        
     }, []);


     const fetchProgram=() =>{   
        NetInfo.fetch().then(state => {
            if (state.isConnected) { 
                _fetchProgramData().then(response =>{  
                    setProgram(response.data)  
                }
                ).catch( err =>
                    console.log('err',err)
                )
            }
            else {
                setAlertMessege('Internet erisim yok') 
                showAlert.current.open()
              } 
            });  
            
    } 
     
    const onPageSelected = (e) => { 
        setIndex(e.nativeEvent.position)
    }; 
     

    const _openControlPanel = () => {
        // _drawer.open()
       myMenu.current.open()
        // myMenu.current.open()
    };

    const _closeControlPanel = () => {
        // _drawer.open()
        // console.log('Hi',myMenu.current.close())
        // myMenu.current.open()
    };
 
    

    const arrange = () =>{
        return sortKeys(props.user_meals) 
    }

    let DaysPages = getTodayNumbers2().map((day ,index)=> {    
        return(
            <View style={styles.full} key={index}> 
                <MealsStack 
                    MealsData= {program?  program[index]:{}}
                /> 
            </View>
            )
    }); 

    return(  

        <MySideBar
            ref={myMenu}
            {...props}
        > 
                
            <View style={{ flex:1,backgroundColor:'#fff',zIndex:0}}>
            <DefaultBackground
                    index={index}
                    firstColor={'#E92C81'}
                    secondColor={'#e82c6e'}
                    openControlPanel={_openControlPanel}
                    title={'Beslenme Programı'}
                    setMainPAgeIndex={ props.setMainPAgeIndex}
                />  

                <View style={{ flex:1, backgroundColor: '#fff' , height:'100%',width:'100%' ,paddingLeft:10,paddingRight:10,zIndex:0}}>    

                    <ViewPager ref={myStackPager} onPageSelected={onPageSelected} scrollEnabled={true} transitionStyle='curl' style={styles.viewPager} initialPage={0} >
    
                        {DaysPages}  
            
                    </ViewPager> 
    

                </View> 


                <Alert
                ref={showAlert}
                text={alertMessege} 
                 />
            </View> 
        </MySideBar>

        // <Drawer
        // type="displace"
        // content={ <SideBarContent />}
        // ref = {myMenu}  
        // tapToClose={true}
        // openDrawerOffset={0.6} // 20% gap on the right side of drawer
        // panCloseMask={0.8}
        // closedDrawerOffset={0.01}
        // styles={ {
        //     drawer: {  backgroundColor: '#efefef', shadowOpacity: 0.8, shadowRadius: 3,height:'100%'},
        //     main: {backgroundColor: '#000',height:'100%'},
        //   }}
        // tweenHandler={(ratio) => ({
        //     main: { opacity:(2-ratio)/2 }
        //     })}
        // > 
              
        // <View style={{ flex:1,backgroundColor:'#fff',zIndex:0}}>
 
            

        //     <DefaultBackground
        //         index={index}
        //         firstColor={'#E92C81'}
        //         secondColor={'#e82c6e'}
        //         openControlPanel={_openControlPanel}
        //     />  

        //     <View style={{ flex:1, backgroundColor: '#fff' , height:'100%',width:'100%' ,paddingLeft:10,paddingRight:10,zIndex:0}}>    

        //         <ViewPager ref={myStackPager} onPageSelected={onPageSelected} scrollEnabled={true} transitionStyle='curl' style={styles.viewPager} initialPage={0} >
  
        //             {DaysPages}  
        
        //         </ViewPager> 
 

        //     </View> 

        // </View>
        // </Drawer>
    )
} 

const mapStateToProps = (state) => {
    return { 
        user_meals: state.user_meals
    }
} 

export default connect(mapStateToProps, {setUserMeals})(NutritionProgramScreen);


const styles = StyleSheet.create({ 
    viewPager:{
        flex:1,
        zIndex:1,
        marginTop:-20
    }
  });