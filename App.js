import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route,Scene,Router, Switch ,history} from 'react-router-native';
import Stack from 'react-router-native-stack';
import LoginScreen from './src/screens/auth/LoginScreen'
import MainScreen from './src/screens/home/MainScreen' 
import OlculerimScreen from './src/screens/banaOzel/OlculerimScreen' 
import BeforeAfterScreen from './src/screens/banaOzel/BeforeAfterScreen'  
import BodyMeasurments from './src/screens/banaOzel/Mesaurments/BodyMeasurments' 
import WristMeasurment from './src/screens/banaOzel/Mesaurments/WristMeasurment' 
import BellyMeasurment from './src/screens/banaOzel/Mesaurments/BellyMeasurment' 
import MetabolizimScreen from './src/screens/banaOzel/Mesaurments/MetabolizimScreen' 
import EnergyScreen from './src/screens/banaOzel/Mesaurments/EnergyScreen' 
import PhysicActivityScreen from './src/screens/banaOzel/Mesaurments/PhysicActivityScreen' 
import ExerciseTimeScreen from './src/screens/banaOzel/Mesaurments/ExerciseTimeScreen' 
import FatBurningScreen from './src/screens/banaOzel/Mesaurments/FatBurningScreen' 
import SleepDurationScreen from './src/screens/banaOzel/Mesaurments/SleepDurationScreen' 
import GoalsSreen from './src/screens/banaOzel/GoalsSreen' 
import HealthHistoryScreen from './src/screens/banaOzel/HealthHistoryScreen' 
import RegisterScreen from './src/screens/auth/RegisterScreen'
import StepsScreen from './src/screens/userBasicinfo/StepsScreen'
import RandevuMainScreen from './src/screens/Randevu/RandevuMainScreen'
import MainChatScreen from './src/screens/chat/MainChatScreen'
import MainStoreScreen from './src/screens/store/MainStoreScreen'
import RecieveVideoCall from './src/screens/chat/RecieveVideoCall' 
import SideBar from './components/SideMenu/MySideBar'
import AboutUsScreen from './src/screens/sideMenu/AboutUsScreen'
import SssScreen from './src/screens/sideMenu/SssScreen'
import MyProducts from './src/screens/sideMenu/MyProductsScreen'
import SettingsScreen from './src/screens/sideMenu/SettingsScreen' 
import ChangePasswordScreen from './src/screens/sideMenu/ChangePasswordScreen'
import ChangeEmailScreen from './src/screens/sideMenu/ChangeEmailScreen' 
import Notification from './src/screens/sideMenu/Notification' 
import {initStore} from './redux/store';
import {Provider} from 'react-redux';
import PushNotification from 'react-native-push-notification'
import {_fetchLastNotification,fetchincomingCallsFromAdminApi} from './utils/requests' 

const store = initStore(); 

export default class App extends Component {
  _isMounted = true;

  constructor(props) {
    super(props);    
  } 
  state={
    notification : '',
    videocallcoming : false,
    isLoading:true,
    notificationOnShow: false,
    Calldetail:''
  }

  componentDidMount () { 
    this.timer = setInterval(()=> {
      if(this._isMounted  && this.state.isLoading){
        // this.fetchConversations()
        this.fetchincomingCalls()
      }
    }, 15000) 
     
  }

  componentWillUnmount() {
    // this._ismounted = false;
    // this.setState({isLoading:false})
 }

 _handleVideocallComing=() =>{
   if (!this.state.notificationOnShow){
     PushNotification.localNotificationSchedule({ 
         message: "Admin Ariyor",  
         date: new Date(Date.now() )  
     }); 
    //  history.push('/user/RecieveVideoCall')
   }
    this.setState({notificationOnShow:true})
    

 }

 fetchincomingCalls = () =>{
  fetchincomingCallsFromAdminApi().then(response =>{   
    // console.log('mes',response.data) 
    if (response.data.length > 0){ 
      this.setState({videocallcoming:true})
      this.setState({Calldetail:response.data[0]}) 
      this._handleVideocallComing() 
      this._ismounted = false;
      setTimeout(function(){  

        }, 40000);
      
    }
    else{
      this.setState({videocallcoming:false}) 
      this.setState({isLoading:true}) 
      this.setState({notificationOnShow:false})
    }
  }).catch( err =>
      console.log('err',err)
  ) 
}
 

