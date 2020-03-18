import React from 'react';
import { StyleSheet,   View,Text ,Dimensions} from 'react-native';    
import  MyPieChart  from '../../../../components/Banaozel/Goals/MyPieChart'

  const screenWidth = Dimensions.get("window").width;
 
    const WaterGoalScreen = ({ history , ...props }) =>  {
      let data  =props.data.water_goal ? props.data.water_goal : '' 
      let current  = props.currentData.water_current ?  props.currentData.water_current  : ''

        return( 

            <View style={{backgroundColor:'#fff',zIndex:1,width:'100%',height:'100%'}}> 

                <View style={{alignSelf:'center',backgroundColor:'transparent',alignItems:'center',alignContent:'center' }}>
                    

                    <MyPieChart
                      title={'Su'}
                      // data={data.length >0  ?   data[0].content :''} 
                      // currentData= {current ? current.content : ''}
                      data={'30'}
                      currentData= {'25'}
                      
                    />

                    <Text style={{marginVertical:5}}>Not: You have to work hard </Text>

                </View>
    

            </View>
    
        )
  }
  
export default WaterGoalScreen;

const styles = StyleSheet.create({ 

  });