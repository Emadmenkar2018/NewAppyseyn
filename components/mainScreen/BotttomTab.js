import React, { memo ,useState} from 'react';
import { View } from 'react-native'; 
import { Icon } from 'react-native-elements' 
import TabBar , { iconTypes }from 'react-native-fluidbottomnavigation'

const BotttomTab = ({ label, errorText,inputText,type,pageIndex, ...props }) => { 
 
    const [curTab1, setCurTab1] = useState(pageIndex ===0 ? true : false)
    const [curTab2, setCurTab2] = useState(pageIndex ===1 ? true : false)
    const [curTab3, setCurTab3] = useState(pageIndex ===2 ? true : false)
    const [curTab4, setCurTab4] = useState(pageIndex ===3 ? true : false)

    // getPageIndex = 
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
 
                { title: "", icon: "receipt",  isIcon: true, iconType: iconTypes.MaterialIcons,default: curTab1? true :false},

                { title: "", icon: "calendar-check",   isIcon: true, iconType: iconTypes.FontAwesome5,default: curTab2? true :false},

                { title: "", icon: "accessibility",   isIcon: true, iconType: iconTypes.MaterialIcons,default: curTab3? true :false},

                { title: "", icon: "apple-alt",   isIcon: true, iconType: iconTypes.FontAwesome5,default: curTab4? true :false },
              ]}
          />
      </View>
    )
};
   
export default memo(BotttomTab);