import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native'; 
import ContainerStore from './ContainerStore'   
import { ScrollView } from 'react-native-gesture-handler'
import {_fetchProductsFromApi} from '../../utils/requests'

const halfheight = Dimensions.get('window').height 
 
export default class StoreStack extends React.Component {
    constructor(props){ 
        super(props);  
    }

    state={
      productsData:[]
    }

    componentDidMount() {
      this.fetchProducts()
     }
      
    fetchProducts = ()=>{
      _fetchProductsFromApi().then(response =>{ 
        this.setState({productsData:response.data})
      }).catch(err => {
        console.log('err',err)
      })
    }

    
  render()  
  {    
    let ProductsList=[] 
    if(this.state.ProfileData !== ''){
      ProductsList = this.state.productsData.map(product => (
        <ContainerStore key={product.id}
          headtext={product.title} 
          imagePlaceholder={product.type ==='packet'? 'ozelcalender': 'body'}
          type={product.type}
          price ={product.price}
          prefix='Olculerim/BilekÇevresi'
          firstcolor={product.type ==='packet'? '#3A91EC': '#12A5BF'}
          secondcolor={product.type ==='packet'? '#426ED9': '#12B8BF'}
        /> 
      ));
    }

    return( 
            // <View style={{ flex:1, backgroundColor: 'transparent' ,height:'100%' ,width:'100%'}}>

                <ScrollView  showsVerticalScrollIndicator={false}  style={{ flex:1, backgroundColor: 'transparent' ,height:'100%' ,width:'100%',marginVertical:20,paddingHorizontal:15 ,zIndex:1}}>     

                    {ProductsList}
                    {/* <ContainerStore
                    headtext='Özel Medikal Ürün'
                    imagePlaceholder='body'
                    type='ürün'
                    prefix='Olculerim/BodyMesaurment'
                    firstcolor='#12A5BF'
                    secondcolor='#12B8BF'
                    />

                    <ContainerStore
                    headtext='4 Gün İçin Paketimiz' 
                    imagePlaceholder='ozelcalender'
                    type='packet'
                    prefix='Olculerim/BilekÇevresi'
                    firstcolor='#3A91EC'
                    secondcolor='#426ED9'
                    />  */}

                </ScrollView>
            // </View>
 
    )
  }
}