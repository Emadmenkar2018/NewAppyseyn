import React from 'react';
import { StyleSheet,   View } from 'react-native';
import StackScreen from '../../../components/Banaozel/StackScreen' 
import DefaultBackground from '../../../components/Banaozel/DefaultBackground'    

 
export default class BanaOzelScreen extends React.Component {
    constructor(props){ 
        super(props);  
    }
  render()  
  {    
    console.log('dasd',this.props.history)
    return( 

        <View style={{ flex:1,backgroundColor:'#fff',zIndex:0}}>

            <DefaultBackground
              {...this.props}
              firstColor={'#26C8A8'}
              secondColor={'#00BBCA'}
            />  

            <View style={{ flex:1, backgroundColor: '#fff' , height:'100%',width:'100%' ,paddingLeft:10,paddingRight:10,zIndex:100 }}>     

                <StackScreen
                 {...this.props}
                /> 

            </View>
            
        </View>
 
    )
  }
}
const styles = StyleSheet.create({ 

  });