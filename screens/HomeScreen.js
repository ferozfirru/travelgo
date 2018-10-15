import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';

import ProfileView from '../components/ProfileView';
import TrendView from '../components/TrendView';
import SpecialView from '../components/SpecialView';
import NearmeView from '../components/NearmeView';

class HomeView extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };
    render() {
      //console.log(this.props.navigation)
      return (
        <View style={styles.container}>
          <View style={styles.subcontainer}>
           { /* <ProfileView style={{
              flex:1,
              shadowOffset:{  width: 10,  height: 10,  },
              shadowColor: 'black',
              shadowOpacity: 1.0,
              }} />*/ }
            {this._hr()}
            <Button 
            onPress={() => this.props.navigation.navigate('Detail')}
            title="intent"
          />
            <TrendView style={{
              flex:1,
              shadowOffset:{  width: 10,  height: 10,  },
              shadowColor: 'black',
              shadowOpacity: 1.0,
              }} navigation={this.props.navigation}/>
            {this._hr()}
            <SpecialView style={{flex:1}} />
            {this._hr()}
            <NearmeView style={{flex:2}} />
          </View>
        </View>
      );
    }
  
    _hr(){
      return(
        <View style={{  borderBottomColor: '#ecf0f1',  borderBottomWidth: 2, }}  />
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      //alignItems: 'center',
      justifyContent: 'space-around',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },
    subcontainer: {
      flex: 1,
      flexDirection: 'column',
      //alignItems: 'center',
      justifyContent: 'space-between',
      // paddingTop: Constants.statusBarHeight,
      backgroundColor: 'white',
      margin:15,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
  });

/*const RootStack = createStackNavigator(
  {
    Home: HomeView,
    Profile: ProfileView,
    Trend: TrendView,
    Special: NearmeView,
    Nearme: NearmeView,
  },
  {
    initialRouteName: 'Home',
  }
);*/


export default HomeView;