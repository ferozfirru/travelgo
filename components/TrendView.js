import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import SliderView from './SliderView';

const imagewh ={
    width: 200,
    height: 100
}
class Trendview extends React.Component{
  
    render(){
        return(
        <View style={{marginTop: 10}} >
        <SliderView title="Popular places around the world" navigation={this.props.navigation}
        imgWH = {imagewh}
        thisval = "trend"
        />
        </View>
        )
    }
}
export default Trendview;