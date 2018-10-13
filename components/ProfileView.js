import React from 'react';
import { View, Image, Text } from 'react-native';

import { Avatar, Card } from 'react-native-elements';

class ProfileView extends React.Component {
    render() {
        return(
           <View title="Testing" style={styles.profileStyle}>
            <View style={styles.viewSub}>
                <Image style={styles.imageStyle} source={{ uri:'https://www.incase.com/media/images/icons/gray/profile.png' }}></Image>
            </View>
            <View style={styles.viewSub}>
                <Text>Feroz Akbar</Text>
                <Text>Feroz Akbar</Text>
                <Text>Feroz Akbar</Text>
            </View>
        </View>
        );
    }
}
const styles = {
    viewSub:{
        margin:4
    },
    profileStyle: {
        padding:10,
        marginLeft:15,
        marginRight:15,
        //flex:1,
//justifyContent: 'space-around',
        flexDirection: 'row',
        //flexWrap: 'wrap',
        backgroundColor: 'white',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
// alignItems: 'flex-start'
    },
    imageStyle : {
        width: 70,
        height: 70,
         
    },
    cardStyle : {
        padding: 1,
        margin: 0
    }
};
export default ProfileView;
