import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

const ICON_SIZE = {width: 24, height: 24};
const GUTTER = 10;

function Header(){
    return (
        <>
            {/* ***************************
                      TOP BANNER
            ******************************/}
            <View>
              <Image 
                source={require("../assets/2618_Mobile_banner_ABA.png")} 
                style={{width: "100%", height: "auto", aspectRatio: 728/90}}
              />
            </View>

            {/* ***************************
                       LOGO BAR 
            ******************************/}
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center" ,paddingHorizontal: GUTTER, paddingVertical: 5,}}>
              <Image 
                source={require("../assets/icons/menu.png")} 
              />
              <Text style={{marginLeft: -20}}>English</Text>
              <Image 
                source={require("../assets/logo-mb.png")} 
                {...ICON_SIZE}
              />
              <Image 
                source={require("../assets/icons/call-phone.png")} 
                {...ICON_SIZE}
                style={{marginRight: -20}}
              />
              <Image 
                source={require("../assets/icons/moon.png")} 
                {...ICON_SIZE}
              />
            </View>
        </>
    );
}

export default Header;