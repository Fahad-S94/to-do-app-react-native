import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  TouchableOpacity,
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

  const deleteTask = () => {
    setTasks((item) => item.find((y) => y.id));
  };

  const Item = ({ id, title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.buttonDelete}
        key={id}
        onPress={deleteTask}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
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
      <TouchableHighlight onPress={() => addTask()}>
        <View style={styles.button}>
          <Text>Add Task</Text>
        </View>
      </TouchableHighlight>
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
    flex: 1,
    flexDirection: 'row', // Arrange items horizontally
    justifyContent: 'space-between', // Put space between items
    alignItems: 'center', // Center items vertically
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  buttonDelete: {
    backgroundColor: '#f9c2ff', // Background color for the button
    paddingHorizontal: 2, // Increase the width of the button
    borderRadius: 10, // Add some border radius for rounded corners
  },
  buttonText: {
    color: 'red', // Text color for the button
    fontSize: 38,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
