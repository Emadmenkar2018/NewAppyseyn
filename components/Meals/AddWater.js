import React, { memo, useState ,useEffect} from 'react';
import { StyleSheet, Text, Image ,View, TouchableOpacity } from 'react-native';
import { Item   } from 'native-base';  
import AddMealModal from './AddMealModal'

const AddWater = ({ label, errorText,inputText,type, ...props }) => {
  const [showFull1, setshowFull1] = useState(false);
  const [showFull2, setshowFull2] = useState(false);
  const [showFull3, setshowFull3] = useState(false);
  const [showFull4, setshowFull4] = useState(false);
  const [showFull5, setshowFull5] = useState(false);
  const [showFull6, setshowFull6] = useState(false);
  const [showFull7, setshowFull7] = useState(false);

    return (
        <View style={styles.container}> 

              <Item   style={styles.itemcontainer}> 
                <View style={styles.bottlecontainer}>
                    <Image
                      style={{width: 50, height: 50}}
                      source={require('../../assets/water-bottle.png')}/>
                </View>


                <View style={styles.Textcontainer}>
                  <Text style={styles.head}>
                    Su
                  </Text>
                  <Text style={styles.text}>
                    her bardak yarım litredir
                  </Text> 
                </View>

                {/* <View style={styles.Addcontainer}>
                    <TouchableOpacity   onPress={()=>console.log('Hi')}>
                        <Image
                            style={{width: 35, height: 35}}
                            tintColor={'#E92C81'}
                            source={require('../../assets/plus.png')}
                        />
                    </TouchableOpacity>
                </View>  */}
              </Item>   

            <View style={styles.cups}>
                 
                        <TouchableOpacity  style={styles.iconcontainer} onPress={()=>setshowFull1(!showFull1)}> 
                              <Image
                              style={{width: 50, height: 50}}
                              tintColor={showFull1 ? null :'#999'}
                              source={ showFull1? require('../../assets/water.png') : require('../../assets/empty.png')}
                              />     
                        </TouchableOpacity> 
              
                        <TouchableOpacity  style={styles.iconcontainer} onPress={()=>setshowFull2(!showFull2)}> 
                              <Image
                              style={{width: 50, height: 50}}
                              tintColor={showFull2 ? null :'#999'}
                              source={ showFull2? require('../../assets/water.png') : require('../../assets/empty.png')}
                              />     
                        </TouchableOpacity> 

                        <TouchableOpacity  style={styles.iconcontainer} onPress={()=>setshowFull3(!showFull3)}> 
                              <Image
                              style={{width: 50, height: 50}}
                              tintColor={showFull3 ? null :'#999'}
                              source={ showFull3? require('../../assets/water.png') : require('../../assets/empty.png')}
                              />     
                        </TouchableOpacity> 

                        <TouchableOpacity  style={styles.iconcontainer} onPress={()=>setshowFull4(!showFull4)}> 
                              <Image
                              style={{width: 50, height: 50}}
                              tintColor={showFull4 ? null :'#999'}
                              source={ showFull4? require('../../assets/water.png') : require('../../assets/empty.png')}
                              />     
                        </TouchableOpacity> 

                        <TouchableOpacity  style={styles.iconcontainer} onPress={()=>setshowFull5(!showFull5)}> 
                              <Image
                              style={{width: 50, height: 50}}
                              tintColor={showFull5 ? null :'#999'}
                              source={ showFull5? require('../../assets/water.png') : require('../../assets/empty.png')}
                              />     
                        </TouchableOpacity> 

                        <TouchableOpacity  style={styles.iconcontainer} onPress={()=>setshowFull6(!showFull6)}> 
                              <Image
                              style={{width: 50, height: 50}}
                              tintColor={showFull6 ? null :'#999'}
                              source={ showFull6? require('../../assets/water.png') : require('../../assets/empty.png')}
                              />     
                        </TouchableOpacity> 

                        <TouchableOpacity  style={styles.iconcontainer} onPress={()=>setshowFull7(!showFull7)}> 
                              <Image
                              style={{width: 50, height: 50}}
                              tintColor={showFull7 ? null :'#999'}
                              source={ showFull7? require('../../assets/water.png') : require('../../assets/empty.png')}
                              />     
                        </TouchableOpacity> 
            </View>
        </View>
        
         
    
    )
   }

const styles = StyleSheet.create({ 
  container:{
    marginTop:20, 
    height:200,
    width:'97%',
    backgroundColor:'#fff',
    borderRadius:10,  
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65, 
    marginLeft:7,
    paddingLeft:10,  
    paddingRight:10,
    elevation: 4, 
  },
  itemcontainer:{
    marginTop:20,  
    height:'50%',
    backgroundColor:'#fff', 
    flexDirection:'row',
    justifyContent:'space-between',  
    borderBottomWidth:0,
  },
  bottlecontainer:{ 
    paddingRight:40,
    width :'15%'
  },
  iconcontainer:{ 
    paddingRight:40,
    width :'10%'
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
    color:'#1D253C',
    fontFamily:'Merienda-Regular'
  },
  text:{
    fontSize:12, 
    color:'#999',
    fontFamily:'Merienda-Regular'
  },
  cups:{
    width:'100%',
    height:'50%',
    flexDirection:'row',
    justifyContent:'space-between', 
  }
});

export default memo(AddWater);