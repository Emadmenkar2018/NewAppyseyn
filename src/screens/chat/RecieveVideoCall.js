import React, { memo ,useRef,useState, useEffect,Component} from 'react';
import { StyleSheet, View, Modal  ,Text,TextInput ,TouchableOpacity , Button ,Image} from 'react-native'; 
import LinearGradient from 'react-native-linear-gradient';  
import {
    TwilioVideoLocalView,
    TwilioVideoParticipantView,
    TwilioVideo
  } from 'react-native-twilio-video-webrtc'
  import {PermissionsAndroid} from 'react-native';
  import { Icon } from 'react-native-elements'   
  import { useHistory } from 'react-router-native';  
  import { _sendAnswerVideoCallApiFromUser,_sendDeclineVideoCallApiFromUser } from '../../../utils/requests'

  
  export default class RecieveVideoCall extends Component {
    state = {
      isAudioEnabled: true,
      isVideoEnabled: true,
      status: 'connecting',
      participants: new Map(),
      videoTracks: new Map(),
      roomName: '',
      token: '',
      token: '',
      recievedcall_id:''
    }
  
    componentDidMount() {
         this.setState({
          roomName:this.props.location.state.Calldetail.room_name,
          token : this.props.location.state.Calldetail.access_token ,
          token2 : this.props.location.state.Calldetail.access_token_2 ,
          recievedcall_id : this.props.location.state.Calldetail.id
         })
         requestAudioPermission().then( response =>{ 
                      requestCameraPermission().then( response =>{ 
                        // this._onAnswerButtonPress()
                      }).catch(err =>{
                        console.log('you can not use camera',err)
                      })
                    }).catch(err =>{
                      console.log('you can not use audio',err)
                    })
         
      }
  
  
      _onAnswerButtonPress = () => {  
        this._sendAnswerVideoCall() 
      }
  
      _sendAnswerVideoCall = () => {
        _sendAnswerVideoCallApiFromUser(this.state.recievedcall_id).then(response =>{ 
          this.refs.twilioVideo.connect({ roomName: this.state.roomName, accessToken: this.state.token2 }) 
          // this.setState({
          //   videoTracks: new Map([
          //     ...this.state.videoTracks,
          //     [track.trackSid, { participantSid: participant.sid, videoTrackSid: track.trackSid }]
          //   ]),
          // });
          // setVideoTracks(...videoTracks,
          //   [track.trackSid, { participantSid: participant.sid, videoTrackSid: track.trackSid }]
          //   )
          // setStatus('connected')
        }).catch(err => {
          console.log('err',err)
        })
      }
  
    _onConnectButtonPress = () => {
      this.refs.twilioVideo.connect({ roomName: this.state.roomName, accessToken: this.state.token2 })
      this.setState({status: 'connected'})
    }
  
    _onEndButtonPress = () => { 
          console.log('disconnected', this.state.recievedcall_id)
          this.refs.twilioVideo.disconnect() 
          this.setState({status: 'disconnected'})
          this.props.history.goBack() 
          _sendDeclineVideoCallApiFromUser(this.state.recievedcall_id).then(response =>{
               
          }).catch(err =>{
              console.log('err',err)
          })
    }
  
    _onMuteButtonPress = () => {
      this.refs.twilioVideo.setLocalAudioEnabled(!this.state.isAudioEnabled)
        .then(isEnabled => this.setState({isAudioEnabled: isEnabled}))
    }
  
    _onFlipButtonPress = () => {
      this.refs.twilioVideo.flipCamera()
    }
  
    _onRoomDidConnect  = ({roomName, error}) => {
      console.log("connected: ", this.state.roomName) 
      this.setState({status: 'connected'})
    }
  
    _onRoomDidDisconnect = ({roomName, error}) => {
      console.log("ERROR: ", error)
      
    }
  
    _onRoomDidFailToConnect = (error) => {
      console.log("ERROR: ", error)
  
      this.setState({status: 'disconnected'})
    }
  
    _onParticipantAddedVideoTrack = ({participant, track}) => {
      console.log("onParticipantAddedVideoTrack: ", participant, track)
  
      this.setState({
        videoTracks: new Map([
          ...this.state.videoTracks,
          [track.trackSid, { participantSid: participant.sid, videoTrackSid: track.trackSid }]
        ]),
      });
      this.setState({status: 'connected'})
      console.log('2')
    }
  
    _onParticipantRemovedVideoTrack = ({participant, track}) => {
      console.log("onParticipantRemovedVideoTrack: ", participant, track)
  
      const videoTracks = this.state.videoTracks
      videoTracks.delete(track.trackSid)
  
      this.setState({ videoTracks: new Map([ ...videoTracks ]) });
    }
  
    render() { 
      console.log('retrieved',this.props.location.state.Calldetail)
      return (
        <View style={styles.container}>
                    
                         {  this.state.status === 'connecting'  &&
                              <View style={{backgroundColor:'#fff',zIndex:-1}}>
                                <TwilioVideoLocalView
                                  // ref={main}
                                  enabled={true}
                                  style={styles.localVideo  } 
                                />    
                                <View style={{ zIndex:1,position:'absolute',top:100,alignSelf:'center'}}>
                                    <TouchableOpacity onPress={()=>console.log('Hi')}> 
                                      <Image style={styles.avatar} source={require('../../../assets/girl.png')}  /> 
                                    </TouchableOpacity>
                                    <Text style={{color:'#fff',fontSize:20,alignSelf:'center',zIndex:1}}>Calling Doctor</Text>
                                </View>
        
                                <View style={styles.optionsContainer}> 
                                  <TouchableOpacity
                                      style={styles.optionButtonClose}
                                      onPress={()=>this._onEndButtonPress()}>
                                      <Icon name="call-end" type ='material' color={'white'}></Icon>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                      style={styles.optionButtonAnswer}
                                      onPress={()=>this._onAnswerButtonPress()}> 
                                      <Icon name="call" type ='material' color={'white'}></Icon>
                                  </TouchableOpacity> 
                                </View> 
                              </View>
                            }
        
                            {  this.state.status === 'connected'  &&
                                <View style={{width:'100%',height:'100%',backgroundColor:'#000'}}> 
                                         
                                         {
                                          Array.from(this.state.videoTracks, ([trackSid, trackIdentifier]) => {
                                              return (
                                              <TwilioVideoParticipantView
                                                  style={styles.remoteVideo}
                                                  key={trackSid}
                                                  trackIdentifier={trackIdentifier}
                                              />
                                              )
                                          })
                                        }  
                                      <TwilioVideoLocalView
                                        enabled={true}
                                        style={styles.localVideosmall} 
                                      />    
                                      <View style={styles.optionsContainer}>

                                          <TouchableOpacity
                                              style={styles.optionButton}
                                              onPress={(this._onFlipButtonPress)}>
                                              <Image style={styles.logo} tintColor={'#999'} resizeMode={'contain'} source={require('../../../assets/horizontal-flip.png')}  />
                                          </TouchableOpacity>
                                          <TouchableOpacity
                                              style={styles.optionButtonClose}
                                              onPress={()=>this._onEndButtonPress()}>
                                              <Icon name="call-end" type ='material' color={'white'}></Icon>
                                          </TouchableOpacity>
                                          <TouchableOpacity
                                              style={styles.optionButton}
                                              onPress={this._onMuteButtonPress}> 
                                              <Image style={styles.logo} tintColor={'#999'}  resizeMode={'contain'} source={require('../../../assets/mute.png')}  /> 
                                          </TouchableOpacity> 
                                      </View> 
                                </View> 
                            }
  
          <TwilioVideo
            ref="twilioVideo"
            onRoomDidConnect={ this._onRoomDidConnect }
            onRoomDidDisconnect={ this._onRoomDidDisconnect }
            onRoomDidFailToConnect= { this._onRoomDidFailToConnect }
            onParticipantAddedVideoTrack={ this._onParticipantAddedVideoTrack }
            onParticipantRemovedVideoTrack= { this._onParticipantRemovedVideoTrack }
          />
        </View>
      );
    }
  }
  
  
  const styles = StyleSheet.create({ 
      stretch:{ 
          width:'100%',
          height:'100%',
          alignSelf:'center', 
          backgroundColor:'#999'
      },  
      oval: {
          alignSelf:'center',
          width: '75%',
          height: 125,
          borderRadius: 250, 
          backgroundColor: 'red',
          transform: [
            {scaleX: 2}
          ]
      },
      container: {
          width:'100%',
          height:'100%',
          backgroundColor: 'black' 
        },
        callContainer: {
          flex: 1,
          position: "absolute",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0
        },
        welcome: {
          fontSize: 30,
          textAlign: 'center',
          paddingTop: 40
        },
        input: {
          height: 50,
          borderWidth: 1,
          marginRight: 70,
          marginLeft: 70,
          marginTop: 50,
          textAlign: 'center',
          backgroundColor: 'white'
        },
        button: {
          marginTop: 100
        },
        localVideo: { 
          width: '100%',
          height: '100%',  
          zIndex:0
          // right: 10,
          // top: 10, 
        },
        localVideosmall:{ 
          width: '25%',
          height: '25%',  
          position:'absolute',
          top:0,
          left:0,
          right:0,
          bottom:0,
          zIndex:1
        },
        remoteGrid: {
          flex: 1,
          flexDirection: "row",
          flexWrap: 'wrap'
        },
        remoteVideo: {
          width: '100%',
          height: '100%',  
          zIndex:0
        },
        optionsContainer: {
          // position: "absolute", 
          // height: 100,
          marginTop:'auto',
          backgroundColor: 'transparent',
          flexDirection: "row",
          alignItems: "center",
          justifyContent:'center',
          alignContent:'center'
        },
        optionButton: {
          width: 50,
          height: 50,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 100 / 2,
          backgroundColor: 'rgba(255,255,255,.15)',
          justifyContent: 'center',
          alignItems: "center",
          zIndex:2
        },
        optionButtonClose:{
          width: 60,
          height: 60,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 100 / 2,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: "center",
          marginBottom:50
        },
        optionButtonAnswer:{
          width: 60,
          height: 60,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 100 / 2,
          backgroundColor: '#26b545',
          justifyContent: 'center',
          alignItems: "center",
          marginBottom:50
        },
        logo:{  
            height:35,
            width:35, 
        },
        avatar:{
          height:90,
          width:90, 
          borderRadius:45,
          borderWidth:1,
          alignSelf:'center',
          borderColor:'#fff',
          zIndex:1,
          marginBottom:10
        }
  });
  
  async function requestAudioPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Cool Photo App Camera Permission',
            message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) { 
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  
    async function requestCameraPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Cool Photo App Camera Permission',
            message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) { 
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
   
  