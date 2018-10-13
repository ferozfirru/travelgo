import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import SliderView from './SliderView';

class Trendview extends React.Component{
    render(){
        console.log(this.props);
        return(
            
        <SliderView title="Popular places around the world" navigation={this.props.navigation} />
        
        )
    }
}
export default Trendview;