import React from 'react';
import { View,Text,ImageBackground } from 'react-native';

const Card = (props) =>{
    // props = props.cardinfo;
        return(
            // <ImageBackground source={{uri:props.image.src}} style={{width:200,height:200}} />
            <View style={props.view.style} onPress={() => props.navigation.navigate(props.view.navigate)}>
            <ImageBackground source={{uri:props.image.src}} style={props.image.style} >
            <View style={{flexDirection: 'column-reverse',flex: 1}}>
            <View>
            <Text style={props.cardstyleinfo.image.textParentstyle}>
                <Text style={props.cardstyleinfo.image.textstyle}>
                    {props.image.textvalue}
                </Text>
            </Text>
            </View>
            </View>
            </ImageBackground>
            <View style={styles.footerview}>
                <Text style={styles.footerheading}>{ props.imagefooter.heading }</Text>
                <Text style={styles.footerdesc}>{ props.imagefooter.desc }</Text>
            </View>
            </View>
            )
}
const styles = {
    
    footerview:{
            height: 40
    },
    footerheading:{
        fontSize: 12,
        padding: 3
    },
    footerdesc:{
        fontSize: 9,
        color:'gray',
        paddingBottom: 3,
        paddingLeft: 3,
    }
}
export default Card;