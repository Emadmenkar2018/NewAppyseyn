import React, { memo ,useState} from 'react';
import { StyleSheet, Text, Image ,View ,TouchableOpacity } from 'react-native';
import { Input, Item, Label  , Icon } from 'native-base'; 
import AddMealModal from './AddMealModal'

const AddBreakfast = ({ breakfastData,DaysData, ...props }) => { 

  const [visibilty, setVisibility] = useState(false)
   
    return (
    <Item   style={styles.container}> 
        <View style={styles.iconcontainer}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../../assets/apple.png')}/>
        </View>


        <View style={styles.Textcontainer}>
          <Text style={{color:breakfastData[0]? '#E92C81':'#1D253C' ,fontSize:16, fontWeight:'bold', fontFamily:'Muli-Bold'}}> 
            {breakfastData[0]?  'Eklenen Kahvaltı' : 'Kahvaltı Ekle'}
          </Text>
          <Text style={styles.text}>
           {breakfastData[0]?  breakfastData[0]['content'] : 'Protein, Yağ, Karbonhidrat, Asit bazı'} 
          </Text>
        </View>

        <View style={styles.Addcontainer}>
          <TouchableOpacity onPress={()=>{setVisibility(true) } }>
            <Image
                  style={{width: 35, height: 35}}
                  tintColor={breakfastData[0]? null:'#E92C81'}
                  source={ breakfastData[0]?  require('../../assets/edit.png') : require('../../assets/plus.png')}
                  />
          </TouchableOpacity> 
        </View> 

          <AddMealModal 
              DaysData = {DaysData}
              setVisibilty={visibilty}
              setClosingModal={setVisibility}
              title={'Kahvaltı'}
              content = {breakfastData[0]?  breakfastData[0]['content'] : ''}
          /> 
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

export default memo(AddBreakfast);