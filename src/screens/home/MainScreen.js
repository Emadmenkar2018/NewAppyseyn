import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation'
import React, { memo, useEffect ,useRef,useState} from 'react';
import {connect} from 'react-redux'
import { View ,StyleSheet ,Text,TouchableOpacity } from 'react-native'; 
import { Button } from 'native-base'; 
import LinearGradient from 'react-native-linear-gradient';
import BotttomTab from '../../../components/mainScreen/BotttomTab'
import ViewPager from '@react-native-community/viewpager';
import HomeMealsScreen from '../meals/HomeMealsScreen'
import BanaOzelScreen from '../banaOzel/BanaOzelScreen'
import NutritionProgramScreen from '../program/NutritionProgramScreen'
import MainChatScreen from '../chat/MainChatScreen'
import RandevuMainScreen from '../Randevu/RandevuMainScreen'
import { useHistory } from 'react-router-native'; 
import {setMainPAgeIndex} from '../../../redux/actions/user.actions' 
import PushController from '../../../components/Push/PushController'


export const MainScreen = ({videocallcoming,Calldetail,  ...props }) => {  
    const myViewPager = useRef(null);
    let history = useHistory();   

    if (videocallcoming  ){   
        history.push({pathname : '/user/RecieveVideoCall',
            state: {Calldetail}
        } ) 
        // props.setVideoCallComing({false})
    }  
    const [pageIndex, setPageIndex] = useState(props.user.page_index && props.user.page_index !==0 ? props.user.page_index : 3) 
 
    useEffect(() =>{
        myViewPager.current.setPage(pageIndex)  
    }, []);
 
    const getCurrentpage=(index) =>{
        myViewPager.current.setPage(index) 
        setPageIndex(index)
    } 
    return (
      <View style={{ flex: 1,backgroundColor:'#F6F7FB' ,zIndex:0 }}>  
  
        
        <TouchableOpacity activeOpacity={1} style={styles.centerBtn} onPress={()=>history.push('/Main/Chat')}>
            <LinearGradient colors={['#26C8A8', '#00BBCA']}  style={styles.centerBtn2}>
            </LinearGradient> 
        </TouchableOpacity>
          

        <ViewPager ref={myViewPager} scrollEnabled={false} transitionStyle='curl' style={styles.viewPager} initialPage={0} >
                    
            <View style={styles.full} key="4">
                {pageIndex ===0 && 
                    <NutritionProgramScreen
                        {...props} 
                    />
                } 
            </View>

            <View style={styles.full} key="2">
                {pageIndex ===1 && 
                    <RandevuMainScreen
                        {...props} 
                    />
                }
            </View>

            <View style={styles.full} key="3">
                {pageIndex ===2 && 
                    <BanaOzelScreen
                        {...props} 
                    />
                }
            </View>

            <View style={styles.full} key="1">
                {pageIndex ===3 && 
                    <HomeMealsScreen
                     {...props} 
                 />
                }
                
            </View>

        </ViewPager> 

        <BotttomTab
            getCurrentpage={getCurrentpage}
            pageIndex={pageIndex}
        />

        
      </View>
      
    ) 
} 

const mapStateToProps = (state) => {
    return { 
        user: state.user
    }
} 

export default connect(mapStateToProps, {setMainPAgeIndex})(MainScreen);

const styles = StyleSheet.create({ 
    viewPager:{
        flex:1
    },  
    full:{
        backgroundColor:'#efefef'
    },
    centerBtn:{
        position:'absolute',
        bottom:20,
        width:50,
        height:50,
        borderRadius:40,
        backgroundColor:'rgba(239, 239, 239,.9)',
        justifyContent:'center',
        // borderColor:'transparent',
        alignSelf:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65, 
        elevation: 8,
        zIndex:1
    },
    centerBtn2:{  
        width:30,
        height:30,
        borderRadius:40,
        backgroundColor:'#73d1c9',
        alignSelf:'center', 
    },
}) 