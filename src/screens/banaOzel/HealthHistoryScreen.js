import React from 'react';
import { StyleSheet,   View  } from 'react-native';
import HealthForm from '../../../components/Banaozel/HealthHistory/HealthForm' 
import DefaultBackground from '../../../components/Banaozel/HealthHistory/DefaultBackground'    
import {_uploadFileApi, _addMedicalApi} from '../../../utils/requests'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class HealthHistoryScreen extends React.Component {
    constructor(props){ 
        super(props);  
    }

    state={
        firstinput:'',
        secondinput:'',
        thirdinput:'',
        surgery:'',
        medical:''
    }

    savebtn = ()=>{
        

        if (this.state.firstinput){
            let bodyFormData = new FormData();   
            bodyFormData.append('file', {
              uri: this.state.firstinput.uri,
              type:  this.state.firstinput.type,
              name: this.state.firstinput.name
            }); 
            bodyFormData.append('type','blood'); 
            bodyFormData.append('content_type',this.state.firstinput.type); 
            _uploadFileApi(bodyFormData).then(response=>{ 
              console.log('sent successfully',response)
             
            }).catch(err => {
              console.log('err',err)
            })
        }
        if (this.state.secondinput){
            let bodyFormData = new FormData();   
            bodyFormData.append('file', {
              uri: this.state.secondinput.uri,
              type:  this.state.secondinput.type,
              name: this.state.secondinput.name
            }); 
            bodyFormData.append('type','blood');  
            bodyFormData.append('content_type',this.state.secondinput.type);
            _uploadFileApi(bodyFormData).then(response=>{ 
              console.log('sent successfully',response)
             
            }).catch(err => {
              console.log('err',err)
            })
        }
        if (this.state.thirdinput){
            let bodyFormData = new FormData();   
            bodyFormData.append('file', {
              uri: this.state.thirdinput.uri,
              type:  this.state.thirdinput.type,
              name: this.state.thirdinput.name
            });
            bodyFormData.append('type','blood'); 
            bodyFormData.append('content_type',this.state.thirdinput.type);
            _uploadFileApi(bodyFormData).then(response=>{ 
              console.log('sent successfully',response)
             
            }).catch(err => {
              console.log('err',err)
            })
        }  
        if (this.state.surgery){
            let bodyFormData = new FormData();    
            bodyFormData.append('content',this.state.surgery); 
            bodyFormData.append('type','surgery'); 
            _addMedicalApi(bodyFormData).then(response=>{ 
              console.log('sent successfully',response)
             
            }).catch(err => {
              console.log('err',err)
            })
        }

        if (this.state.surgery){
            let bodyFormData = new FormData();    
            bodyFormData.append('content',this.state.medical); 
            bodyFormData.append('type','medical'); 
            _addMedicalApi(bodyFormData).then(response=>{ 
              console.log('sent successfully',response)
             
            }).catch(err => {
              console.log('err',err)
            })
        }

        this.props.history.goBack();


    }

    handleFirstInput = (input) =>{
        this.setState({firstinput:input})
    }

    handleSecondInput=(input) =>{
        this.setState({secondinput:input})
    }

    handleThirdInput=(input) =>{
        this.setState({thirdinput:input})
    }

    handleSurgery=(input) =>{
        this.setState({surgery:input})
    }

    handleMedical=(input) =>{
        this.setState({medical:input})
    }

  render()  
  {    
    console.log('dasd',this.props)
    return( 
     
        <View style={{ flex:1,backgroundColor:'#fff',zIndex:0}}>

            <DefaultBackground
                savebtn={this.savebtn}
                firstColor='#fff'
                secondColor='#fff'
            />    
            
            <KeyboardAwareScrollView
              innerRef={ref => {
                this.scroll = ref
              }}>

              <View style={{ flex:1, backgroundColor: '#fff' , height:'100%',width:'100%' ,zIndex:100}}>     
          


                  <HealthForm 
                      setfirstinput={this.handleFirstInput}
                      setsecondinput={this.handleSecondInput}
                      setthirdinput={this.handleThirdInput}
                      setsurgery={this.handleSurgery}
                      setmedical={this.handleMedical}
                  
                  /> 

            

              </View>

              </KeyboardAwareScrollView>
        </View>
 
     

    )
  }
}
const styles = StyleSheet.create({ 

  });