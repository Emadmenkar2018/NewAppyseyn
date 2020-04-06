import React from 'react';
import { StyleSheet,   View,Text ,Dimensions,TouchableHighlight} from 'react-native';    
import  MyPieChart  from '../../../../components/Banaozel/Goals/MyPieChart'

  const screenWidth = Dimensions.get("window").width;
 
    const KiloGoalScreen = ({ history ,...props }) =>  {
      let data  =props.data.kilo_goal ? props.data.kilo_goal : '' 
      let current  = props.currentData.kilo_current ?  props.currentData.kilo_current  : ''

        return( 

            <View style={{backgroundColor:'#fff',zIndex:1,width:'100%',height:'100%'}}> 

                <View style={{alignSelf:'center',backgroundColor:'transparent',alignItems:'center',alignContent:'center' }}>
                
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',width:'100%'}}>
                    <Text style={{marginRight:20,fontFamily:'Merienda-Regular',fontWeight:'600',fontSize:18}}>Kilo Hedefi</Text>
                    <TouchableHighlight
                      style = {styles.circle1}
                      underlayColor = '#ccc'   >
                      <Text>{data.length >0   ?  data[0].content :''} Kg</Text>
                    </TouchableHighlight>
                  </View>


                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',width:'100%'}}>
                    <Text style={{marginRight:20,fontFamily:'Merienda-Regular',fontWeight:'600',fontSize:18}}>Kilonuz</Text>
                    <TouchableHighlight
                      style = { styles.circle2}
                      underlayColor = '#ccc'   >
                      <Text> {current  ? current.content : ''} Kg</Text>
                    </TouchableHighlight>
                  </View>
                    {/* <MyPieChart
                      title={'Kilo'}
                      data={data.length >0   ?  data[0].content :''}
                      currentData= {current  ? current.content : ''}
                    /> */}

                    <Text style={{marginVertical:5}}>Not: You have to work hard </Text>


                </View>
    

            </View>
    
        )
  }
  
export default KiloGoalScreen;

const styles = StyleSheet.create({ 
  circle1:{
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').width * 0.35,
    backgroundColor:'#fff',
    borderWidth:2,
    borderColor:'#4d961d',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:6
  },
  circle2:{
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').width * 0.35,
    backgroundColor:'#fff',
    borderWidth:2,
    borderColor:'#faa739',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:6
  }
  });