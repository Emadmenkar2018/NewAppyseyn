import React , {Component} from 'react';
import {view} from 'react-native';
import PushNotification from 'react-native-push-notification'


export default class PushController extends Component {

    componentDidMount(){
        PushNotification.configure({
            onNotification : function(notification){
                console.log('notification',notification)
            }
        })
    }

    render (){
        return null;
    }
}