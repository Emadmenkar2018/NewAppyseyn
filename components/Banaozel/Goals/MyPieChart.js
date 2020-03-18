import React from 'react';
import { StyleSheet,   View,Text ,Dimensions,Fragment} from 'react-native';    
import { PieChart } from 'react-native-svg-charts'

  const screenWidth = Dimensions.get("window").width;
 
const MyPieChart = ({ history,data,title,currentData, ...props }) =>  {
 
  const dataGoal = [ parseInt(data), 100- parseInt(data) ]
  const dataNow = [ parseInt(currentData), 100- parseInt(currentData) ]
 
    
        const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

        const pieDataGoal = dataGoal
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))

        const pieDataNow = dataNow
        .filter(value => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))



    return( 
       
          <View style={{alignContent:'center'}}>
 
              
              <View style={{flexDirection:'row',alignItems:'center',alignContent:'center',justifyContent:'center',marginBottom:40}}>
                  <View style={{alignItems:'center'}}>
                    <Text style={{marginRight:20,fontFamily:'Muli-Bold',fontWeight:'600',fontSize:18}}>{title} Hedefi</Text>
                    <Text style={{marginRight:20,fontFamily:'Muli-Bold',fontWeight:'600',fontSize:18}}>{data}%</Text>
                  </View>

                  <View style={{backgroundColor:'transparent',width:screenWidth/3,height:screenWidth/3}}>
                      <PieChart
                          style={ { height: '100%',width:'100%' } }
                          data={ pieDataGoal }
                      />
                  </View> 
              </View>
 
                    <View style={{flexDirection:'row',alignItems:'center',alignContent:'center',justifyContent:'center'}}> 
                        <View style={{alignItems:'center'}}>
                            <Text style={{marginRight:20,fontFamily:'Muli-Bold',fontWeight:'600',fontSize:18}}>{title ==='Yağ'? 'Yağ Oranınız' : title ==='Su' ? 'Su Oranınız' : title ==='Kas' ? 'Kas Oranınız' : 'Kilonuz' }</Text>
                            <Text style={{marginRight:20,fontFamily:'Muli-Bold',fontWeight:'600',fontSize:18}}>{currentData}%</Text>
                        </View>

                        <View style={{backgroundColor:'transparent',width:screenWidth/3,height:screenWidth/3}}>
                            <PieChart
                                style={ { height: '100%',width:'100%' } }
                                data={ pieDataNow }
                            />
                        </View>
                    </View>
          </View> 
        
    
    )
  }
  
export default MyPieChart;

const styles = StyleSheet.create({ 

  });