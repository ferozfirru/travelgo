import React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import Card from './sub/Card';

//import Carousel from 'react-native-snap-carousel';
const cardstyleinfo ={
    image:{
        style:{
            width: 200,
            height: 100,
            flex:1,
            flexDirection:"column",
            justifyContent:"flex-end"
        },
        textstyle:{
            //background: 'green',
            color: '#fff',
            fontSize: 10,
            backgroundColor: '#00aaa0', //#f68e4f
            // padding: 50
        },
        textParentstyle:{
            // padding:3,
            // marginRight: 40,
            // paddingLeft: 5,
            // backgroundColor: '#00aaa0'
        }
    },
    imagefooter:{

    },
    subview:{
        style:{
            backgroundColor: '#000',
            paddingBottom:7,
            paddingTop:7
        }
    }
}

const cardinfo = {};
class SliderView extends React.Component{

    constructor(props){
        super();

        this.props = props;
       
        this.cardinfoarr = [];
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
                cardinfo = {
                    image : {
                        src : item.thumbnail,
                        textvalue : ' Popular ',
                        style:{
                            width: this.props.imgWH.width,
                            height: this.props.imgWH.height,
                        }
                    },
                    imagefooter : {
                        heading : item.title,
                        desc : 'Desc',
                    },
                    view : {
                        navigate : this.props.navigate
                    }
                } 
                if(this.props.thisval == 'special')
                {
                    
                }
                return(
                    <Card key={key} {...cardinfo} cardstyleinfo={cardstyleinfo}
                    />
                )
            }
        );
    }

render(){
if(this.state.items){
return(
    <View style={{flex:1,backgroundColor:'transparent',alignContent:"flex-start"}}>
        <ScrollView
        showsHorizontalScrollIndicator={false}
        // pagingEnabled={true}
        horizontal= {true}
        decelerationRate={0}
        //snapToInterval={200} //your element width
       // snapToAlignment={"center"}
        style={{backgroundColor:'transparent',alignContent:"flex-start"}}
        >
    { this._renderItem() }
        </ScrollView>
    </View>
)
}
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