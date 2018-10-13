import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';

import Carousel from 'react-native-snap-carousel';

class Trendview extends React.Component{

    // constructor(props){
    //     super();
    //     this.state = {
    //       errors: []
    //     }
    //     this.props = props;
    //     this._carousel = {};
    //     this.init();
    //   }
    
     
       state = {
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
              title: "abcef"
            }
          ]
        };


    _renderItem () {
        return this.state.items.map( (item,key) => 
            {
                return(
                <View key={key} style={styles.slide}>
                <ImageBackground source={{uri:item.thumbnail}} style={{width:200,height:100}}>
                    <View style={{backgroundColor: '#000',opacity:0.5,flexDirection: 'column',justifyContent: "flex-end",alignItems:"center",justifyContent: "center",bottom: 0 }}>
                    <Text style={styles.title}>{ item.title }</Text>
                    </View>
                </ImageBackground>
                </View>

                )
            }
        );
    }

render(){

return(
    <ScrollView
    horizontal= {true}
    decelerationRate={0}
    snapToInterval={200} //your element width
    snapToAlignment={"center"}
    style={{marginLeft:15,marginRight:15,backgroundColor:'gray'}}
    >
{this._renderItem()}
</ScrollView>
)
}
}
export default Trendview;

const styles = {
    main:{
        backgroundColor: 'green'
    },
    title:{
        fontSize: 11.5,
        color: 'white',
        textAlign: 'center',
    },
    slide:{
        //boxShadow: '1 2 3 4'
    }
}