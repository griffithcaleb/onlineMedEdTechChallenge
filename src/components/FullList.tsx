import React, { FC } from 'react'
import {StyleSheet, View} from 'react-native'
import { List } from '../components/List';
import { Todo } from '../redux/slices/todosSlice';


interface FullListProps {
    todos?: Todo []
    handleTodoEdit: (id: string) => () => void
}

export const FullList: FC<FullListProps> = ({todos, handleTodoEdit}) => {
  const completeTodos = todos?.filter(todo => todo.completed === true) || []
  const notCompletedTodos = todos?.filter(todo => todo.completed !== true) || []
  return (
      <View style={styles.listContainer}>
          <List
           type={'Todo'} 
           todos={notCompletedTodos} 
           handleTodoEdit={handleTodoEdit}
           />
          <List 
            type={'Done'}
            todos={completeTodos}
            handleTodoEdit={handleTodoEdit}
          />
      </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row'
  },
})