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
        padding:8,
        marginLeft:5,
        marginRight:5,
        /*borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',*/
        //flex:1,
//justifyContent: 'space-around',
        flexDirection: 'row',
        //flexWrap: 'wrap',
        backgroundColor: 'white',
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
