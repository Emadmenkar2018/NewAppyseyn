import React from 'react';
import { StyleSheet,   View ,Text} from 'react-native'; 
import DefaultBackground from '../../../components/BasicInfo/UnitBackground' 
import Goal from '../../../components/BasicInfo/Goal'  
import { Icon } from 'react-native-elements'     
 
export default class ThreeGoalsScreen extends React.Component {
    constructor(props){ 
        super(props);  
        this.handleChoosing = this.handleChoosing.bind(this)
    }

    handleChoosing(goals) {
        this.props.getGaols(goals)
    }
  render()  
    {     
        return( 

            <View style={{width:'100%',height:'100%',backgroundColor:'#fff'}}>
                 

                <DefaultBackground 
                    currentPosition={this.props.currentPosition}>
                        
                    <Text style ={{fontSize:60,color:'#fff',fontWeight:'900',fontFamily:'Merienda-Regular'}}>Amaçlar ?</Text>
 
                    
                </DefaultBackground>   

                <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingRight:10,height:'100%' ,paddingTop:10,backgroundColor:'transparent'}}>
                      
                    <Goal
                        handleChoosing={this.handleChoosing}
                    /> 

                </View>
                
            </View>
    
        )
    }
}
const styles = StyleSheet.create({ 

});