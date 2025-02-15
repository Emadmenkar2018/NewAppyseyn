import React, { memo  ,useState} from 'react';
import { StyleSheet, Text, Image ,View ,TouchableOpacity } from 'react-native';
import { Input, Item, Label  , Icon } from 'native-base';  

const LunchContainer = ({ lunchData, ...props }) => {


  const [visibilty, setVisibility] = useState(false)

    return (
    <Item   style={styles.container}> 
        <View style={styles.iconcontainer}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../../assets/corn.png')}/>
        </View>


        <View style={styles.Textcontainer}>

          <Text style={{color:lunchData.length >0 ? '#E92C81':'#1D253C' ,fontSize:16 ,fontFamily:'Merienda-Regular' }}> 
            {lunchData.length >0 ?  'Öğle Yemeği' : 'Öğle Yemeği Girilmemiştir'}
          </Text>

          <Text style={styles.text}> 
            {lunchData.length >0 ?  lunchData  : 'Önerilen 760-960 Kal.'} 
          </Text>

        </View>

         

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
    paddingRight:10
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
    fontFamily:'Merienda-Regular'
  },
  text:{
    fontSize:12, 
    color:'#999'
  }
});

export default memo(LunchContainer);