import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native'; 
import ContainerStore from './ContainerStore'   
import { ScrollView } from 'react-native-gesture-handler'
import {_fetchProductsFromApi} from '../../utils/requests'
import NetInfo from "@react-native-community/netinfo";
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
      NetInfo.fetch().then(state => {
        if (state.isConnected) { 
          _fetchProductsFromApi().then(response =>{ 
            this.setState({productsData:response.data})
          }).catch(err => {
            console.log('err',err)
          })
        }
        else {
            this.props.setAlertMessege('Internet erisim yok') 
           
          } 
        });   
    } 
    
  render()  
  {    
    let ProductsList=[] 
    if(this.state.productsData !== ''){
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

                <ScrollView  showsVerticalScrollIndicator={false}  style={{ flex:1, backgroundColor: 'transparent' ,height:'100%' ,width:'100%',marginVertical:20,paddingHorizontal:15 ,zIndex:1}}>     

                    {ProductsList} 
 
                </ScrollView> 
 
    )
  }
}