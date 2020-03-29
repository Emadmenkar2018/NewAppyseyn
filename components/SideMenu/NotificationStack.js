import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native'; 
import NotificationContainer from './NotificationContainer'   
import { ScrollView } from 'react-native-gesture-handler'
import {_fetchMyProductsFromApi} from '../../utils/requests'
import {_fetchLastNotification} from '../../utils/requests'
const halfheight = Dimensions.get('window').height 
 
export default class NotificationStack extends React.Component {
    constructor(props){ 
        super(props);  
    }

    state={
      notifications : ''
    }

    componentDidMount() {
      this.fetchNotification()
     }
      
     fetchNotification = () => {
      _fetchLastNotification().then(response =>{  
        console.log('response ', response.data)
          this.setState({
            notifications:  response.data 
          })
          
      }).catch( err =>
          console.log('err',err)
      )
    } 

    
  render()  
  {    
    let notificationList=[] 
    console.log('this.state.notifications',this.state.notifications)
    if(this.state.notifications !== ''){ 
      console.log('this.state.notifications',this.state.notifications)
      notificationList = this.state.notifications.map(notification => (
        <NotificationContainer key={notification.id}
          headtext={notification.type} 
          // imagePlaceholder={notification.type ==='packet'? 'ozelcalender': 'body'}
          type={notification.type}
          text ={notification.text}
          prefix='Olculerim/BilekÇevresi'
          date= {notification.created_at}
          // firstcolor={notification.type ==='packet'? '#3A91EC': '#12A5BF'}
          // secondcolor={notification.type ==='packet'? '#426ED9': '#12B8BF'}
        /> 
      ));
    }

    return( 
            // <View style={{ flex:1, backgroundColor: 'transparent' ,height:'100%' ,width:'100%'}}>

                <ScrollView  showsVerticalScrollIndicator={false}  style={{ flex:1, backgroundColor: 'transparent' ,height:'100%' ,width:'100%',marginVertical:20,paddingHorizontal:15 ,zIndex:1}}>     

                    {notificationList} 

                </ScrollView>
            // </View>
 
    )
  }
}