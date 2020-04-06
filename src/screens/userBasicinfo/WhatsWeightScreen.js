import React from 'react';
import { StyleSheet,   View ,Text,Dimensions , Slider ,Image} from 'react-native'; 
import DefaultBackground from '../../../components/BasicInfo/UnitBackground'  
import MyRuler from '../../../components/BasicInfo/MyRuler'   
import { FloatingAction } from "react-native-floating-action";
import { Icon } from 'react-native-elements' 

const halfheight = Dimensions.get('window').height /2 
const halfwidth = Dimensions.get('window').width /2 
const margin = 40*2*halfheight/100 + 20
const myheight = 60*2*halfheight/100 -20
 
export default class WhatsWeightScreen extends React.Component {
    constructor(props){ 
        super(props);  
        this.refFav1 = React.createRef();
    }
    state={
        height:'',
        kg:35
    }

    handleMesauring =() =>{
        var mesurementObject = {kg:this.state.kg , height: this.state.height };
        this.props.getMesuremetns(mesurementObject)
    }
    
    getHeight =(height)=>{
        this.setState({height})
        console.log('this.state.height',this.state.height)
    }
  render()  
  {    
        return( 

            <View style={{ flex:1,backgroundColor:'#fff'}}>

                <DefaultBackground 
                    currentPosition={this.props.currentPosition}> 
                    <Text style ={{fontSize:60,color:'#fff',fontWeight:'900',fontFamily:'Merienda-Regular'}}>Ölçümler ?</Text> 
                </DefaultBackground>  
                
                <View style={{height:'100%',width:'100%', flexDirection:'column',alignContent:'center',alignItems:'center'}}>
                    <Image
                        source={require('../../../assets/body.png')} 
                        style={{height: halfheight, width: halfwidth,alignSelf:'center'}}
                        resizeMode='contain'/>  
                </View>


                <View style={{position:'absolute',bottom:70 ,marginLeft: halfwidth-50}}> 
                    <MyRuler
                        getHeight ={this.getHeight}
                    /> 
                </View>


                <View style={{position:'absolute',bottom:20,width:'70%',alignSelf:'center',marginTop:'auto'}}>
                    <Text style={{fontSize:25,fontWeight:'bold',fontFamily:'Muli-Light'}}>{this.state.kg}</Text>
                    <Text style={{fontSize:20,fontWeight:'600',fontFamily:'Muli-Light'}}>kg</Text>
                    <Slider style={{bottom:20,marginTop:30}} onValueChange={(value)=>this.setState({kg:parseInt(value)})} minimumValue={35} maximumValue={150} tintColor={'#efefef'} onTintColor="#10C1BC" thumbTintColor="#10C1BC" />
                </View>


                <FloatingAction 
                        floatingIcon={<Icon    name='check-circle' type='fontawesome' size={45} iconStyle={{color:'rgba(230, 41, 130,.8)'}} />}
                        onPressMain={this.handleMesauring} 
                        color={'transparent'} 
                        buttonSize={40}
                        showBackground={false}
                />

            </View>
    
        )
    }
}
const styles = StyleSheet.create({ 

});