import React, { memo } from 'react';
import {
  View,
  StyleSheet,  
  Image,
  Text,
  Dimensions,
  ImageBackground
} from 'react-native'; 
import { Icon } from 'react-native-elements'  
import LinearGradient from 'react-native-linear-gradient';
import Calender from './Calender'
import { useHistory } from 'react-router-native';
import { TouchableOpacity } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const screenWidth= Dimensions.get("window").width // from react-native

const DefaultBackground =  ({ children,firstColor,secondColor ,...props  }) => { 
  let history = useHistory();

  return (
    <ImageBackground   source={require('../../assets/banaozel.jpg')} resizeMode={'cover'}   style={{width: '100%' ,zIndex:-1 ,flex:0.4}} >
    {/* <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={[firstColor?firstColor :'#26C8A8', secondColor? secondColor:'#26C8A8']}  style={{width: '100%',  height: (firstColor ==='#fff' &&secondColor ==='#fff')?  '15%':'35%',backgroundColor:'#fff',borderLeftColor:'#fff',paddingLeft:15,paddingRight:15,borderBottomLeftRadius:40,borderBottomRightRadius:40,zIndex:-1,overflow:'visible'}}  >  */}
    <View style={{backgroundColor:'rgba(0,0,0,.3)' ,flex:1,paddingHorizontal:15}}>
      <View style={{flexDirection:'row',justifyContent:'space-between' ,backgroundColor:'transparent',width:'100%',marginTop:40,zIndex:0}}>
          <TouchableOpacity onPress={()=>history.goBack()}>
            <Icon name="arrow-back" type ='material' size={35}  color='rgba(255,255,255,.8)'   />
          </TouchableOpacity>


          <Text style ={{alignSelf:'center',fontSize:27 ,fontFamily:'Merienda-Regular',color:'rgba(255,255,255,.8)'}}>{props.title}</Text> 

          <TouchableOpacity onPress={()=>history.push('/Main/Store')}>
            <Image
              resizeMode={'contain'}
              style={styles.stretch}
              source={require('../../assets/addBtn.png')} 
              tintColor={'rgba(255,255,255,.8)'}
            />
          </TouchableOpacity>
      </View>
 
      {/* <LineChart
      withOuterLines={true}
      withInnerLines={false} 
      withShadow={true}  
      withDots={true}   
      withVerticalLabels={true} 
      withHorizontalLabels={true}
        data={{
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
          ],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={100}
        chartConfig={{
          backgroundColor: 'transparent',
          backgroundGradientFrom: '#26C8A8',
          backgroundGradientTo: '#00BBCA',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
          style: {
            borderRadius: 16,
          },
        }}
        style={{ 
          borderRadius: 16, 
          paddingVertical:5,
          backgroundColor:'transparent', 
          borderWidth:0
        }}
      />      */}
      </View>
      </ImageBackground>
  )  
}

const styles = StyleSheet.create({ 
  stretch:{ 
    height:35,
    width:45, 
},
});

export default memo(DefaultBackground);