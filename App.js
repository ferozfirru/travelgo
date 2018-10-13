import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Avatar, Card } from 'react-native-elements'; // 0.19.1
import ProfileView from './components/ProfileView';
import TrendView from './components/TrendView';
import SpecialView from './components/SpecialView';
import NearmeView from './components/NearmeView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ProfileView />
      <TrendView />
      <SpecialView />
      <NearmeView />
        {/* <Text style={styles.paragraph}>
          ALll 1235  and watch it change on your phone! Save to get a shareable url.
        </Text>
        <Card title="Local Modules">
        <Avatar
  small
  rounded
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
        </Card> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
