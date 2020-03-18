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

            <ScrollView  showsVerticalScrollIndicator={false}  style={{ flex:1, backgroundColor: 'transparent' ,height:'100%',marginTop:-60  ,width:'100%',marginBottom :50,zIndex:1}}>     

                {/* <Container
                  headtext='Beslenme Programı'
                  imagePlaceholder='calendar'
                  type='go'
                /> */}

                <Container
                   
                  headtext='Ölçülerim'
                  imagePlaceholder='ruler'
                  type='go'
                  prefix = 'Olculerim'
                />

                <Container
                   
                  headtext='Hedeflerim'
                  imagePlaceholder='hedef'
                  type='go'
                  prefix = 'Hedeflerim'
                />

                <Container
                   
                  headtext='Öncesi Sonrasi'
                  imagePlaceholder='exercise'
                  type='go'
                  prefix = 'OncesiSonrasi'
                />

                <Container
                   
                  headtext='Sağlık Geçmişim'
                  imagePlaceholder='heart'
                  type='go'
                  prefix = 'SaglikGecmisim'
                /> 

            </ScrollView>
            </View>
 
    )
  }
}
const styles = StyleSheet.create({ 

  });