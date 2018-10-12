import React from 'react';
import { View, Image, Text } from 'react-native';

import { Avatar, Card } from 'react-native-elements';

class ProfileView extends React.Component {
    render() {
        return(
           <Card containerStyle={{ padding:0, flexDirection:"row" }}>
            <Avatar
      large
      
      source={{uri: "https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png"}}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    //   containerStyle={{ width:100}}
    />
    <Text style={{flex: 2}}>123</Text>
            </Card>
           /* <View title="Testing" style={styles.profileStyle}>
            <View style={{backgroundColor:'#005500',flex:1 }}>
            <Image style={styles.imageStyle} source={{ uri:'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png' }}></Image>
            </View>
            <View style={{backgroundColor:'#005599',flex:2}}>
                <Text>Feroz Akbar</Text>
                <Text>Feroz Akbar</Text>
                <Text>Feroz Akbar</Text>
            </View>
            </View>*/
        );
    }
}
const styles = {
    profileStyle: {
        
        flex:1,
justifyContent: 'space-around',
        flexDirection: 'row',
        //flexWrap: 'wrap',
        backgroundColor: 'red',
// alignItems: 'flex-start'
    },
    imageStyle : {
        width: 100,
        height: 100,
         
    },
    cardStyle : {
        padding: 1,
        margin: 0
    }
};
export default ProfileView;
