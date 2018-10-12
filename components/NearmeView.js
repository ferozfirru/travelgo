import React from 'react';
import { View, Text } from 'react-native';

class NearmeView extends React.Component{
render(){
return(
    <View style={styles.main}>
    <Text>123</Text>
    </View>
)
}
}
export default NearmeView;

const styles = {
    main:{
        backgroundColor: 'green'

    }
}