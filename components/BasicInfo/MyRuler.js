import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar ,Dimensions} from 'react-native';  
import LineGauge  from 'react-native-line-gauge';

const halfheight = Dimensions.get('window').height /2 
const halfwidth = Dimensions.get('window').width /2 
const margin = 40*2*halfheight/100 + 20
const myheight = 60*2*halfheight/100 -80

export default class MyRuler extends Component {
  constructor(props) {
    super(props);    
    this.refRuler = React.createRef();  
  } 

  state={
     height:140
    }

   _handleChange =(value)=>{  
      this.setState({height: value < 140 ? 140 : value > 210 ? 210 : value})
      this.props.getHeight(this.state.height )
   }
   render() { 
       return (
        <View  > 
            <View style={{position:'absolute',top:-halfheight+20,left:130,alignContent:'center',alignItems:'center',height:'100%'}}>
              <Text style={{fontSize:25,  marginBottom:2,fontFamily:'Merienda-Regular'}}>{this.state.height }</Text>
              <Text style={{fontSize:20,  marginTop:0,fontFamily:'Merienda-Regular'}}>cm</Text> 
            </View>
            <LineGauge ref={this.refRuler}  min={130} max={210} value={this.state.height} onChange={(value) =>this._handleChange(value)}/> 
        </View> 
       )
   }
} 