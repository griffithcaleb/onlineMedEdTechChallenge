import React, { FC } from 'react'
import { Todo } from '../redux/slices/todosSlice'
import { Image, View, Text, FlatList, ListRenderItemInfo, TouchableOpacity } from 'react-native'
import { completeTodo, setTodoToNotCompleted, deleteTodo } from '../redux/actionCreators/todos'
import {listStyles as styles } from '../styles/list'

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
          <TouchableOpacity
            onPress={
              type === 'Todo' ? 
              () => completeTodo(id):
              () => setTodoToNotCompleted(id)
            }
            style={styles.circleContainer}>
            <Image source={
              type === 'Todo' ?
                require('../assets/emptyCircle.png') :
                require('../assets/checkedCircle.png')
            } style={styles.emptyCircle}></Image>
          </TouchableOpacity>
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
        <View style={[styles.listHeader, type === 'Todo' && { backgroundColor: 'rgb(76, 187, 228)'}]}>
            <Text style={[styles.headerText, type === 'Todo' && {color: 'black'}]}>{header}</Text>
          </View>
            <FlatList
                data={todos}
                renderItem={renderNotCompletedTodos}
            />
        </View>
    )
}