// In App.js in a new project

import * as React from 'react';
import { View, Text,StatusBar } from 'react-native';
import Routes from './src/Navigation/Routes';
import { Toast } from 'react-native-toast-message/lib/src/Toast';


function App() {
  return (
    <View style={{ flex: 1}}>
      <StatusBar
        backgroundColor="#f0f0f0" // Set the status bar background color
        barStyle="dark-content" // Set the status bar text color (dark-content or light-content)
      />
      <Routes/>
      <Toast forwardref={(ref) => Toast.setRef(ref)} />
      

    </View>
  );
}

export default App;