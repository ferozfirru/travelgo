import React from 'react';
import { View, Text } from 'react-native';

class SpecialView extends React.Component{
render(){
return(
    <View style={styles.main}>
    <Text>123</Text>
    </View>
)
}
}
export default SpecialView;

const styles = {
    main:{
        backgroundColor: 'green'
    }
}