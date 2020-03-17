import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native'; 
import Container from './Container'   
import { ScrollView } from 'react-native-gesture-handler'

const halfheight = Dimensions.get('window').height 
 
export default class MesaurmentsScreen extends React.Component {
    constructor(props){ 
        super(props);  
    }
  render()  
  {    
    return( 

            <View style={{ flex:1, backgroundColor: 'transparent' ,height:'100%' ,width:'100%'}}>

            <ScrollView  showsVerticalScrollIndicator={false}  style={{ flex:1, backgroundColor: 'transparent' ,height:'100%',marginTop:-60  ,width:'100%',paddingBottom :20}}>    

                <Container
                  headtext='Beden Kitle Indeksi'
                  imagePlaceholder='body'
                  type='add'
                />

                <Container
                 headtext='Bilek Çevresi'
                 imagePlaceholder='hand'
                 type='add'
                />

                <Container
                  headtext='Bel Çevresi değerlendirme'
                  imagePlaceholder='belly'
                  type='add'
                />

                <Container
                  headtext='Bazal Metabolizma Hızı'
                  imagePlaceholder='Metabolizm'
                  type='add'
                />

                <Container
                  headtext='Günlük Enerji Ihtiyacı'
                  imagePlaceholder='Energy'
                  type='add'
                /> 

                <Container
                  headtext='Fiziksel Aktivite ve Harcanan Enerji'
                  imagePlaceholder='Fizik'
                  type='add'
                />

                <Container
                  headtext='Egzersiz Süresi'
                  imagePlaceholder='exercise'
                  type='add'
                />

                <Container
                  headtext='Yağ Yakma Nabzı'
                  imagePlaceholder='fat'
                  type='add'
                />

                <Container
                  headtext='Uyku Süresi'
                  imagePlaceholder='sleep'
                  type='add'
                />

            </ScrollView>
            </View>
 
    )
  }
}
const styles = StyleSheet.create({ 

  });