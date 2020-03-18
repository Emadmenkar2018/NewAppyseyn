import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native'; 
import Container from './Container'   
import { ScrollView } from 'react-native-gesture-handler'

const halfheight = Dimensions.get('window').height 
 
export default class OlculerStack extends React.Component {
    constructor(props){ 
        super(props);  
    }
  render()  
  {    
    return( 

            // <View style={{ flex:1, backgroundColor: 'transparent' ,height:'100%' ,width:'100%'}}>

                <ScrollView  showsVerticalScrollIndicator={false}  style={{ flex:1, backgroundColor: 'transparent' ,height:'100%' ,width:'100%',marginBottom:10,marginTop:-60,zIndex:1}}>     

                    <Container
                    headtext='Beden Kitle Indeksi'
                    imagePlaceholder='body'
                    type='add'
                    prefix='Olculerim/BodyMesaurment'
                    />

                    <Container
                    headtext='Bilek Çevresi'
                    imagePlaceholder='hand'
                    type='add'
                    prefix='Olculerim/BilekÇevresi'
                    />

                    <Container
                    headtext='Bel Çevresi değerlendirme'
                    imagePlaceholder='belly'
                    type='add'
                    prefix='Olculerim/BelÇevresi'
                    />

                    <Container
                    headtext='Bazal Metabolizma Hızı'
                    imagePlaceholder='Metabolizm'
                    type='add'
                    prefix='Olculerim/BazalMetabolizma'
                    />

                    <Container
                    headtext='Günlük Enerji Ihtiyacı'
                    imagePlaceholder='Energy'
                    type='add'
                    prefix='Olculerim/GünlükEnerji'
                    /> 

                    <Container
                    headtext='Fiziksel Aktivite ve Harcanan Enerji'
                    imagePlaceholder='Fizik'
                    type='add'
                    prefix='Olculerim/FizikselAktivite'
                    />

                    <Container
                    headtext='Egzersiz Süresi'
                    imagePlaceholder='exercise'
                    type='add'
                    prefix='Olculerim/EgzersizSüresi'
                    />

                    <Container
                    headtext='Yağ Yakma Nabzı'
                    imagePlaceholder='fat'
                    type='add'
                    prefix='Olculerim/YağYakma'
                    />

                    <Container
                    headtext='Uyku Süresi'
                    imagePlaceholder='sleep'
                    type='add'
                    prefix='Olculerim/UykuZaman'
                    />

                </ScrollView>
            // </View>
 
    )
  }
}
const styles = StyleSheet.create({ 

  });