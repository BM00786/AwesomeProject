/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import react from 'react';
import React from 'react';
import { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
const CleverTap = require('clevertap-react-native');


CleverTap.createNotificationChannel("biswa2", "biswa2", "Clevertap test", 3, true);
CleverTap.setDebugLevel(3);
CleverTap.addListener(CleverTap.CleverTapPushNotificationClicked, (event) => { console.log('handleCleverTapEvent', CleverTap.CleverTapPushNotificationClicked, event); });
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <View>
      <View style={styles.container}>
        <Button onPress={() => {
          CleverTap.recordEvent('biswareact')
        }}
          title="Push event" />
      </View>

      <View style={styles.container}>
        <Button onPress={() => {
          CleverTap.recordEvent('notify');
        }}
          title="Push notify" />
      </View>

      <View style={styles.container}>
        <Button onPress={() =>
   {
     let profiledata ={
      'Name': 'Biswa React',
      'Identity': '6767',
      'Email' : 'BiswaReact@react.com',
      "MSG-push" : true,
      "MSG-email" : true,
      "MSG-sms" : true,
      "MSG-whatsapp" : true
     }
    CleverTap.onUserLogin(profiledata);
    CleverTap.recordEvent('profiledata',profiledata);
        
          }  }       title="sign up" />
      </View>
     
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default App;