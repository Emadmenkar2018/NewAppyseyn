import React from 'react';
import { StyleSheet,   View,Text ,Dimensions} from 'react-native';    
import  MyPieChart  from '../../../../components/Banaozel/Goals/MyPieChart'

  const screenWidth = Dimensions.get("window").width;
 
    const KiloGoalScreen = ({ history ,...props }) =>  {
      let data  =props.data.kilo_goal ? props.data.kilo_goal : '' 
      let current  = props.currentData.kilo_current ?  props.currentData.kilo_current  : ''

        return( 

            <View style={{backgroundColor:'#fff',zIndex:1,width:'100%',height:'100%'}}> 

                <View style={{alignSelf:'center',backgroundColor:'transparent',alignItems:'center',alignContent:'center' }}>
                    

                    <MyPieChart
                      title={'Kilo'}
                      data={data.length >0   ?  data[0].content :''}
                      currentData= {current  ? current.content : ''}
                    />

                    <Text style={{marginVertical:5}}>Not: You have to work hard </Text>


                </View>
    

            </View>
    
        )
  }
  
export default KiloGoalScreen;

const styles = StyleSheet.create({ 

  });