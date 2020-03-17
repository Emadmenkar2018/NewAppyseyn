import React, { memo ,useState} from 'react';
import { StyleSheet, Text, Image ,View ,TouchableOpacity } from 'react-native';
import {  Item } from 'native-base'; 
import AddMealModal from './AddMealModal'

const AddSleep = ({ sleepData,DaysData, ...props }) => {

  const [visibilty, setVisibility] = useState(false)

    return (
    <Item   style={styles.container}> 
        <View style={styles.iconcontainer}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../../assets/half-moon.png')}/>
        </View>


        <View style={styles.Textcontainer}>
          <Text  style={{color:sleepData[0]? '#E92C81':'#1D253C' ,fontSize:16, fontWeight:'bold',fontFamily:'Muli-Bold' }}>
            {sleepData[0]?  'Eklenen Uyku' : 'Uyku'}
            
          </Text>
          <Text style={styles.text}> 
            {sleepData[0]?  sleepData[0]['content'] : 'Yatakta Zaman'} 
          </Text>
        </View>

        <View style={styles.Addcontainer}>
          <TouchableOpacity  onPress={()=>{setVisibility(true) } }>
            <Image
                  style={{width: 35, height: 35}}
                  tintColor={sleepData[0]? null:'#E92C81'}
                  source={ sleepData[0]?  require('../../assets/edit.png') : require('../../assets/plus.png')}
                  />
          </TouchableOpacity> 
        </View> 

        <AddMealModal 
               DaysData = {DaysData}
              setVisibilty={visibilty}
              setClosingModal={setVisibility}
              title={'Uyku'}
              content = {sleepData[0]?  sleepData[0]['content'] : ''}
          /> 
    </Item>  
    )
   }

const styles = StyleSheet.create({ 
  container:{
    marginTop:20,
    height:100,
    width:'98%',
    backgroundColor:'#fff',
    borderRadius:10, 
    flexDirection:'row',
    justifyContent:'space-between',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65, 
    elevation: 4,
    paddingLeft:10,
    paddingRight:10,
    marginBottom:20
  },
  iconcontainer:{
    width :'20%'
  },
  Addcontainer:{
    width :'10%', 
  },
  Textcontainer:{
    flexDirection:'column',
    width:'70%'
  },
  head:{
    fontSize:16,
    fontWeight:'bold',
    color:'#1D253C',
    fontFamily:'Muli-Bold'
  },
  text:{
    fontSize:12, 
    color:'#999'
    ,fontFamily:'Muli-Bold'
  }
});

export default memo(AddSleep);