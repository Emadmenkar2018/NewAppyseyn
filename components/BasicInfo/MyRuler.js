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
      this.props.getHeight(this.state.height+6)
   }
   render() { 
       return (
        <View  > 
            <View style={{position:'absolute',top:-20,left:130,alignContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:25,fontWeight:'bold',marginBottom:2,fontFamily:'Muli-Light'}}>{this.state.height+6}</Text>
              <Text style={{fontSize:20,fontWeight:'600',marginTop:0,fontFamily:'Muli-Light'}}>cm</Text> 
            </View>
            <LineGauge ref={this.refRuler}  min={130} max={210} value={this.state.height} onChange={(value) =>this._handleChange(value)}/> 
        </View> 
       )
   }
} 