import React from 'react';
import { View, Text } from 'react-native';
import {Card, Avatar} from 'react-native-elements';
class NearmeView extends React.Component{
render(){
return(
    <Card containerStyle={{paddingTop:10,paddingBottom:10}}>
        <Avatar
        size="small"
        rounded
        source={{uri: "https://www.incase.com/media/images/icons/gray/profile.png"}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        />
        <Avatar
        size="small"
        rounded
        source={{uri: "https://www.incase.com/media/images/icons/gray/profile.png"}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        />
        <Avatar
        size="small"
        rounded
        source={{uri: "https://www.incase.com/media/images/icons/gray/profile.png"}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        />
           <Avatar
        size="small"
        rounded
        source={{uri: "https://www.incase.com/media/images/icons/gray/profile.png"}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        />
    </Card>
)
}
}
export default NearmeView;

const styles = {
    main:{
        backgroundColor: 'green'

    }
}