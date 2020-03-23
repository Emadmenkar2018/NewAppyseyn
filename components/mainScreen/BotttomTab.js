import React, { memo ,useState} from 'react';
import { View } from 'react-native'; 
import { Icon } from 'react-native-elements' 
import TabBar , { iconTypes }from 'react-native-fluidbottomnavigation'

const BotttomTab = ({ label, errorText,inputText,type, ...props }) => { 
 
    const [curTab, setCurTab] = useState(0)
  return ( 
      <View style={{position :'absolute', width:'100%', bottom:0 ,borderTopColor:'#efefef',borderTopWidth:2}}>
          <TabBar
              iconStyle={{ width: 50, height: 50 ,backgroundColor:'transparent',zIndex:1}}
            //   tintColor='#000'
              tintColor="rgba(0,0,0,.9)"
              itemMaskBackgroundColor={'#999'}
              onPress={(tabIndex) => {
                props.getCurrentpage(tabIndex);
              }}
              isRtl={ true }
              values={[ 
 
                { title: "", icon: "receipt", tintColor: curTab == 1 ? "red" : "blue", isIcon: true, iconType: iconTypes.MaterialIcons,},

                { title: "", icon: "calendar-check", tintColor: curTab == 2? "red" : "blue", isIcon: true, iconType: iconTypes.FontAwesome5,},

                { title: "", icon: "accessibility", tintColor: curTab == 3 ? "red" : "blue", isIcon: true, iconType: iconTypes.MaterialIcons,},

                { title: "", icon: "apple-alt", tintColor: curTab == 4 ? "red" : "blue", isIcon: true, iconType: iconTypes.FontAwesome5,default: true },
              ]}
          />
      </View>
    )
};
   
export default memo(BotttomTab);