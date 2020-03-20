import React, { memo ,Component} from 'react';
import { StyleSheet, View, Modal  ,Text,TextInput ,TouchableOpacity , Button ,Alert} from 'react-native'; 
import LinearGradient from 'react-native-linear-gradient';  
import {
    TwilioVideoLocalView,
    TwilioVideoParticipantView,
    TwilioVideo
  } from 'react-native-twilio-video-webrtc'
  import {PermissionsAndroid} from 'react-native';
 
export default class VideoCallScreen extends Component {

    state = {
        isAudioEnabled: true,
        isVideoEnabled: true,
        status: 'disconnected',
        participants: new Map(),
        videoTracks: new Map(),
        roomName: '',
        token: ''
      }

      closeModal = () =>{
        console.log('id',props.id)
        setContent('')
        props.setClosingModal(false)
    }
    
      _onConnectButtonPress = () => {
        requestAudioPermission().then(response => {
            requestCameraPermission().then(response =>{ 
                this.refs.twilioVideo.connect({ roomName: this.state.roomName, accessToken: this.state.token })
                this.setState({status: 'connecting'}) 
            }).catch(err => console.log('err',err))
        }).
        catch(err => console.log('err',err)
        )
        
      }
    
      _onEndButtonPress = () => {
        //   console.log('Hi')
        this.refs.twilioVideo.disconnect()
      }
    
      _onMuteButtonPress = () => {
        this.refs.twilioVideo.setLocalAudioEnabled(!this.state.isAudioEnabled)
          .then(isEnabled => this.setState({isAudioEnabled: isEnabled}))
      }
    
      _onFlipButtonPress = () => {
        this.refs.twilioVideo.flipCamera()
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
        return( 
          <View>

                <LinearGradient  colors={['rgba(44, 44, 94,.8)', 'rgba(63, 49, 100,.8)']} style={{alignSelf:'center',alignContent:'center',width:'100%',height:'100%',alignItems:'center' }}>
                    <View style={styles.container}>
                            {/* {
                            this.state.status === 'disconnected' &&
                            <View>
                                <Text style={styles.welcome}>
                                    React Native Twilio Video
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize='none'
                                    value={this.state.roomName}
                                    onChangeText={(text) => this.setState({roomName: text})}>
                                </TextInput>
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize='none'
                                    value={this.state.token}
                                    onChangeText={(text) => this.setState({token: text})}>
                                </TextInput>
                                <Button
                                    title="Connect"
                                    style={styles.button}
                                    onPress={this._onConnectButtonPress}>
                                </Button>
                            </View>
                            } */}

                            {
                            (this.state.status === 'connected' || this.state.status === 'connecting') &&
                                <View style={styles.callContainer}>
                                {
                                this.state.status === 'connected' &&
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
                                }
                                <View
                                style={styles.optionsContainer}>
                                <TouchableOpacity
                                    style={styles.optionButton}
                                    onPress={this._onEndButtonPress}>
                                    <Text style={{fontSize: 12}}>End</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.optionButton}
                                    onPress={this._onMuteButtonPress}>
                                    <Text style={{fontSize: 12}}>{ this.state.isAudioEnabled ? "Mute" : "Unmute" }</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.optionButton}
                                    onPress={this._onFlipButtonPress}>
                                    <Text style={{fontSize: 12}}>Flip</Text>
                                </TouchableOpacity>
                                <TwilioVideoLocalView
                                    enabled={true}
                                    style={styles.localVideo}
                                />
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
                    </LinearGradient>  
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
        flex: 1,
        backgroundColor: 'white'
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
        flex: 1,
        width: 150,
        height: 250,
        position: "absolute",
        right: 10,
        bottom: 10
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
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        height: 100,
        backgroundColor: 'blue',
        flexDirection: "row",
        alignItems: "center"
      },
      optionButton: {
        width: 60,
        height: 60,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 100 / 2,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: "center"
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
 
