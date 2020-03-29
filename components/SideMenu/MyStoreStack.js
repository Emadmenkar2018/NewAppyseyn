import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native'; 
import MyContainerStore from './MyContainerStore'   
import { ScrollView } from 'react-native-gesture-handler'
import {_fetchMyProductsFromApi} from '../../utils/requests'

const halfheight = Dimensions.get('window').height 
 
export default class MyStoreStack extends React.Component {
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
      _fetchMyProductsFromApi().then(response =>{ 
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
        <MyContainerStore key={product.id}
          headtext={product.title} 
          imagePlaceholder={product.type ==='packet'? 'ozelcalender': 'body'}
          type={product.type}
          price ={product.price}
          prefix='Olculerim/BilekÇevresi'
          date= {product.created_at}
          firstcolor={product.type ==='packet'? '#3A91EC': '#12A5BF'}
          secondcolor={product.type ==='packet'? '#426ED9': '#12B8BF'}
        /> 
      ));
    }

    return( 
            // <View style={{ flex:1, backgroundColor: 'transparent' ,height:'100%' ,width:'100%'}}>

                <ScrollView  showsVerticalScrollIndicator={false}  style={{ flex:1, backgroundColor: 'transparent' ,height:'100%' ,width:'100%',marginVertical:20,paddingHorizontal:15 ,zIndex:1}}>     

                    {ProductsList} 

                </ScrollView>
            // </View>
 
    )
  }
}