import React, { memo } from 'react';
import {
  View,
  StyleSheet,  
  Dimensions ,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'; 
import { Icon } from 'react-native-elements'  
import LinearGradient from 'react-native-linear-gradient';
import {  ProgressChart} from "react-native-chart-kit";
import { useHistory } from 'react-router-native';

const DefaultBackgroundWithChart =  ({ children, ...props  }) => {  
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  let history = useHistory();


  console.log('screenHeight',screenHeight)

  const data = {
    labels: ["Kilo", "Yağ", "Kas" ,"Su"], // optional
    data: [0.4, 0.6, 0.8,1]
  }; 


  const chartConfig={
    backgroundColor: 'transparent',
    backgroundGradientFrom: 'transparent',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: 'transparent',
    backgroundGradientToOpacity: 0,
    decimalPlaces: 2,
    color: (opacity = .1) => `rgba(255,255,255, ${opacity})`,
    style: {
      borderRadius: 16,
      backgroundColor:'transparent'
    },
  }
    
  return (
 
    <LinearGradient colors={['#2C2C5E', '#3F3164']}  style={{width: '100%', height: '35%',backgroundColor:'#fff',borderLeftColor:'#fff',paddingLeft:15,paddingRight:15,borderBottomLeftRadius:40,borderBottomRightRadius:40,zIndex:-1,overflow:'hidden'}}  > 
      <View style={{flexDirection:'row',justifyContent:'space-between' ,backgroundColor:'transparent',width:'100%',marginTop:40,zIndex:0}}>
          <TouchableOpacity onPress={()=>history.goBack()}>
            <Icon name="arrow-back" type ='material' size={35}  color='#999'   />
          </TouchableOpacity>
           
  <Text style ={{alignSelf:'center',fontSize:27,fontWeight:'bold',fontFamily:'Muli-Bold',color:'#999'}}>{props.title}</Text> 

          <TouchableOpacity onPress={()=>history.push('/Main/Store')}>
            <Image
              resizeMode={'contain'}
              style={styles.stretch}
              source={require('../../assets/addBtn.png')} 
              tintColor={'#999'}
            />
          </TouchableOpacity>
      </View>



      {/* <View style={{alignSelf:'center',backgroundColor:'transparent',marginTop:-60}}>
        <ProgressChart
          data={data}
          width={screenWidth-80}
          height={screenHeight>600 ? screenWidth/2+40 : screenWidth/2 }
          chartConfig={chartConfig}
          hideLegend={false}
          style={{backgroundColor:'transparent'}}
        />
      </View> */}
      
    </LinearGradient>  

  ) 
  }

const styles = StyleSheet.create({ 
  stretch:{ 
    height:35,
    width:45, 
},
});

export default memo(DefaultBackgroundWithChart);