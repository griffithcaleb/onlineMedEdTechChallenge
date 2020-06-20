import React, { FC } from 'react'
import { Todo } from '../redux/slices/todosSlice'
import { Image, View, Text, FlatList, ListRenderItemInfo, TouchableOpacity } from 'react-native'
import { completeTodo, setTodoToNotCompleted, deleteTodo } from '../redux/actionCreators/todos'
import {listStyles as styles } from '../styles/list'
import { colors } from '../lib/colors'

interface ListProps {
    todos?: Todo[]
    type: 'Todo' | 'Done';
    handleTodoEdit: (id: string) => () => void
}

export const List: FC<ListProps> = ({ todos, type, handleTodoEdit}) => {
    const header = type === 'Todo' ? `To do (${todos?.length})` : `Done (${todos?.length})`

    const renderNotCompletedTodos = ({
      item: { name, id}}: ListRenderItemInfo<Todo>) => {

      return (
        <TouchableOpacity
          style={styles.listItem}
          onPress={handleTodoEdit(id)}
          >
          <Text style={styles.nameText}numberOfLines={1}>{name}</Text>
          <TouchableOpacity
            onPress={() => deleteTodo(id)}
            style={styles.deleteContainer}>
            <Image source={require('../assets/xIcon.png')} style={styles.delete}></Image>
          </TouchableOpacity>
        </TouchableOpacity>
      )
    }
    return (
        <View style={styles.container}>
        <View style={[styles.listHeader, type === 'Todo' && { backgroundColor: colors.teal }]}>
            <Text style={[styles.headerText, type === 'Todo' && {color: colors.black}]}>{header}</Text>
          </View>
            <FlatList
                data={todos}
                renderItem={renderNotCompletedTodos}
            />
        </View>
    )
}