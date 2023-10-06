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
import DarkModeSwitch from '../features/darkMode/DarkModeSwitch';

function HomeScreen() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Buy groceries' },
    { id: '2', title: 'Walk the dog' },
    { id: '3', title: 'Finish homework' },
  ]);

  const [taskInput, setTaskInput] = useState('');
  const inputRef = useRef();
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode

  const addTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = {
        id: String(Math.random()), // You should generate a unique ID here.
        title: taskInput,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTaskInput('');
      inputRef.current.clear();
    }
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.header, isDarkMode && styles.darkHeader]}>
          To-Do List
        </Text>
        <DarkModeSwitch onDarkModeChange={setIsDarkMode} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.taskItem, isDarkMode && styles.darkTaskItem]}>
            <Text style={[styles.taskText, isDarkMode && styles.darkTaskText]}>
              {item.title}
            </Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text
                style={[
                  styles.deleteButton,
                  isDarkMode && styles.darkDeleteButton,
                ]}
              >
                -
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TextInput
        ref={inputRef}
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Enter a new task"
        onChangeText={(text) => setTaskInput(text)}
        value={taskInput}
      />
      <Button title="Add Task" onPress={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  darkContainer: {
    backgroundColor: 'black',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  darkHeader: {
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  darkInput: {
    backgroundColor: 'black',
    color: 'white',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  darkTaskItem: {
    backgroundColor: '#333',
  },
  taskText: {
    flex: 1,
  },
  darkTaskText: {
    color: 'white',
  },
  deleteButton: {
    color: 'red',
    fontSize: 20,
  },
  darkDeleteButton: {
    color: 'orange',
  },
});

export default HomeScreen;
