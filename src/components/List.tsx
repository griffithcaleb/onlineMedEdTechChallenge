import React, { FC } from 'react';
import { Todo } from '../redux/slices/todosSlice';
import { FlatList, Image, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native';
import { completeTodo, deleteTodo, setTodoToNotCompleted } from '../redux/actionCreators/todos';
import {listStyles as styles } from '../styles/list';
import { colors } from '../lib/colors';
import { TodoListItemContent } from '../components/TodoListItemContent';

interface ListProps {
  todos?: Todo[];
  type: 'Todo' | 'Done';
  handleTodoEdit: (id: string) => () => void;
}

export const List: FC<ListProps> = ({ todos, type, handleTodoEdit}) => {
  const header = type === 'Todo' && `To do (${todos?.length})` || `Done (${todos?.length})`;

  const renderNotCompletedTodos = ({
      item: { name, id, description, targetCompletionDate}}: ListRenderItemInfo<Todo>) => {
    return (
        <TouchableOpacity
          style={[styles.listItem, type === 'Todo' &&
          {backgroundColor: colors.lightRed} || {backgroundColor: colors.lightGreen}]}
          onPress={type === 'Todo' && (() => completeTodo(id)) || (() => setTodoToNotCompleted(id))}
        >
          <TodoListItemContent
            name={name}
            description={description}
            targetCompletionDate={targetCompletionDate}
          />
          <TouchableOpacity
            onPress={() => deleteTodo(id)}
            style={styles.deleteContainer}>
            <Image source={require('../assets/xIcon.png')} style={styles.delete}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleTodoEdit(id)}
            style={styles.editContainer}
          >
            <Image source={require('../assets/editIcon.png')} style={styles.edit}/>
          </TouchableOpacity>
        </TouchableOpacity>
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
                data={todos}
                renderItem={renderNotCompletedTodos}
            />
        </View>
  );
};
