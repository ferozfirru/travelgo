import React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';


//import Carousel from 'react-native-snap-carousel';

class SliderView extends React.Component{

    constructor(props){
         super();
    //     this.state = {
    //       errors: []
    //     }
        this.props = props;
    //     this._carousel = {};
    //     this.init();
      }
    
     
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
                <Image source={{uri:item.thumbnail}} style={{width:200,height:100,flex:1,flexDirection:"column",justifyContent:"flex-end"}} />
                <View style={{backgroundColor: '#000',paddingBottom:7,paddingTop:7 }}>
                    <Text style={styles.title}>{ item.title }</Text>
                    {/* <Button
                    title="Go to nearme"
                    onPress={() => this.props.navigation.navigate('Detail')}
                    /> */}
                </View>
                </View>

                )
            }
        );
    }

render(){

return(
    <View style={{flex:1,marginLeft:8,marginRight:8,backgroundColor:'transparent',alignContent:"flex-start"}}>
        <Text style={{fontFamily: 'Roboto',fontWeight:"bold",fontSize:11}}>{this.props.title}</Text>
        <ScrollView
        horizontal= {true}
        decelerationRate={0}
    snapToInterval={200} //your element width
        snapToAlignment={"center"}
        style={{backgroundColor:'white',alignContent:"flex-start"}}
        >
    {this._renderItem()}
        </ScrollView>
    </View>
)
}
}
export default SliderView;

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
        alignContent:'center',
        padding:5,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        shadowOffset:{  width: 10,  height: 10,  },
              shadowColor: 'black',
              shadowOpacity: 1.0,
        //boxShadow: '1 2 3 4'
    }
}