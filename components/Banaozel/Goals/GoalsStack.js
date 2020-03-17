import React, { memo } from 'react';
import {
  View,
  StyleSheet,  
  Image,
  TouchableOpacity,
  Text
} from 'react-native'; 
import { Icon } from 'react-native-elements'  
import LinearGradient from 'react-native-linear-gradient'; 

const GoalsStack =  ({ children,index, ...props  }) => (  
    
    // const [page,setP] = useState('');
    
    <View style ={{width:'75%',height : '15%',backgroundColor:'transparent',alignSelf:'center',flexDirection:'row',alignItems:'center',alignContent:'center',paddingRight:29,marginTop:10,justifyContent:'space-between'}}>

        <TouchableOpacity style={{width:'30%',height:'100%' ,flexDirection:'row',alignItems:'flex-end' }} onPress={() => props.getCurrentpage(0)} >
            <Text style={{fontFamily:'Muli-SemiBold' ,alignSelf:'center',color:index==0? '#fff': '#1D253C',backgroundColor:index==0 ?'#1D253C':'#fff',width:'70%',textAlign:'center',fontSize:18,borderRadius:30}}>Kilo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',width:'30%',height:'100%',alignItems:'center'}} onPress={() => props.getCurrentpage(1)} >
            <Text style={{fontFamily:'Muli-SemiBold' ,alignSelf:'center',color:index==1? '#fff': '#1D253C',backgroundColor:index==1 ?'#1D253C':'#fff',width:'70%',textAlign:'center',fontSize:18,borderRadius:30}}>Yağ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',width:'30%',height:'100%',alignItems:'center'}} onPress={() => props.getCurrentpage(2)} >
            <Text style={{fontFamily:'Muli-SemiBold' ,alignSelf:'center',color:index==2? '#fff': '#1D253C',backgroundColor:index==2 ?'#1D253C':'#fff',width:'70%',textAlign:'center',fontSize:18,borderRadius:30}}>Kas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',width:'30%',height:'100%',alignItems:'center'}} onPress={() => props.getCurrentpage(3)} >
            <Text style={{fontFamily:'Muli-SemiBold' ,alignSelf:'center',color:index==3? '#fff': '#1D253C',backgroundColor:index==3 ?'#1D253C':'#fff',width:'70%',textAlign:'center',fontSize:18,borderRadius:30}}>Su</Text>
        </TouchableOpacity>
 
    </View>  
 
      
  
);

const styles = StyleSheet.create({ 
  text:{ 
    alignSelf:'center',
    color:'#1D253C',
    backgroundColor:'#999',
    width:'70%',
    textAlign:'center',
    fontSize:18,
    borderRadius:30
},
});

export default memo(GoalsStack);
// onPress={(tabIndex) => props.getCurrentpage(tabIndex)}
// onPress={(tabIndex) => props.getCurrentpage(tabIndex)}
// onPress={(tabIndex) => props.getCurrentpage(tabIndex)}
// onPress={(tabIndex) => props.getCurrentpage(tabIndex)}