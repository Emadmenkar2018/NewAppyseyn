import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route,Scene,Router, Switch } from 'react-router-native';
import Stack from 'react-router-native-stack';
import LoginScreen from './src/screens/auth/LoginScreen'
import MainScreen from './src/screens/home/MainScreen' 
import OlculerimScreen from './src/screens/banaOzel/OlculerimScreen' 
import BeforeAfterScreen from './src/screens/banaOzel/BeforeAfterScreen'  
import BodyMeasurments from './src/screens/banaOzel/Mesaurments/BodyMeasurments' 
import WristMeasurment from './src/screens/banaOzel/Mesaurments/WristMeasurment' 
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
import VideoCallScreen from './src/screens/chat/VideoCallScreen'
import SideBar from './components/SideMenu/MySideBar'
import {initStore} from './redux/store';
import {Provider} from 'react-redux';

  
const store = initStore(); 

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Switch>
          <Route 
              // path="/Main/Olculerim" 
              exact path="/" 
              render={props => {
                return <MainScreen
                  {...props}
                />
              }}
            />  
        <Route  
            exact path="/Main/OncesiSonrasi" 
            render={props => {
              return <BeforeAfterScreen
                {...props}
              />
            }}
          />  
        <Route  
              exact path="/Main/Olculerim" 
              render={props => {
                return <OlculerimScreen
                  {...props}
                />
              }}
          />  
             <Route 
              // path="/Main/Olculerim" 
              exact path="/Main/Hedeflerim" 
              render={props => {
                return <GoalsSreen
                  {...props}
                />
              }}
            /> 
         <Route  
              exact path="/Main/Chat"
              render={props => {
                return <MainChatScreen
                  {...props}
                />
              }}
            /> 
        <Route  
              exact path="/Main/Olculerim/BodyMesaurment" 
              render={props => {
                return <BodyMeasurments
                  {...props}
                />
              }}
            /> 
            <Route  
              exact path="/Main/Olculerim/BilekÇevresi" 
              render={props => {
                return <WristMeasurment
                  {...props}
                />
              }}
            /> 
         <Route 
              // path="/Main/Olculerim" 
              exact path="/Main/Olculerim/BelÇevresi" 
              render={props => {
                return <BellyMeasurment
                  {...props}
                />
              }}
            /> 
          <Route 
              // path="/Main/Olculerim" 
              exact path="/Main/Olculerim/BazalMetabolizma" 
              render={props => {
                return <MetabolizimScreen
                  {...props}
                />
              }}
            /> 
           <Route  
              exact path="/Main/Olculerim/GünlükEnerji" 
              render={props => {
                return <EnergyScreen
                  {...props}
                />
              }}
            /> 
           <Route 
              // path="/Main/Olculerim" 
              exact path="/Main/Olculerim/FizikselAktivite" 
              render={props => {
                return <PhysicActivityScreen
                  {...props}
                />
              }}
            /> 
        <Route 
              // path="/Main/Olculerim" 
              exact path="/Main/Olculerim/EgzersizSüresi" 
              render={props => {
                return <ExerciseTimeScreen
                  {...props}
                />
              }}
            /> 
           <Route 
              // path="/Main/Olculerim" 
              exact path="/Main/Olculerim/YağYakma" 
              render={props => {
                return <FatBurningScreen
                  {...props}
                />
              }}
            /> 
        <Route 
              // path="/Main/Olculerim" 
              exact path="/Main/Olculerim/UykuZaman" 
              render={props => {
                return <SleepDurationScreen
                  {...props}
                />
              }}
            /> 
             <Route 
              // path="/Main/Olculerim" 
              exact path="/Main/Store" 
              render={props => {
                return <MainStoreScreen
                  {...props}
                />
              }}
            /> 
          
            <Route 
              exact path="/SideBar" 
              render={props => {
                return <SideBar
                  {...props}
                />
              }}
            />  
                <Route 
              exact path="/Main/SaglikGecmisim" 
              render={props => {
                return <HealthHistoryScreen
                  {...props}
                />
              }}
            />   
            <Route 
              exact path="/chat/VideoCallScreen" 
              render={props => {
                return <VideoCallScreen
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