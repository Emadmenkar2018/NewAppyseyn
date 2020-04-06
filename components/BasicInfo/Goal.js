import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text,Left,Right } from 'native-base';
import {View, StyleSheet ,TouchableOpacity } from 'react-native';
import { Icon ,Image} from 'react-native-elements' 
import { ScrollView } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements'

export default class Goal extends Component {

  state={
        first:false,
        second:false,
        third:false,
        forth:false,
        fifth:false,  
        goals_text:[]
    }

    _handleChoose = ()=>{ 
        this.props.handleChoosing(this.state.goals_text)
    }

  render() {
    return (    
        <View style={{flex:1}}>

            <ScrollView  style={{flex:1, width:'100%',height:'100%',backgroundColor:'transparent'}}>
                <Card style={{borderRadius:10,height:60 ,backgroundColor:this.state.first? '#F0F5F9' : '#fff'}}> 
                    <View style={{flexDirection:'row',flex:1,paddingLeft:15,paddingRight:15}}>
                        <Left>
                            <Text style={{fontFamily:'Merienda-Regular'}}>
                                Yağ Yakma
                            </Text>
                        </Left>
                        <Right>
                            <TouchableOpacity onPress={()=>{
                                    this.setState({
                                        first:!this.state.first,
                                        goals_text: this.state.goals_text.includes('Yağ Yakma')? this.state.goals_text.filter(text => text !== 'Yağ Yakma')  : [...this.state.goals_text,'Yağ Yakma']
                                    }) 
                                }}>
                                <Image
                                style={{width: 35, height: 35}}
                                tintColor={this.state.first?  null : 'rgba(153, 153, 153,0.5)'}
                                source={this.state.first? require('../../assets/tick.png') : require('../../assets/plus.png')}
                                />
                            </TouchableOpacity>
                        </Right> 
                    </View>
                </Card>


                <Card style={{borderRadius:10,height:60 ,backgroundColor:this.state.second? '#F0F5F9' : '#fff'}}> 
                    <View style={{flexDirection:'row',flex:1,paddingLeft:15,paddingRight:15}}>
                        <Left>
                            <Text style={{fontFamily:'Merienda-Regular'}}>
                                Dayanıklılığı Arttırma
                            </Text>
                        </Left>
                        <Right> 
                            <TouchableOpacity onPress={()=>{
                                    this.setState({
                                        second:!this.state.second,
                                        // goals_text: this.state.goals_text.push('Dayanıklılığı Arttırma')
                                        // goals_text:[...this.state.goals_text,'Dayanıklılığı Arttırma']
                                        goals_text: this.state.goals_text.includes('Dayanıklılığı Arttırma')? this.state.goals_text.filter(text => text !== 'Dayanıklılığı Arttırma')  : [...this.state.goals_text,'Dayanıklılığı Arttırma']
                                        
                                    })  
                                }}>
                                <Image
                                style={{width: 35, height: 35}}
                                tintColor={this.state.second?  null : 'rgba(153, 153, 153,0.5)'}
                                source={this.state.second? require('../../assets/tick.png') : require('../../assets/plus.png')}
                                />
                            </TouchableOpacity>
                        </Right> 
                    </View>
                </Card>

                <Card style={{borderRadius:10,height:60 ,backgroundColor:this.state.third? '#F0F5F9' : '#fff'}}> 
                    <View style={{flexDirection:'row',flex:1,paddingLeft:15,paddingRight:15}}>
                        <Left>
                            <Text style={{fontFamily:'Merienda-Regular'}}>
                                Kilo Alma
                            </Text>
                        </Left>
                        <Right> 
                            <TouchableOpacity onPress={()=>{
                                    this.setState({
                                        third:!this.state.third,
                                        // goals_text:this.state.goals_text.push('Kilo Alma')}) 
                                        // goals_text:[...this.state.goals_text,'Kilo Alma']
                                        goals_text: this.state.goals_text.includes('Kilo Alma')? this.state.goals_text.filter(text => text !== 'Kilo Alma')  : [...this.state.goals_text,'Kilo Alma']
                                    })
                                }}>
                                <Image
                                style={{width: 35, height: 35}}
                                tintColor={this.state.third?  null : 'rgba(153, 153, 153,0.5)'}
                                source={this.state.third? require('../../assets/tick.png') : require('../../assets/plus.png')}
                                />
                            </TouchableOpacity>
                        </Right> 
                    </View>
                </Card>

                <Card style={{borderRadius:10,height:60 ,backgroundColor:this.state.forth? '#F0F5F9' : '#fff'}}> 
                    <View style={{flexDirection:'row',flex:1,paddingLeft:15,paddingRight:15}}>
                        <Left>
                            <Text style={{fontFamily:'Merienda-Regular'}}>
                                Fitnessi Geliştirme
                            </Text>
                        </Left>
                        <Right> 
                            <TouchableOpacity onPress={()=>{
                                    this.setState({
                                        forth:!this.state.forth,
                                        // goals_text:this.state.goals_text.push('Fitnessi Geliştirme')
                                        // goals_text:[...this.state.goals_text,'Fitnessi Geliştirme']
                                        goals_text: this.state.goals_text.includes('Fitnessi Geliştirme')? this.state.goals_text.filter(text => text !== 'Fitnessi Geliştirme')  : [...this.state.goals_text,'Fitnessi Geliştirme']
                                    }) 
                                }}>
                                <Image
                                style={{width: 35, height: 35}}
                                tintColor={this.state.forth?  null : 'rgba(153, 153, 153,0.5)'}
                                source={this.state.forth? require('../../assets/tick.png') : require('../../assets/plus.png')}
                                />
                            </TouchableOpacity>
                        </Right> 
                    </View>
                </Card>

                <Card style={{borderRadius:10,height:60 ,backgroundColor:this.state.fifth? '#F0F5F9' : '#fff'}}> 
                    <View style={{flexDirection:'row',flex:1,paddingLeft:15,paddingRight:15}}>
                        <Left>
                            <Text style={{fontFamily:'Merienda-Regular'}}>
                                Kas Yapma
                            </Text>
                        </Left>
                        <Right>
                            <TouchableOpacity onPress={()=>{
                                    this.setState({
                                        fifth:!this.state.fifth,
                                        // goals_text :this.state.goals_text.push('Kas Yapma')
                                        // goals_text:[...this.state.goals_text,'Kas Yapma']
                                        goals_text: this.state.goals_text.includes('Kas Yapma')? this.state.goals_text.filter(text => text !== 'Kas Yapma')  : [...this.state.goals_text,'Kas Yapma']
                                    }) 
                                }}>
                                <Image
                                style={{width: 35, height: 35}}
                                tintColor={this.state.fifth?  null : 'rgba(153, 153, 153,0.5)'}
                                source={this.state.fifth? require('../../assets/tick.png') : require('../../assets/plus.png')}
                                />
                            </TouchableOpacity>
                        </Right> 
                    </View>
                </Card>  

                

            </ScrollView> 
 
            <Button title={'Tamam'} onPress={() => this._handleChoose()}   buttonStyle={styles.button}>
                    Giriş
            </Button>  

        </View>
        
    );
  }
}
const styles = StyleSheet.create({  
    button:{
      marginVertical:20,
      paddingHorizontal:20,
      borderWidth:0.5,
      borderColor:'rgba(255,255,255,.3)',
      width:'80%',  
      height:40,
      borderRadius:20,
      alignSelf:'center',
      backgroundColor:'rgba(233, 44, 129,1)'
    }, 

}) 