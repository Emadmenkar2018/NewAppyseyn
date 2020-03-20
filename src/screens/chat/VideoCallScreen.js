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
  import SoundPlayer from 'react-native-sound-player'
  import {_startNewVideoCallApi ,_checkforAnswerCall} from '../../../utils/requests'


//   const VideoCallScreen  =  ({ ...props  }) =>{
//     let history = useHistory();
//      const[status,setStatus]=useState('calling')
//      const[roomName,setRoomName]=useState('')
//      const[Token,setAccessToken]=useState('')
//      const[Token2,setAccessToken2]=useState('')
//      const[call_id,setCallid]=useState('')
//      const twilioVideo = useRef(null);
//      const main = useRef(null);

//      useEffect(() =>{ 
//           setStatus('calling') 
//           makeNewVideoCall() 
            
//       } , []);

//       const makeNewVideoCall = () =>{
//         console.log('HI zafer')
//         _startNewVideoCallApi().then(response =>{
//             console.log('response',response)
//             setCallid(response.data.id)
//             setAccessToken(response.data.access_token)
//             setAccessToken2(response.data.access_token_2)
//             setRoomName(response.data.room_name)
//             console.log('response1',response.data.access_token) 
//             twilioVideo.current.connect({ roomName: response.data.room_name, accessToken: response.data.access_token })
            
//         }).catch(err =>{
//             console.log('err',err)
//         })
//       }
//     // state = {
//     //     isAudioEnabled: true,
//     //     isVideoEnabled: true,
//     //     status: 'disconnected',
//     //     participants: new Map(),
//     //     videoTracks: new Map(),
//     //     roomName: 'omar_room',
//     //     token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzE2YjhiZTA2ODhmMjExNzM1ZmEzNTMxOTA3M2I0MjgzLTE1ODM5MTI1ODMiLCJpc3MiOiJTSzE2YjhiZTA2ODhmMjExNzM1ZmEzNTMxOTA3M2I0MjgzIiwic3ViIjoiQUM5OGI0NzQ0NDkyOTliMmEyYTE5YjhjYjY4ZWE3OWQ4NiIsImV4cCI6MTU4MzkxNjE4MywiZ3JhbnRzIjp7ImlkZW50aXR5Ijoib21hcl9yb29tIiwidmlkZW8iOnt9fX0.-dKSVw0mRMIBh89xBlw252emtZ_Vv_3J4aLgQaKhiqc'
//     //   }
 
//     const playAudio = () =>{
//       try 
//       { 
//           SoundPlayer.playSoundFile('telephonering', 'mp3') 
//       }
//       catch (e) {
//           console.log(`cannot play the sound file`, e)
//       }

//     }
//     const _onEndButtonPress = () => {
//       console.log('twilioVideo.current.disconnect()',twilioVideo.current.disconnect())
//       twilioVideo.current.disconnect()
//       history.goBack() 
//     }

//     // _onConnectButtonPress = () => {
//     //   this.setState({status: 'connecting'})
//     // }
  
//     // _onEndButtonPress = () => {
//     //   this.refs.twilioVideo.disconnect()
//     // }
  
//     // _onMuteButtonPress = () => {
//     //   this.refs.twilioVideo.setLocalAudioEnabled(!this.state.isAudioEnabled)
//     //     .then(isEnabled => this.setState({isAudioEnabled: isEnabled}))
//     // }
  
//     // _onFlipButtonPress = () => {
//     //   this.refs.twilioVideo.flipCamera()
//     // }
  
//     const _onRoomDidDisconnect = ({roomName, error}) => {
//       console.log("ERROR: ", error)
//       setStatus('disconnected')
//     }
  
//     const _onRoomDidFailToConnect = (error) => {
//       console.log("ERROR: ", error) 
//       setStatus('disconnected')
//     }

//     const  _onRoomDidConnect = () =>{ 
//       playAudio()
//         _checkforAnswerCall(call_id).then( response => {
//           if(response.status ==='calling'){
          
//           } 
//           console.log('response',response)
//       }).catch(err=>{
//         console.log('err',err)
//       }) 
//     }
  
//     // _onParticipantAddedVideoTrack = ({participant, track}) => {
//     //   console.log("onParticipantAddedVideoTrack: ", participant, track)
  
//     //   this.setState({
//     //     videoTracks: new Map([
//     //       ...this.state.videoTracks,
//     //       [track.trackSid, { participantSid: participant.sid, videoTrackSid: track.trackSid }]
//     //     ]),
//     //   });
//     // }
  
