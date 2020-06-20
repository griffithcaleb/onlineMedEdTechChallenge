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
    const header = type === 'Todo' && `To do (${todos?.length})` || `Done (${todos?.length})`

    const renderNotCompletedTodos = ({
      item: { name, id}}: ListRenderItemInfo<Todo>) => {
      return (
        <TouchableOpacity
          style={[styles.listItem, type === 'Todo' && 
          {backgroundColor: colors.lightRed} || {backgroundColor: colors.lightGreen}]}
          onPress={type === 'Todo' && (() => completeTodo(id)) || (() => setTodoToNotCompleted(id))}
          >
          <Text style={styles.nameText}numberOfLines={1}>{name}</Text>
          <TouchableOpacity
            onPress={() => deleteTodo(id)}
            style={styles.deleteContainer}>
            <Image source={require('../assets/xIcon.png')} style={styles.delete}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleTodoEdit(id)}
            style={styles.editContainer}>
            <Image source={require('../assets/editIcon.png')} style={styles.edit}/>
          </TouchableOpacity>
        </TouchableOpacity>
      )
    }
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
    )
}