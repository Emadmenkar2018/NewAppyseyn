import React, { memo ,useState} from 'react';
import { StyleSheet, Text, Image ,View, TouchableOpacity } from 'react-native';
import { Item} from 'native-base';  

const SnackContainer = ({ apperativeData, ...props }) => {

  const [visibilty, setVisibility] = useState(false)

    return (
    <Item   style={styles.container}> 
        <View style={styles.iconcontainer}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../../assets/pistachio.png')}/>
        </View>


        <View style={styles.Textcontainer}>

          <Text style={{color: apperativeData.length > 0  ? '#E92C81':'#1D253C' ,fontSize:16 ,fontFamily:'Merienda-Regular' }}> 
           
            {apperativeData.length > 0    ?  'Aperatif' : ' Aperatif Girilmemiştir'}
          </Text>

          <Text style={styles.text}>
            
             {apperativeData.length > 0    ?  apperativeData : 'Önerilen 340-520 Kal.'} 
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

export default memo(SnackContainer);