//     // _onParticipantRemovedVideoTrack = ({participant, track}) => {
//     //   console.log("onParticipantRemovedVideoTrack: ", participant, track)
  
//     //   const videoTracks = this.state.videoTracks
//     //   videoTracks.delete(track.trackSid)
  
//     //   this.setState({videoTracks: { ...videoTracks }})
//     // }

        
//         return(  
//             <View style={styles.container}>
                  
//                     {  status === 'calling'  &&
//                       <View style={{backgroundColor:'#fff',zIndex:-1}}>
//                         <TwilioVideoLocalView
//                           ref={main}
//                           enabled={true}
//                           style={styles.localVideo  } 
//                         />    
//                         <View style={{ zIndex:1,position:'absolute',top:100,alignSelf:'center'}}>
//                             <TouchableOpacity onPress={()=>console.log('Hi')}> 
//                               <Image style={styles.avatar} source={require('../../../assets/girl.png')}  /> 
//                             </TouchableOpacity>
//                             <Text style={{color:'#fff',fontSize:20,alignSelf:'center',zIndex:1}}>Calling Doctor</Text>
//                         </View>

//                         <View style={styles.optionsContainer}>
//                           <TouchableOpacity
//                               style={styles.optionButton}
//                               onPress={()=>_onEndButtonPress()}>
//                               <Image style={styles.logo} tintColor={'#999'} resizeMode={'contain'} source={require('../../../assets/horizontal-flip.png')}  />
//                           </TouchableOpacity>
//                           <TouchableOpacity
//                               style={styles.optionButtonClose}
//                               onPress={()=>_onEndButtonPress()}>
//                               <Icon name="call-end" type ='material' color={'white'}></Icon>
//                           </TouchableOpacity>
//                           <TouchableOpacity
//                               style={styles.optionButton}
//                               onPress={()=>_onEndButtonPress()}> 
//                               <Image style={styles.logo} tintColor={'#999'}  resizeMode={'contain'} source={require('../../../assets/mute.png')}  /> 
//                           </TouchableOpacity> 
//                         </View> 
//                       </View>
//                     }

//                     {  status === 'connected'  &&
//                         <TwilioVideoLocalView
//                           enabled={true}
//                           style={styles.localVideosmall  } 
//                         />    
//                     }
//                       {/*  <View style={styles.callContainer}>
//                          {
//                         status === 'connected' &&
//                         <View style={styles.remoteGrid}>
//                             {
//                             Array.from(videoTracks, ([trackSid, trackIdentifier]) => {
//                                 return (
//                                 <TwilioVideoParticipantView
//                                     style={styles.remoteVideo}
//                                     key={trackSid}
//                                     trackIdentifier={trackIdentifier}
//                                 />
//                                 )
//                             })
//                             }
//                         </View>
//                         }  
//                     </View>*/} 

                    

//                     <TwilioVideo
//                     ref={twilioVideo}
//                     onRoomDidConnect={ ()=>_onRoomDidConnect() }
//                     onRoomDidDisconnect={ ()=>_onRoomDidDisconnect() }
//                     onRoomDidFailToConnect= { ()=>_onRoomDidFailToConnect() }
//                     onParticipantAddedVideoTrack={ ()=>_onParticipantAddedVideoTrack() }
//                     onParticipantRemovedVideoTrack= { ()=>_onParticipantRemovedVideoTrack() }
//                     />
//                 </View>  
            
//     ) 
// }

// export default memo(VideoCallScreen);

export default class RecieveVideoCall extends Component {
    state = {
      isAudioEnabled: true,
      isVideoEnabled: true,
      status: '',
      participants: new Map(),
      videoTracks: new Map(),
      roomName: '',
      token: '',
      token2: '',
      sentcall_id:''
    }

    componentDidMount() {
        this.setState({status: 'connecting'}) 
        requestAudioPermission().then( response =>{ 
          requestCameraPermission().then( response =>{ 
              this._makeNewVideoCall() 
            }).catch(err =>{
              console.log('you can not use camera',err)
            })
          }).catch(err =>{
            console.log('you can not use audio',err)
          }) 
        }

      _makeNewVideoCall = () =>{
        console.log('HI zafer')
        _startNewVideoCallApi().then(response =>{
            console.log('response',response)
            this.setState({
              sentcall_id:response.data.id,
              token:response.data.access_token,
              token2:response.data.access_token_2,
              roomName:response.data.room_name
            })     
            this.refs.twilioVideo.connect({ roomName: response.data.room_name, accessToken: response.data.access_token })
            
        }).catch(err =>{
            console.log('err',err)
        })
      }
 

