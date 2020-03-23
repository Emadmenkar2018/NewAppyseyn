import Drawer from 'react-native-drawer';
import React, {useRef,memo} from 'react';
import SideBarContent from './SideBarContent';
import {TouchableOpacity,View,Dimensions,StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'

const height = Dimensions.get('window').height  
const MySideBar = React.forwardRef((props, ref) => {  

      
    return (  

                <Drawer
                    type="overlay"
                    content={ <SideBarContent />}
                    ref = {ref}  
                    tapToClose={false}
                    openDrawerOffset={0.6} // 20% gap on the right side of drawer
                    panCloseMask={0.8}
                    closedDrawerOffset={0.00}
                    styles={ {
                        drawer: {  backgroundColor: '#fff', shadowOpacity: 0.8, shadowRadius: 3,height:'100%'},
                        main: {backgroundColor: '#000',height:'100%'},
                      }}
                    // tweenHandler={(ratio) => ({
                    //     main: { opacity:0.9 }
                    //     })}
                >
                    {props.children}
                </Drawer>  
    ); 
})



export default memo(MySideBar);