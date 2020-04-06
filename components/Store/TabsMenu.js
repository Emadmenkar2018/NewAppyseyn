import React ,{Component,useEffect,useState} from 'react';
import { StyleSheet, Text, Image , Dimensions} from 'react-native'; 
import ContainerStore from './ContainerStore'   
import StoreStack from './StoreStack'    
import { ScrollView } from 'react-native-gesture-handler'
import NetInfo from "@react-native-community/netinfo"; 
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view'; 

const halfheight = Dimensions.get('window').height 
  const  TabsMenu = () =>{ 
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'first', title: 'Paketler' },
      { key: 'second', title: 'Ürünler' },
    ]);

    const initialLayout = { width: Dimensions.get('window').width };
   
    const renderScene = SceneMap({
      first: StoreStack,
      second: StoreStack,
    });
     
    const renderTabBar = props => (
      <TabBar
        {...props} 
        indicatorStyle={{ backgroundColor: 'rgba(45, 52, 120,.9)' }}
        style={{ backgroundColor: 'transparent' ,borderRadius:25 ,shadowColor:'transparent'}}
        renderLabel={({ route, focused, color }) => (
          <Text style={{ color:'#1D253C'  }}>
            {route.title}
          </Text>
        )}
        // renderIcon={({ route, focused, color }) => (
        //   <Image
        //       style={{width: 30, height: 30}}
        //       source={require('../../assets/dinner.png')}/>
        // )}
      /> 
    );


    return(   
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout} 
            renderTabBar={renderTabBar}
            style={{backgroundColor:'transparent'}} 
            contentContainerStyle={{backgroundColor:'red'}}
      />
    )
} 

export default TabsMenu