    // _sendAnswerVideoCall = () => {
    //   _sendAnswerVideoCallApi(this.state.recievedcall_id).then(response =>{ 
    //     // twilioVideo.current.connect({ roomName:recievedRoomName , accessToken: recievedAccessToken })  
    //     // setVideoTracks(...videoTracks,
    //     //   [track.trackSid, { participantSid: participant.sid, videoTrackSid: track.trackSid }]
    //     //   )
    //     // setStatus('connected')
    //   }).catch(err => {
    //     console.log('err',err)
    //   })
    // }

    _onConnectButtonPress = () => {
      this.refs.twilioVideo.connect({ roomName: this.state.roomName, accessToken: this.state.token })
      this.setState({status: 'connecting'})
    }

     
    _onEndButtonPress = () => {
      this.refs.twilioVideo.disconnect()
      this.props.history.goBack() 
    }

    _onMuteButtonPress = () => {
    this.refs.twilioVideo.setLocalAudioEnabled(!this.state.isAudioEnabled)
      .then(isEnabled => this.setState({isAudioEnabled: isEnabled}))
    }

    _onFlipButtonPress = () => {
    this.refs.twilioVideo.flipCamera()
    }

    // _onRoomDidConnect  = () => {
    // // console.log("connected: ", this.state.roomName) 
    // console.log("connected") 
    // this.setState({status: 'connected'})
    // }

     _onRoomDidConnect = () =>{
       
            //  playAudio()
      _checkforAnswerCall(call_id).then( response => {
        if(response.status ==='calling'){
            this.setState({status: 'connected'}) 
              } 
              console.log('response',response)
          }).catch(err=>{
            console.log('err',err)
          }) 
      }

    _onRoomDidDisconnect = ({roomName, error}) => {
    console.log("ERROR: ", error)

    this.setState({status: 'disconnected'})
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
    }

    _onParticipantRemovedVideoTrack = ({participant, track}) => {
    console.log("onParticipantRemovedVideoTrack: ", participant, track)

    const videoTracks = this.state.videoTracks
    videoTracks.delete(track.trackSid)

    this.setState({videoTracks: { ...videoTracks }})
    }

  render(){
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
                            style={styles.optionButton}
                            onPress={()=>this._onFlipButtonPress()}>
                            <Image style={styles.logo} tintColor={'#999'} resizeMode={'contain'} source={require('../../../assets/horizontal-flip.png')}  />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionButtonClose}
                            onPress={()=>this._onEndButtonPress()}>
                            <Icon name="call-end" type ='material' color={'white'}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionButton}
                            onPress={()=>this._onMuteButtonPress()}> 
                            <Image style={styles.logo} tintColor={'#999'}  resizeMode={'contain'} source={require('../../../assets/mute.png')}  /> 
                        </TouchableOpacity> 
                      </View> 
                    </View>
                  }

                  {  this.state.status === 'connected'  &&
                    <View style={styles.callContainer}>
                        <TwilioVideoLocalView
                          enabled={true}
                          style={styles.localVideosmall  } 
                        />    
                        <View style={styles.remoteGrid}>
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
                        </View>
                    </View>
                  }
                    {/*  
                        {
                      status === 'connected' &&
                      
                      }  
                  </View>*/} 

                  

                  <TwilioVideo
                  ref="twilioVideo"
                  onRoomDidConnect={ ()=>this._onRoomDidConnect() }
                  onRoomDidDisconnect={ ()=>this._onRoomDidDisconnect() }
                  onRoomDidFailToConnect= { ()=>this._onRoomDidFailToConnect() }
                  onParticipantAddedVideoTrack={ ()=>this._onParticipantAddedVideoTrack() }
                  onParticipantRemovedVideoTrack= { ()=>this._onParticipantRemovedVideoTrack() }
                  />
              </View>  
                    
            )  
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
        backgroundColor: 'white' 
      },
      callContainer: {
        flex: 1,
        width:'100%',
        height:'100%',
        // position: "absolute",
        // bottom: 0,
        // top: 0,
        // left: 0,
        // right: 0
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
        zIndex:0
      },
      remoteGrid: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap'
      },
      remoteVideo: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        width: 100,
        height: 120,
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
        console.log('You can use the camera');
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
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
 
