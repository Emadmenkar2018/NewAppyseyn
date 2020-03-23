import React from 'react'
import { GiftedChat ,Bubble } from 'react-native-gifted-chat'
import { View ,StyleSheet ,Platform ,KeyboardAvoidingView ,Image, ImageBackground} from 'react-native'; 
import {_sendNewMessage,_fetchLastConversations,fetchincomingCallsFromAdminApi} from '../../../utils/requests'
import Header from '../../../components/Chat/Header'

export default class MainChatScreen extends React.Component {
  _isMounted = true;

  constructor(props) {
    super(props);    
  }  
  state = {
    messages: [],
    isLoading : true
  }

  componentDidMount() {
    this.fetchConversations() 
    this.timer = setInterval(()=> {
      if(this._isMounted  && this.state.isLoading){
        this.fetchConversations()
        this.fetchincomingCalls()
      }
    }, 5000) 
  }

  componentWillUnmount() {
    this._ismounted = false;
 }
 
  fetchConversations = () => {
    _fetchLastConversations().then(response =>{  
      
        this.setState({
          messages:  response.data 
        })
        
    }).catch( err =>
        console.log('err',err)
    )
  }  

  fetchincomingCalls = () =>{
    fetchincomingCallsFromAdminApi().then(response =>{   
      console.log('mes',response.data) 
      if (response.data.length > 0){ 
        this.setState({
          incomingCall:  true
        }) 
        this.props.history.push({pathname : '/user/RecieveVideoCall',
           state: { Calldetail: response.data[0] }})
          } 
    }).catch( err =>
        console.log('err',err)
    ) 
  }

  onSend(messages = []) {

    _sendNewMessage(messages[0].text).then(response =>{   
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }
    ).catch( err =>
        console.log('err',err)
    )
  }

  renderBubble(props) {
    return (<Bubble {...props} 
          wrapperStyle={{
            right: { backgroundColor: '#332C5F'},
            left: { backgroundColor: '#fff'},
          }}
        />
    );
  }

  render() {
    
    return ( 
      <View style={{ flex: 1 , zIndex:1, backgroundColor:'#fff'}}>

          <Header
              firstColor={'transparent'}
              secondColor={'transparent'}
          />

        <KeyboardAvoidingView style={{ flex: 1,zIndex:-1}}  behavior={'scroll'} keyboardVerticalOffset={10} enabled={true}  > 

            <ImageBackground 
                style ={styles.fitimage}
                source={require('../../../assets/msgCover.jpg')}> 
                <GiftedChat 
                  messages={this.state.messages}
                  alwaysShowSend={true}
                  onSend={messages => this.onSend(messages)}
                  renderBubble={this.renderBubble} 
                  user={{
                  _id: 23,
                  }}
                /> 
             </ImageBackground> 
        </KeyboardAvoidingView>
      </View>
    )
  }
}
const styles = StyleSheet.create({ 
    fitimage : {
      width : '100%',
      height : '100%', 
      zIndex:-1
      
    }, 
  });
   
  