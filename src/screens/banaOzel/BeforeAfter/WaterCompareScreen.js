import React from 'react';
import { StyleSheet,   View,Text ,Dimensions} from 'react-native';    
import  MyPieChart  from '../../../../components/Banaozel/Goals/MyPieChart'

  const screenWidth = Dimensions.get("window").width/3;
 
    const WaterCompareScreen = ({ history , ...props }) =>  {
      let data  =props.data.water_beforeafter ? props.data.water_beforeafter : '' 

        return( 

            <View style={{backgroundColor:'#fff',zIndex:1,width:'100%',height:'100%'}}> 

              <View style={{flexDirection:'row',backgroundColor:'transparent',justifyContent:'space-around',alignItems:'center',alignContent:'center'  }}>
                    
                    <View style={{alignSelf:'center' ,flexDirection:'column',alignContent:'center',alignItems:'center',height:'100%',marginTop:screenWidth}}>
                      <Text style={styles.title}>Sonra</Text>
                      <Text style={styles.data}>{data[0]? data[0].content:''}</Text>
                      <Text style={styles.date}>{data[0]? data[0].date:''}</Text>
                   </View>


                  <View style={{alignSelf:'center',flexDirection:'column',alignContent:'center',alignItems:'center',height:'100%',marginTop:screenWidth}}> 
                      <Text style={styles.title}>Önce</Text> 
                      <Text style={styles.data}>{data[1]? data[1].content:''}</Text>
                      <Text style={styles.date}>{data[1]? data[1].date:''}</Text>
                  </View>
                  

              </View>
    

            </View>
    
        )
  }
  
export default WaterCompareScreen;

const styles = StyleSheet.create({ 
  data:{
    marginVertical:10,
    fontSize:30,
    alignSelf:'center', 
    textAlign:'center',
    color:'#1D253C'
  },
  title:{
    alignSelf:'center',
    textAlign:'center', 
    color:'#E92C81',
    fontSize:34
  },
  date:{
    alignSelf:'center',
    textAlign:'center', 
    color:'#1D253C',
    fontSize:24
  }
  });