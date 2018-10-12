import React from 'react';
import { View, Text, Image } from 'react-native';

import Carousel from 'react-native-snap-carousel';

class Trendview extends React.Component{

    constructor(props){
        super();
        this.state = {
          errors: []
        }
        this.props = props;
        this._carousel = {};
        this.init();
      }
    
      init(){
        this.state = {
          items: [
            {
              id: "WpIAc9by5iU",
              thumbnail: "https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg",
              title: "Led Zeppelin - Stairway To Heaven"
            }, {
              id: "sNPnbI1arSE",
              thumbnail: "https://img.youtube.com/vi/sNPnbI1arSE/hqdefault.jpg",
              title: "Eminem - My Name Is"
            }, {
              id: "VOgFZfRVaww",
              thumbnail: "https://img.youtube.com/vi/VOgFZfRVaww/hqdefault.jpg",
              title: ""
            }
          ]
        };
    
        console.log("ThumbnailCarousel Props: ", this.props)
      }


    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
            <Image source={{uri:item.thumbnail}} style={{width:200,height:100}}/>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
           
        );
    }

render(){

return(
    <Carousel
            layout={'stack'} 
            ref={(c) => { this._carousel = c; }}
            data={this.state.items }
            renderItem={this._renderItem}
            sliderWidth={200}
            itemWidth={200}
          />
)
}
}
export default Trendview;

const styles = {
    main:{
        backgroundColor: 'green'
    }
}