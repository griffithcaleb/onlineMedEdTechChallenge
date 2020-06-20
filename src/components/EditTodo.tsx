import React, { FC, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import DatePicker from "react-datepicker";
import { AddTodoFormFields, todoValidation } from '../lib/forms/todoForm'
import { updateTodo } from '../redux/actionCreators/todos'
import { Todo } from '../redux/slices/todosSlice';
import { editTodoStyles as styles} from '../styles/editTodo'
import { colors } from '../lib/colors';
import { TodoButton } from './TodoButton';

interface EditTodoProps {
    toggleModal: () => void
    todo?: Todo
}

export const EditTodo: FC<EditTodoProps> = ({ toggleModal, todo}) => {
    const [step, setStep] = useState<number>(1)
    const [showEditContent, setShowEditContent] = useState<boolean>(false)
    const initialValues = {
       name: todo?.name || '',
      description: todo?.description || '',
      date: todo?.targetCompletionDate ? new Date(todo.targetCompletionDate ) : new Date(),
      completed: todo?.completed
    }

    const onFormSubmit = async (values: AddTodoFormFields) => {
      if (todo) {
        updateTodo(todo, values)
        toggleModal()
      }
    };
  
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.back} onPress={toggleModal}>
                <Image style={styles.backArrow} source={require('../assets/backarrow.png')} />
            </TouchableOpacity>
            {!showEditContent &&
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionHeader}>{editText.nameHeader}</Text>
                <Text>{todo?.name}</Text>
                <Text style={styles.descriptionHeader}>{editText.descriptionHeader}</Text>
                <Text>{todo?.description}</Text>
                {!!todo?.targetCompletionDate &&
                  <>
                    <Text style={styles.descriptionHeader}>{editText.target}</Text>
                    <Text>{todo.targetCompletionDate}</Text>
                  </>
                }
                {!!todo?.completionDate &&
                  <>
                   <Text style={styles.descriptionHeader}>{editText.completionDate}</Text>
                  <Text>{todo.completionDate}</Text>
                   </>
                }
                <TouchableOpacity
                  onPress={() => setShowEditContent(true)}
                  style={[styles.continueButton, { marginTop: 15 }]}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
              </View>  
            }
            {showEditContent &&
            <View style={styles.content}>
              <Formik
                initialValues={initialValues}
                onSubmit={onFormSubmit}
                validationSchema={Yup.object().shape(todoValidation)}
              >
                {f => {
                  return (
                    <>
                      {step === 1 &&
                        <>
                          <Text style={styles.editHeader}>{editText.name}</Text>
                          <TextInput
                            value={f.values.name}
                            onChangeText={f.handleChange('name')}
                            selectionColor={colors.darkBlue}
                            multiline={false}
                            style={styles.descriptionInput}
                          />
                          <View style={styles.errorContainer}>
                            {
                              !!f.errors.name &&
                              <Text style={styles.errorText}>{editText.required}</Text>
                            }
                          </View>
                        </>
                      }
                      {step === 2 &&
                        <>
                        <Text style={styles.editHeader}>{editText.description}</Text>
                        <TextInput
                          numberOfLines={4}
                          value={f.values.description}
                          onChangeText={f.handleChange('description')}
                          selectionColor={colors.darkBlue}
                          multiline={true}
                          style={[styles.descriptionInput, { height: 200, paddingTop: 5 }]}
                        />
                          <View style={styles.errorContainer}>
                            {
                              !!f.errors.name &&
                              <Text style={styles.errorText}>{editText.required}</Text>
                            }
                          </View>
                        </>
                      }
                      {step === 3 &&
                        <>
                        <Text style={styles.editHeader}>{editText.date}</Text>
                          <DatePicker
                            selected={f.values.date}
                            onChange={(e) => f.setFieldValue('date', e)}
                            dateFormat="MMMM d"
                          />
                        </>
                      }
                      <TodoButton 
                        disabled={(step === 1 && f.errors.name || step === 2 && f.errors.description) && true || false}
                        onButtonPress={step === 3 && f.submitForm || (() => setStep(step +1))}
                        title={step === 3 && 'Update!' || 'Continue'}
                        titleStyle={styles.buttonText}
                        buttonStyle={styles.continueButton}
                      />
                    </>
                  )
                }}
              </Formik >
            </View>
            }
        </View>
    )
}

const editText = {
  name: 'Name your to do!',
  description: 'Describe your to do!',
  required: '*required*',
  date: 'What day do you need to get this done?',
  completionDate: 'Completion date: ',
  target: 'Target completion date: ',
  nameHeader: 'Name: ',
  descriptionHeader: 'Description: '
}