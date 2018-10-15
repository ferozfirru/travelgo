import React from 'react';
import { View, Text } from 'react-native';
import SliderView from './SliderView';

const imagewh ={
    width: 250,
    height: 100
}

class SpecialView extends React.Component{
render(){
return(
    
    <SliderView title="Special Places" 
    imgWH = {imagewh}
    thisval = "special"
    />
)
}
}
export default SpecialView;

const styles = {
    main:{
        backgroundColor: 'green'
    }
}