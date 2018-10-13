import React from 'react';
import { View, Text } from 'react-native';
import SliderView from './SliderView';


class SpecialView extends React.Component{
render(){
return(
    <SliderView title="Special Places" />
)
}
}
export default SpecialView;

const styles = {
    main:{
        backgroundColor: 'green'
    }
}