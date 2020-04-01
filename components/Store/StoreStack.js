import React ,{Component,useEffect,useState} from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native'; 
import ContainerStore from './ContainerStore'   
import { ScrollView } from 'react-native-gesture-handler'
import {_fetchProductsFromApi} from '../../utils/requests'
import NetInfo from "@react-native-community/netinfo";
const halfheight = Dimensions.get('window').height 
 
  const  StoreStack = () =>{ 

  const [ productsData, setProductsData] = useState('') 

  useEffect(() => {
    fetchProducts()
  }, []) 
      
    const fetchProducts = ()=>{
      NetInfo.fetch().then(state => {
        if (state.isConnected) { 
          _fetchProductsFromApi().then(response =>{ 
            setProductsData( response.data ) 
          }).catch(err => {
            console.log('err',err)
          })
        }
        else {
             props.setAlertMessege('Internet erisim yok') 
           
          } 
        });   
    } 
       
    let ProductsList=[] 
    if(productsData !== ''){
      ProductsList = productsData.map(product => (
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

export default StoreStack