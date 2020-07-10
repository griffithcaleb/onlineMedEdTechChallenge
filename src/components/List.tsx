import React, { FC } from 'react';
import { Animated, FlatList, Image, ListRenderItemInfo,
   PanResponder, Text, TouchableOpacity, View } from 'react-native';
import { completeTodo, deleteTodo, setTodoToNotCompleted } from '../redux/actionCreators/todos';
import {listStyles as styles } from '../styles/list';
import { TodoItem } from './TodoItem';
import { Todo } from '../redux/slices/todosSlice';


interface ListProps {
  todos?: Todo[];
  type: 'Todo' | 'Done';
  handleTodoEdit: (id: string) => () => void;
}

export const List: FC<ListProps> = ({ todos, type, handleTodoEdit}) => {
  const header = type === 'Todo' && `To do (${todos?.length})` || `Done (${todos?.length})`;

  const renderTodos = ({
      item: { name, id, description, targetCompletionDate}}: ListRenderItemInfo<Todo>) => {
    return (
      <TodoItem
        type={type}
        name={name}
        id={id}
        description={description}
        targetCompletionDate={targetCompletionDate}
        handleTodoEdit={handleTodoEdit}
      />
    );
  };
  return (
        <View style={styles.container}>
        <View style={styles.listHeader}>
            <Text style={styles.headerText}>{header}</Text>
            <View style={styles.underlineContainer}>
              <Image style={styles.underline} source={require('../assets/underline.png')}/>
            </View>
          </View>
            <FlatList
                style={{overflow: 'visible'}}
                data={todos}
                renderItem={renderTodos}
            />
        </View>
  );
};