  changeRoute(previousRoute, nextRoute)   {
    //do your logic here 
  }
  render() {  
    return (
      <Provider  store={store}>
        <NativeRouter  onChange={this.changeRoute}>
          <Switch>
            <Route  
                exact path="/" 
                render={props => {
                  return <LoginScreen
                    videocallcoming={this.state.videocallcoming}
                    {...props}
                  />
                }}
              />  
          <Route  
              exact path="/Register" 
              render={props => {
                return <RegisterScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            />  
          <Route  
              exact path="/Register/Steps" 
              render={props => {
                return <StepsScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            />  
          <Route  
              exact path="/Main" 
              render={props => {
                return <MainScreen
                videocallcoming={this.state.videocallcoming}
                // setVideoCallComing={this.setState({videocallcoming})}
                Calldetail = {this.state.Calldetail}
                  {...props}
                />
              }}
            />  
        <Route  
            exact path="/Main/BanaOzel/OncesiSonrasi" 
            render={props => {
              return <BeforeAfterScreen
              videocallcoming={this.state.videocallcoming}
                {...props}
              />
            }}
          />  
        <Route  
              exact path="/Main/BanaOzel/Olculerim" 
              render={props => {
                return <OlculerimScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
          />  
             <Route  
              exact path="/Main/BanaOzel/Hedeflerim" 
              render={props => {
                return <GoalsSreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            /> 
         <Route  
              exact path="/Main/Chat"
              render={props => {
                return <MainChatScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            /> 
        <Route  
              exact path="/Main/BanaOzel/Olculerim/BodyMesaurment" 
              render={props => {
                return <BodyMeasurments
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            /> 
            <Route  
              exact path="/Main/BanaOzel/Olculerim/BilekÇevresi" 
              render={props => {
                return <WristMeasurment
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            /> 
         <Route 
               
              exact path="/Main/BanaOzel/Olculerim/BelÇevresi" 
              render={props => {
                return <BellyMeasurment
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            /> 
          <Route  
              exact path="/Main/BanaOzel/Olculerim/BazalMetabolizma" 
              render={props => {
                return <MetabolizimScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            /> 
           <Route  
              exact path="/Main/BanaOzel/Olculerim/GünlükEnerji" 
              render={props => {
                return <EnergyScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            /> 
           <Route  
              exact path="/Main/BanaOzel/Olculerim/FizikselAktivite" 
              render={props => {
                return <PhysicActivityScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            /> 
        <Route  
              exact path="/Main/BanaOzel/Olculerim/EgzersizSüresi" 
              render={props => {
                return <ExerciseTimeScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            /> 
           <Route  
              exact path="/Main/BanaOzel/Olculerim/YağYakma" 
              render={props => {
                return <FatBurningScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            /> 
        <Route  
              exact path="/Main/BanaOzel/Olculerim/UykuZaman" 
              render={props => {
                return <SleepDurationScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            /> 
             <Route  
              exact path="/Main/Store" 
              render={props => {
                return <MainStoreScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            />  
            <Route 
              exact path="/SideBar" 
              render={props => {
                return <SideBar
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            />  
            <Route 
              exact path="/SideBar/MyProducts" 
              render={props => {
                return <MyProducts
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            />  
            <Route 
              exact path="/SideBar/Settings" 
              render={props => {
                return <SettingsScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            />  
            <Route 
              exact path="/SideBar/Sss" 
              render={props => {
                return <SssScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            />  
            <Route 
              exact path="/SideBar/AboutUs" 
              render={props => {
                return <AboutUsScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            />    
            <Route 
              exact path="/SideBar/Settings" 
              render={props => {
                return <SettingsScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            />   
            <Route 
              exact path="/SideBar/MyNotifications" 
              render={props => {
                return <Notification 
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            />   
           
              <Route 
              exact path="/Main/BanaOzel/SaglikGecmisim" 
              render={props => {
                return <HealthHistoryScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            />   
            <Route 
              exact path="/user/RecieveVideoCall" 
              render={props => {
                return <RecieveVideoCall
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            /> 
             <Route 
              exact path="/SideBar/ChangeEmail" 
              render={props => {
                return <ChangeEmailScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            /> 
             <Route 
              exact path="/SideBar/ChangePassword" 
              render={props => {
                return <ChangePasswordScreen
                videocallcoming={this.state.videocallcoming}
                  {...props}
                />
              }}
            /> 
            
          {/*   <Route 
              path="/register" 
              render={props => {
                return <RegisterScreen
                  {...props}
                />
              }}
            />  */}
            
            {/* <Scene key="LoginScreen" component={LoginScreen} title="LoginScreen" /> */}
          </Switch>
        </NativeRouter>
      </Provider>
      //   <Router>
      //   <Scene key="root">
      //     <Scene key="scarlet"
      //       component={LoginScreen}
      //       title="Scarlet"
      //       initial
      //     /> 
      //   </Scene>
      // </Router>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});