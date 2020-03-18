import React, { memo ,useState} from 'react';
import { StyleSheet, Text, Image ,View ,TouchableOpacity } from 'react-native';
import { Input, Item, Label  , Icon } from 'native-base';  

const BreakfastContainer = ({ breakfastData, ...props }) => { 

  const [visibilty, setVisibility] = useState(false)
   
    return (
    <Item   style={styles.container}> 
        <View style={styles.iconcontainer}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../../assets/apple.png')}/>
        </View>


        <View style={styles.Textcontainer}>
          <Text style={{color:breakfastData? '#E92C81':'#1D253C' ,fontSize:16, fontWeight:'bold', fontFamily:'Muli-Bold'}}> 
            {breakfastData?  'Kahvaltı' : 'Kahvaltı Bulunmamaktadır'}
          </Text>
          <Text style={styles.text}>
           {breakfastData? breakfastData : 'Protein, Yağ, Karbonhidrat, Asit bazı'} 
          </Text>
        </View>
 

          
    </Item>  
    )
   }

const styles = StyleSheet.create({ 
  container:{
    marginTop:50,
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
    zIndex:1,
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
    
  },
  text:{
    fontSize:12, 
    color:'#999',
    fontFamily:'Muli-Bold'
  }
});

export default memo(BreakfastContainer);