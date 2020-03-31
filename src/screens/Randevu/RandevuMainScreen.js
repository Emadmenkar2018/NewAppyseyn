import React , {useState,useEffect,useRef} from 'react';
import { StyleSheet,   View,Text,Dimensions } from 'react-native'; 
import Background from '../../../components/Randevu/RandevuBackground'   
import MyCalender from '../../../components/Randevu/MyCalender'    
import CreateRandevuModal from '../../../components/Randevu/CreateRandevuModal' 
import {_fetchmyRandevuData} from '../../../utils/requests'
import {_getDates,_extractDays,_extractDays2,_getDates2} from '../../../utils/methods'
import MySideBar from '../../../components/SideMenu/MySideBar'

const width = Dimensions.get('window').width /2 


const  RandevuMainScreen = ({ history, ...props }) => { 

  const [myradevus, setmyRandevus] =useState({})
  const [render, setRender] =useState(false) 
  const [pressed, setPressed] =useState(false) //here
  const [myitem,setMyitem] = useState('')
  let randevudays=_extractDays(myradevus) 
  let showrandevudays=_extractDays2(myradevus)   
  const myMenu = useRef(null);  
   

    useEffect(() => {
      fetchmyRandevus()   
    }
      , []);//why ?! hmmmm


      const fetchmyRandevus=() =>{    
        _fetchmyRandevuData().then(response =>{   
            setmyRandevus(response.bookingTimes)    
        }
        ).catch( err =>
            console.log('err',err)
        )
    }  

    const _openControlPanel = () => { 
       myMenu.current.open() 
    };

    const _snaptoNearest = () => {
        console.log('sadad')
        return true;
    }

    
    return(  
    <MySideBar
        ref={myMenu}
        {...props}
        > 
        <View style={{ flex:1}}> 
            <View style={{ flex:1, backgroundColor: '#fff' , height:'100%',width:'100%'  ,alignContent:'center'}}>    
                 
                    <MyCalender 
                        MyRandevus = {myradevus}
                        openControlPanel={_openControlPanel}
                        setMainPAgeIndex={ props.setMainPAgeIndex} 
                        setRender={setRender}
                        randevudays={randevudays}
                        showrandevudays={showrandevudays}
                    /> 

            </View>

            {myradevus.length > 0 &&
                <Background
                    MyRandevus = {myradevus} //yes which contains the button yes functional the problem is that im lost :( first of all it doesent rerender and call 
                />
            }
            <CreateRandevuModal/>

        </View>
     </MySideBar>
    )
} 

export default RandevuMainScreen;

const styles = StyleSheet.create({ 

  });