import React, { memo  ,useState} from 'react';
import { StyleSheet, Text, Image ,View, TouchableOpacity } from 'react-native';
import { Item } from 'native-base'; 
import AddMealModal from './AddMealModal'

const AddDinner = ({ dinnerData,DaysData, ...props }) => {

  const [visibilty, setVisibility] = useState(false)

    return (
    <Item   style={styles.container}> 
        <View style={styles.iconcontainer}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../../assets/dinner.png')}/>
        </View>


        <View style={styles.Textcontainer}>

          <Text  style={{color:dinnerData[0]? '#E92C81':'#1D253C' ,fontSize:16, fontWeight:'bold', fontFamily:'Muli-Bold' }}>
            {dinnerData[0]?  'Eklenen Akşam Yemegi' : 'Akşam Yemegi Ekle'}
          </Text>

          <Text style={styles.text}> 
            {dinnerData[0]?  dinnerData[0]['content'] : 'Önerilen 944-1290 Kal.'} 
          </Text>

        </View>

        <View style={styles.Addcontainer}>
            <TouchableOpacity onPress={()=> setVisibility(true)}>
              <Image
                  style={{width: 35, height: 35}}
                  tintColor={dinnerData[0]? null:'#E92C81'}
                  source={ dinnerData[0]?  require('../../assets/edit.png') : require('../../assets/plus.png')}
                  />
            </TouchableOpacity>
        </View> 
         
        <AddMealModal 
              DaysData = {DaysData}
              setVisibilty={visibilty}
              setClosingModal={setVisibility}
              title={'Akşam Yemeği'}
              content = {dinnerData[0]?  dinnerData[0]['content'] : ''}
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
    fontFamily:'Muli-Bold'
  },
  text:{
    fontSize:12, 
    color:'#999'
  }
});

export default memo(AddDinner);