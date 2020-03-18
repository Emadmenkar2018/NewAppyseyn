import React from 'react';
import { StyleSheet,   View,Text ,Dimensions} from 'react-native';    
import  MyPieChart  from '../../../../components/Banaozel/Goals/MyPieChart'

  const screenWidth = Dimensions.get("window").width;
 
    const MuscleGoalScreen = ({ history , ...props }) =>  {
      let data  =props.data.muscle_goal ? props.data.muscle_goal : '' 
      let current  = props.currentData.muscle_current ?  props.currentData.muscle_current  : ''

        return( 

            <View style={{backgroundColor:'#fff',zIndex:1,width:'100%',height:'100%'}}> 

                <View style={{alignSelf:'center',backgroundColor:'transparent',alignItems:'center',alignContent:'center' }}>
                    

                    <MyPieChart
                     title={'Kas'}
                    //  data={data.length >0  ?  data[0].content :''}
                    //  currentData= {current ? current.content : ''}
                     data={'45%'}
                     currentData= {'38%'}
                    />

                    <Text style={{marginVertical:5}}>Not: You have to work hard </Text>

                </View>
    

            </View>
    
        )
  }
  
export default MuscleGoalScreen;

const styles = StyleSheet.create({ 

  });