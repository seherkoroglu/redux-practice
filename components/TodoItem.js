// components/TodoItem.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const TodoItem = ({ text, completed, onToggle, onDelete }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
      <Text
        style={{
          flex: 1,
          textDecorationLine: completed ? 'line-through' : 'none',
        }}
      >
        {text}
      </Text>
      <Button title="Tamamlandı" onPress={onToggle} />
      <Button title="Sil" onPress={onDelete} />
    </View>
  );
};

export default TodoItem;
