import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native'; 
// import HomeScreen from '../../../src/screens/HomeScreen'
import AddBreakfast from './AddBreakfast'
import AddLunch from './AddLunch'
import AddWater from './AddWater'
import AddDinner from './AddDinner'
import AddSnack from './AddSnack' 
import AddSleep from './AddSleep'
import AddExercises from './AddExercises'   
import { Icon } from 'react-native-elements' 
import { ScrollView } from 'react-native-gesture-handler'
import AddMealModal from './AddMealModal'
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

                <AddBreakfast
                  breakfastData={this.props.MealsData ? this.props.MealsData['user_breakfasts'] : []}
                  // settingVisibility = {this.settingVisibility}
                  DaysData = {this.props.DaysData}
                />

                <AddLunch
                  lunchData={ this.props.MealsData ? this.props.MealsData['user_lunches'] : []}  
                  settingVisibility = {this.settingVisibility}
                  DaysData = {this.props.DaysData}
                />

                <AddDinner
                  dinnerData={this.props.MealsData ?  this.props.MealsData['user_dinners'] : []}
                  settingVisibility = {this.settingVisibility}
                  DaysData = {this.props.DaysData}
                />

                <AddSnack
                  apperativeData = {this.props.MealsData ? this.props.MealsData['user_apperatives'] : []}
                  settingVisibility = {this.settingVisibility}
                  DaysData = {this.props.DaysData}
                />

               <AddExercises
                  exercisesData = {this.props.MealsData ? this.props.MealsData['user_exercises']: []}
                  settingVisibility = {this.settingVisibility}
                  DaysData = {this.props.DaysData}
               /> 

                <AddWater
                  waterData  = {this.props.MealsData ? this.props.MealsData['user_waters']: []}
                  settingVisibility = {this.settingVisibility}
                  DaysData = {this.props.DaysData}
                />

                <AddSleep
                  sleepData = {this.props.MealsData ? this.props.MealsData['user_sleeps']: []}
                  settingVisibility = {this.settingVisibility}
                  DaysData = {this.props.DaysData}
                /> 

                

            </ScrollView>

            
            {/* <AddMealModal
                // visiblity = {this.state.visibilty}
              /> */}
            </View>
 
    )
  }
}
const styles = StyleSheet.create({ 

  });