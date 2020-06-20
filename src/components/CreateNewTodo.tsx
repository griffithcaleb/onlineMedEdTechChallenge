import React, {FC, useState} from 'react'
import {Formik } from 'formik'
import * as Yup from 'yup';
import {View, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import DatePicker from "react-datepicker";
import { AddTodoFormFields, initialValues, todoValidation } from '../lib/forms/todoForm'
import { createNewTodo } from '../redux/actionCreators/todos'
import { createNewTodoStyles as styles } from '../styles/createNewTodo'

interface CreateNewTodoProps {
  toggleModal: () => void
}

export const CreateNewTodo: FC<CreateNewTodoProps> = ({toggleModal}) => {
  const [step, setStep] = useState<number>(1)
  
  const onFormSubmit = async (values: AddTodoFormFields) => {
    createNewTodo(values)
    toggleModal()
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={toggleModal}>
        <Image style={styles.backArrow} source={require('../assets/backarrow.png')} />
      </TouchableOpacity>
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
                      <Text style={styles.createStepHeader}>
                        Name your to do!</Text>
                      <TextInput
                        value={f.values.name}
                        onChangeText={f.handleChange('name')}
                        selectionColor={'rgb(0, 45, 55)'}
                        multiline={false}
                        style={styles.descriptionInput}
                      />
                    <View style={styles.errorContainer}>
                    {
                      !!f.errors.name &&
                      <Text style={styles.errorText}>*required*</Text>
                    }
                    </View>
                    </>
                  }
                  {step === 2 &&
                    <>
                      <Text style={styles.createStepHeader}>Describe your to do!</Text>
                      <TextInput
                        numberOfLines={4}
                        value={f.values.description}
                        onChangeText={f.handleChange('description')}
                        selectionColor={'rgb(0, 45, 55)'}
                        multiline={true}
                        style={[styles.descriptionInput, {height: 200, paddingTop: 5}]}
                      />
                      <View style={styles.errorContainer}>
                        {
                          !!f.errors.name &&
                          <Text style={styles.errorText}>*required*</Text>
                        }
                      </View>
                    </>
                  }
                  {step === 3 &&
                    <>
                     <Text style={styles.createStepHeader}>
                       What day do you need to get this done?
                      </Text>
                      <DatePicker
                        selected={f.values.date}
                        onChange={(e) => f.setFieldValue('date', e)}
                        dateFormat="MMMM d"
                      />
                    </>
                  }
                  <TouchableOpacity
                    disabled={(step === 1 && f.errors.name || step === 2 && f.errors.description) ? true : false}
                    onPress={step === 3 ? f.submitForm : () => setStep(step + 1)}
                    style={styles.continueButton}
                  >
                    <Text style={styles.buttonText}>{step === 3 ? 'Create' : 'Continue'}</Text>
                  </TouchableOpacity>
                </>
              )
            }}
          </Formik >
      </View>
    </View>
  )
}