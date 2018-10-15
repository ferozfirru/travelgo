import React from 'react';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import {
  createStackNavigator,Easing
} from 'react-navigation';

const fade = (props) => {
  const {position, scene} = props

  const index = scene.index

  const translateX = 0
  const translateY = 0

  const opacity = position.interpolate({
      inputRange: [index - 0.7, index, index + 0.7],
      outputRange: [0.3, 1, 0.3]
  })

  return {
      opacity,
      transform: [{translateX}, {translateY}]
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: 'Home',
    // headerMode:'none',
    navigationOptions: {
      // headerVisible: false,
    /*  headerStyle: {
        backgroundColor: "transparent"
      },*/
      
      /*header: {
        style: { position: "absolute" }
      }*/
     /* headerTitleStyle: {
        fontWeight: "bold",
        color: "#fff",
        zIndex: 1,
        fontSize: 8,
        lineHeight: 10,
        fontFamily: "Roboto"
      },
      headerTintColor: "#fff"*/
      // animationEnabled: true
    },
    transitionConfig: () => ({
      screenInterpolator: (props) => {
        return fade(props)
    }
     /* transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },*/
    }),
  }
);

export default class App extends React.Component {
  
  render() {
    // console.log(this.props.navigation);
    return <RootStack />;
  }
}