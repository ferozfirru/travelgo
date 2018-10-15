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
            
        <SliderView style={{backgroundColor: 'orange'}} title="Popular places around the world" navigation={this.props.navigation}
        imgWH = {imagewh}
        thisval = "trend"
        />
        
        )
    }
}
export default Trendview;