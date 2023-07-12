// components/TodoList.js

import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../store/actions';
import { Dimensions } from 'react-native';

const TodoList = () => {
  const [todoText, setTodoText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      const newTodo = {
        id: Math.random().toString(),
        text: todoText,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setTodoText('');
    }
  };

  const handleToggleTodo = (todoId) => {
    dispatch(toggleTodo(todoId));
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const renderTodoItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
      <Text
        style={{
          flex: 1,
          textDecorationLine: item.completed ? 'line-through' : 'none',
        }}
      >
        {item.text}
      </Text>
      <Button title="Tamamlandı" onPress={() => handleToggleTodo(item.id)} />
      <Button title="Sil" onPress={() => handleDeleteTodo(item.id)} />
    </View>
  );

  return (
    <View style={{ paddingHorizontal: Dimensions.get('window').width*0.1, 
    paddingVertical: Dimensions.get('window').width*0.2, }}>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <TextInput
          style={{ flex: 1, marginRight: 10, borderWidth: 1, padding: 5 }}
          placeholder="Yapılacak ekle..."
          value={todoText}
          onChangeText={(text) => setTodoText(text)}
        />
        <Button title="Ekle" onPress={handleAddTodo} />
      </View>
      <FlatList
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoList;

