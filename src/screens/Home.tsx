import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";
import { Header } from '../components/Header'
import { FullList } from '../components/FullList'
import { CreateNewTodo } from '../components/CreateNewTodo'
import { setTodos } from "../redux/actionCreators/todos";
import { Todo } from "../redux/slices/todosSlice";
import { EditTodo } from '../components/EditTodo';
import { homeStyles as styles } from '../styles/home'
import { PropsFromRedux, connector } from '../redux/types/todos';
import { TodoButton } from '../components/TodoButton'

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
         <TodoButton
          buttonStyle={styles.continueButton}
          title={'Create New'}
          titleStyle={styles.buttonText}
          onButtonPress={() => setShowCreateState(true)}
         />
        </>
        }
      </View>
  )
}

export default connector(Home)
