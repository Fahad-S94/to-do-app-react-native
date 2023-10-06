import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Button } from 'react-native';
// import DarkModeSwitch from '../features/DarkMode/DarkModeSwitch';

function HomeScreen() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Buy groceries' },
    { id: '2', title: 'Walk the dog' },
    { id: '3', title: 'Finish homework' },
  ]);

  return <View></View>;
}

const styles = StyleSheet.create({});

export default HomeScreen;
