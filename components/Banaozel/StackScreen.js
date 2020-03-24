import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native'; 
import Container from './Container'   
import { ScrollView } from 'react-native-gesture-handler'

const halfheight = Dimensions.get('window').height 
 
export default class StackScreen extends React.Component {
    constructor(props){ 
        super(props);  
    }
    
  render()  
  {     
    return( 

            <View style={{ flex:1, backgroundColor: 'transparent' ,height:'100%' ,width:'100%'}}>

            <ScrollView  showsVerticalScrollIndicator={false}  style={{ flex:1, backgroundColor: 'transparent' ,height:'100%',marginTop:-30  ,width:'100%',marginBottom :50,zIndex:1}}>     

                {/* <Container
                  headtext='Beslenme Programı'
                  imagePlaceholder='calendar'
                  type='go'
                /> */}

                <Container
                   setMainPAgeIndex={this.props.setMainPAgeIndex}
                  headtext='Ölçülerim'
                  imagePlaceholder='ruler'
                  type='go'
                  prefix = 'Olculerim'
                  history = {this.props.history}
                  {...this.props}
                />

                <Container
                    setMainPAgeIndex={this.props.setMainPAgeIndex}
                  headtext='Hedeflerim'
                  imagePlaceholder='hedef'
                  type='go'
                  prefix = 'Hedeflerim'
                  history = {this.props.history}
                  {...this.props}
                />

                <Container
                    setMainPAgeIndex={this.props.setMainPAgeIndex}
                  headtext='Öncesi Sonrasi'
                  imagePlaceholder='exercise'
                  type='go'
                  prefix = 'OncesiSonrasi'
                  history = {this.props.history}
                  {...this.props}
                />

                <Container
                    setMainPAgeIndex={this.props.setMainPAgeIndex}
                  headtext='Sağlık Geçmişim'
                  imagePlaceholder='heart'
                  type='go'
                  prefix = 'SaglikGecmisim'
                  history = {this.props.history}
                  {...this.props}
                /> 

            </ScrollView>
            </View>
 
    )
  }
}
const styles = StyleSheet.create({ 

  });