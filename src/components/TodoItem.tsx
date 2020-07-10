import React, { FC, useState, useEffect } from "react";
import { Animated, TouchableOpacity, Image, PanResponder, Dimensions } from "react-native";
import {TodoListItemContent} from './TodoListItemContent'
import { listStyles as styles } from '../styles/list';
import { colors } from "../lib/colors";
import { deleteTodo, completeTodo, setTodoToNotCompleted } from '../redux/actionCreators/todos';


export interface TodoProps {
  type: 'Todo' | 'Done';
  name: string
  id: string
  description: string
  targetCompletionDate: string
  handleTodoEdit: (id: string) => () => void;
}

export const TodoItem: FC<TodoProps> = ({type, name, id, description, targetCompletionDate, handleTodoEdit}) => {
  const [pan] = useState( new Animated.ValueXY())
    let panValue = {x: 0, y: 0}
    pan.addListener((value) => panValue = value) 
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([
        null, {dx: pan.x, dy: pan.y}
      ]),
      onPanResponderRelease: (e, gesture) => {
        const { width } = Dimensions.get('screen')
        if (gesture.moveX > width / 2 && type === 'Todo') {
         completeTodo(id)
        } else if (gesture.moveX < width / 2 && type === 'Done') {
          setTodoToNotCompleted(id)
        } else {
          Animated.spring(pan, {
            useNativeDriver: false,
            toValue: { x: 0, y: 0 },
            friction: 5
          }).start()
        }
      }
      
    })
  const panStyle = {
    transform: pan.getTranslateTransform()
  }
  return(
    <Animated.View
      {...panResponder.panHandlers}
      style={[panStyle, styles.listItem, type === 'Todo' &&
        { backgroundColor: colors.lightRed } || { backgroundColor: colors.lightGreen }]}
    >
      <TodoListItemContent
        name={name}
        description={description}
        targetCompletionDate={targetCompletionDate}
      />
      <TouchableOpacity
        onPress={() => deleteTodo(id)}
        style={styles.deleteContainer}>
        <Image source={require('../assets/xIcon.png')} style={styles.delete} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleTodoEdit(id)}
        style={styles.editContainer}
      >
        <Image source={require('../assets/editIcon.png')} style={styles.edit} />
      </TouchableOpacity>
  </Animated.View>
  )
}