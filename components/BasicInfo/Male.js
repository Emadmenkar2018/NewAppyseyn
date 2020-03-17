import React, { Component } from 'react';
import { Image ,Dimensions,TouchableOpacity,View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
const halfheight = Dimensions.get('window').height /2 
const halfwidth = Dimensions.get('window').width /2 

export default class Male extends Component {
    state={
    }

    _handleChoose = ()=>{
        this.props.handlerMale()
    }
  render() {
    return ( 
        <View style={{height: 200, width: '45%'}} >
            <TouchableOpacity  style={{height: 200, width: '100%'}} 
               onPress={() => this._handleChoose()}
            > 
                <Card style={{height: 200, width: '100%',paddingTop:10}}>
                    
                    <CardItem cardBody>
                        
                        <Image 
                            source={require('../../assets/guy.png')} 
                            style={{height: 140, width: '100%'}}
                            resizeMode='contain'
                        />
                    </CardItem>

                    <CardItem> 
                        <Body>
                            <Text style={{width:'100%',textAlign:'center' ,color:'#1D253C'}}>Male</Text>
                        </Body> 
                    </CardItem>

                </Card>

            </TouchableOpacity>
        </View>
        
    );
  }
}