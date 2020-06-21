import React, {FC, useState} from 'react';
import {Formik } from 'formik';
import * as Yup from 'yup';
import {Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-datepicker';
import { AddTodoFormFields, initialValues, todoValidation } from '../lib/forms/todoForm';
import { createNewTodo } from '../redux/actionCreators/todos';
import { createNewTodoStyles as styles } from '../styles/createNewTodo';
import { TodoButton } from './TodoButton';
import { colors } from '../lib/colors'

interface CreateNewTodoProps {
  toggleModal: () => void;
}

export const CreateNewTodo: FC<CreateNewTodoProps> = ({toggleModal}) => {
  const [step, setStep] = useState<number>(1);

  const onFormSubmit = async (values: AddTodoFormFields) => {
    createNewTodo(values);
    toggleModal();
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
              // tslint:disable-next-line:cyclomatic-complexity
              return (
                <>
                  {step === 1 &&
                    <>
                      <Text style={styles.createStepHeader}>{createText.name}</Text>
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
                      <Text style={styles.errorText}>{createText.required}</Text>
                    }
                    </View>
                    </>
                  }
                  {step === 2 &&
                    <>
                      <Text style={styles.createStepHeader}>{createText.description}</Text>
                      <TextInput
                        numberOfLines={4}
                        value={f.values.description}
                        onChangeText={f.handleChange('description')}
                        selectionColor={colors.darkBlue}
                        multiline={true}
                        style={[styles.descriptionInput, {height: 200, paddingTop: 5}]}
                      />
                      <View style={styles.errorContainer}>
                        {
                          !!f.errors.name &&
                          <Text style={styles.errorText}>{createText.required}</Text>
                        }
                      </View>
                    </>
                  }
                  {step === 3 &&
                    <>
                     <Text style={styles.createStepHeader}>{createText.date}</Text>
                      <DatePicker
                        selected={f.values.date}
                        onChange={e => f.setFieldValue('date', e)}
                        dateFormat='MMMM d'
                      />
                    </>
                  }
                  <TodoButton
                    title={step === 3 && 'Create!' || 'Continue'}
                    onButtonPress={step === 3 && f.submitForm || (() => setStep(step + 1))}
                    buttonStyle={styles.continueButton}
                    titleStyle={styles.buttonText}
                    disabled={(step === 1 && f.errors.name || step === 2 && f.errors.description)
                       && true || false}
                  />
                </>
              );
            }}
          </Formik >
      </View>
    </View>
  );
};

const createText = {
  name: 'Name your to do!',
  description: 'Describe your to do!',
  required: '*required*',
  date: 'What day do you need to get this done?'
};
