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
  const [input, setInput] = useState('');

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: input,
    };
    setTasks((tasks) => [...tasks, newTask]);
    setInput('');
  };

  // const deleteTask = () => {
  //   setTasks();
  // };

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
      <TextInput
        style={styles.input}
        placeholder="Type new task here!"
        onChangeText={(newText) => setInput(newText)}
        defaultValue={input}
      />
      <Button title="Add Task" onPress={() => addTask()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default HomeScreen;
