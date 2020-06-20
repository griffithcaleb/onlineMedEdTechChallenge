import React, { FC, useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { RootState } from "../redux/store";
import { connect, ConnectedProps } from "react-redux";
import { Header } from '../components/Header'
import { FullList } from '../components/FullList'
import { CreateNewTodo } from '../components/CreateNewTodo'
import { setTodos } from "../redux/actionCreators/todos";
import { Todo } from "../redux/slices/todosSlice";
import { EditTodo } from '../components/EditTodo';

const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
      height,
      width,
      alignContent: 'center',
    },
  continueButton: {
    backgroundColor: 'rgb(79, 204, 222)',
    height: 50,
    width: 200,
    padding: 30,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    shadowOffset: {
      width: 1.5,
      height: -1.5
    },
    shadowOpacity: 0.3,
    shadowRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

const mapState = (state: RootState) => ({
  todos: state.todos
})

const connector = connect(mapState)

type PropsFromRedux = ConnectedProps<typeof connector>


const Home: FC<PropsFromRedux> = ({todos}) => {
  // get all todos from local storage on initial load
  useEffect(() => {
    setTodos()
  }, [])
  
  const [showCreateState, setShowCreateState] = useState<boolean>(false)
  const [showEditState, setShowEditState] = useState<boolean>(false)
  const [todoToEdit, setTodoToEdit] = useState<Todo>()
  
  const handleTodoEdit = (id: string) => () => {
    setTodoToEdit(todos.find(todo => todo.id === id))
    setShowEditState(true)
  }

  return (
      <View style={styles.container}>
        <Header/>
        {showCreateState &&
        <CreateNewTodo toggleModal={() => setShowCreateState(false)} />
        }
        {showEditState &&
        <EditTodo todo={todoToEdit} toggleModal={() => setShowEditState(false)} />
        }
        {!showCreateState && !showEditState &&
        <>
        <FullList
         handleTodoEdit={handleTodoEdit}
         todos={todos}
         />
        <TouchableOpacity
          onPress={() => setShowCreateState(true)}
          style={styles.continueButton}
        >
          <Text style={styles.buttonText}>Create New</Text>
        </TouchableOpacity>
        </>
        }
      </View>
  )
}

export default connector(Home)
