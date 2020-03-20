import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native'; 
// import HomeScreen from '../../../src/screens/HomeScreen'
import BreakfastContainer from './BreakfastContainer'
import LunchContainer from './LunchContainer'
import ExtraContainer from './ExtraContainer'
import DinnerContainer from './DinnerContainer'
import SnackContainer from './SnackContainer'  
import SleepContainer from './SleepContainer'
import ExercisesContainer from './ExercisesContainer'    
import { ScrollView } from 'react-native-gesture-handler' 
const halfheight = Dimensions.get('window').height 
 
export default class MealsStack extends React.Component {
    constructor(props){ 
        super(props);  
    }
    state={
      visibilty : false
    }
    
    settingVisibility = () =>{ 
      // this.setState({visibilty:true})
    }
  render()  
  {    
    return( 

            <View style={{ flex:1, backgroundColor: 'transparent' ,height:'100%' ,width:'100%',zIndex:1}}>

            <ScrollView  showsVerticalScrollIndicator={false}  style={{ flex:1, backgroundColor: 'transparent' ,height:'100%',marginTop:-60  ,width:'100%',marginBottom :50,zIndex:1}}>    

                <BreakfastContainer
                  breakfastData={this.props.MealsData ? this.props.MealsData.breakfast: []}
                  // settingVisibility = {this.settingVisibility}
                  // DaysData = {this.props.DaysData}
                />

                <LunchContainer
                  lunchData={ this.props.MealsData ? this.props.MealsData.lunch : []}  
                  // settingVisibility = {this.settingVisibility}
                  // DaysData = {this.props.DaysData}
                />

                <DinnerContainer
                  dinnerData={this.props.MealsData ?  this.props.MealsData.dinner : []}
                  // settingVisibility = {this.settingVisibility}
                  // DaysData = {this.props.DaysData}
                />

                <SnackContainer
                  apperativeData = {this.props.MealsData ? this.props.MealsData.middle_aperatif1 : []}
                  // settingVisibility = {this.settingVisibility}
                  // DaysData = {this.props.DaysData}
                />

                <SnackContainer
                  apperativeData = {this.props.MealsData ? this.props.MealsData.middle_aperatif2: []}
                  // settingVisibility = {this.settingVisibility}
                  // DaysData = {this.props.DaysData}
               /> 

                <ExtraContainer
                  extraData  = {this.props.MealsData ? this.props.MealsData.extra: []}
                  // settingVisibility = {this.settingVisibility}
                  // DaysData = {this.props.DaysData}
                />

                {/* <SleepContainer
                  sleepData = {this.props.MealsData ? this.props.MealsData['user_sleeps']: []}
                  settingVisibility = {this.settingVisibility}
                  DaysData = {this.props.DaysData}
                />  */}

                

            </ScrollView>

             
            </View>
 
    )
  }
}
const styles = StyleSheet.create({ 

  });