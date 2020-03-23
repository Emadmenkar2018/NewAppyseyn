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
                exact path="/" 
                render={props => {
                  return <LoginScreen
                    {...props}
                  />
                }}
              />  
          <Route  
              exact path="/Register" 
              render={props => {
                return <RegisterScreen
                  {...props}
                />
              }}
            />  
          <Route  
              exact path="/Register/Steps" 
              render={props => {
                return <StepsScreen
                  {...props}
                />
              }}
            />  
          <Route  
              exact path="/Main" 
              render={props => {
                return <MainScreen
                  {...props}
                />
              }}
            />  
        <Route  
            exact path="/Main/BanaOzel/OncesiSonrasi" 
            render={props => {
              return <BeforeAfterScreen
                {...props}
              />
            }}
          />  
        <Route  
              exact path="/Main/BanaOzel/Olculerim" 
              render={props => {
                return <OlculerimScreen
                  {...props}
                />
              }}
          />  
             <Route  
              exact path="/Main/BanaOzel/Hedeflerim" 
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
              exact path="/Main/BanaOzel/Olculerim/BodyMesaurment" 
              render={props => {
                return <BodyMeasurments
                  {...props}
                />
              }}
            /> 
            <Route  
              exact path="/Main/BanaOzel/Olculerim/BilekÇevresi" 
              render={props => {
                return <WristMeasurment
                  {...props}
                />
              }}
            /> 
         <Route 
               
              exact path="/Main/BanaOzel/Olculerim/BelÇevresi" 
              render={props => {
                return <BellyMeasurment
                  {...props}
                />
              }}
            /> 
          <Route  
              exact path="/Main/BanaOzel/Olculerim/BazalMetabolizma" 
              render={props => {
                return <MetabolizimScreen
                  {...props}
                />
              }}
            /> 
           <Route  
              exact path="/Main/BanaOzel/Olculerim/GünlükEnerji" 
              render={props => {
                return <EnergyScreen
                  {...props}
                />
              }}
            /> 
           <Route  
              exact path="/Main/BanaOzel/Olculerim/FizikselAktivite" 
              render={props => {
                return <PhysicActivityScreen
                  {...props}
                />
              }}
            /> 
        <Route  
              exact path="/Main/BanaOzel/Olculerim/EgzersizSüresi" 
              render={props => {
                return <ExerciseTimeScreen
                  {...props}
                />
              }}
            /> 
           <Route  
              exact path="/Main/BanaOzel/Olculerim/YağYakma" 
              render={props => {
                return <FatBurningScreen
                  {...props}
                />
              }}
            /> 
        <Route  
              exact path="/Main/BanaOzel/Olculerim/UykuZaman" 
              render={props => {
                return <SleepDurationScreen
                  {...props}
                />
              }}
            /> 
             <Route  
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
              exact path="/user/RecieveVideoCall" 
              render={props => {
                return <RecieveVideoCall
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