
import * as Yup from 'yup'

export type FormKeys = keyof AddTodoFormFields;

export type ValidationSchema =
    Record<FormKeys, Yup.StringSchema | Yup.ObjectSchema>;


export const initialValues: AddTodoFormFields = {
    description: '',
    name: '',
    date: new Date()
};

export interface AddTodoFormFields {
    description: string;
    name: string;
    date: any;
}

export const todoValidation: ValidationSchema = {
    description: Yup
        .string()
        .required('required'),
    name: Yup.string().required('required'),
    date: Yup.string(),
}