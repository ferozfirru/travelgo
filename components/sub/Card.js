import React from 'react';
import { View,Text,ImageBackground } from 'react-native';

const Card = (props) =>{
    // props = props.cards;
        return(
            <ImageBackground source={{uri:props.image.src}} style={{width:200,height:200}} />
           /* <View style={styles.viewmain} onPress={() => this.props.navigation.navigate(props.cardinfo.view.navigate)}>
            <ImageBackground source={{uri:props.image.src}} style={props.image.style} >
            <Text style={props.image.textstyle}>
                {props.image.textvalue}
            </Text>
            </ImageBackground>
            <View style={styles.footerview}>
                <Text style={styles.footerheading}>{ props.imagefooter.heading }</Text>
                <Text style={styles.footerdesc}>{ props.imagefooter.desc }</Text>
            </View>
            </View> */
            )
}
const styles = {
    viewmain:{
        
    },
    footerview:{
            
    },
    footerheading:{

    },
    footerdesc:{

    }
}
export default Card;