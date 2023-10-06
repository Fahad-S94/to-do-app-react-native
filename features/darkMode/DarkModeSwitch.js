// DarkModeSwitch.js

import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

function DarkModeSwitch({ onDarkModeChange }) {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);
    onDarkModeChange(!isDarkModeEnabled);
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDarkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleDarkMode}
        value={isDarkModeEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
});

export default DarkModeSwitch;
