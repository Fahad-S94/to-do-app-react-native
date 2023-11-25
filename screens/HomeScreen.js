import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

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

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity
        style={styles.buttonDelete}
        onPress={() => deleteTask(item.id)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type new task here!"
          onChangeText={(newText) => setInput(newText)}
          defaultValue={input}
        />
        <TouchableOpacity onPress={() => addTask()} style={styles.addButton}>
          <Text style={{ color: 'white' }}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
  },
  input: {
    height: 40,
    flex: 1,
    borderWidth: 1,
    padding: 10,
  },
  addButton: {
    marginLeft: 8,
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  buttonDelete: {
    backgroundColor: '#f9c2ff',
    paddingHorizontal: 2,
    borderRadius: 10,
  },
  buttonText: {
    color: 'red',
    fontSize: 38,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
