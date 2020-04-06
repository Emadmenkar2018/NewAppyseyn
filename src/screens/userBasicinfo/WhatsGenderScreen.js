import React from 'react';
import { StyleSheet,   View ,Text} from 'react-native';
import DefaultBackground from '../../../components/BasicInfo/UnitBackground' 
import Male from '../../../components/BasicInfo/Male'   
import Female from '../../../components/BasicInfo/Female'   

 
export default class WhatsGenderScreen extends React.Component {
    constructor(props){ 
        super(props);  
        this.handlerMale = this.handlerMale.bind(this)
        this.handlerFemale = this.handlerFemale.bind(this)
    }
    state={
        choosen:''
    }

    handlerMale() {
        this.setState({choosen: 'male'})
        let gender = 'male'
        this.props.navigator(1,gender)
    }

    handlerFemale() {
        this.setState({choosen: 'female'})
        let gender = 'female'
        this.props.navigator(1,gender)
    }

  render()  
    {    
        return( 

            <View style={{ flex:1,backgroundColor:'#fff'}}>

                <DefaultBackground 
                    currentPosition={this.props.currentPosition}>
                    
                    <Text style ={{fontSize:60,color:'#fff',fontWeight:'900',fontFamily:'Merienda-Regular'}}>Cinsyet ?</Text>
                    
                </DefaultBackground>  
                
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingRight:10,}}>

                    <Male
                        handlerMale = {this.handlerMale}
                    />

                    <Female
                        handlerFemale = {this.handlerFemale}
                    />

                </View>
                
            </View>
    
        )
    }
}
const styles = StyleSheet.create({ 

});