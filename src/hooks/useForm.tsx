import { useState, useEffect } from 'react';
import Customer from '../types/Customer';

interface useFormProps {
  onSubmit(values: any): any;
  initialValues?: Object;
  schemaValidation: {
    [index: string]: (value: string) => string | void;
  };
}

const useForm = ({onSubmit, initialValues = {}, schemaValidation}: useFormProps) => {
  const [prevInitialValues, setPrevInitialValues] = useState(initialValues);
  const [values, setValues] = useState<{
    [index: string]: string | undefined
  }>(initialValues as any);
  const [errors, setErrors] = useState<{
    [index: string]: string | null
  }>({});

  useEffect(() => {
    // if(!isEqual(initialValues, prevInitialValues)) {
    //   setPrevInitialValues(initialValues)
    // }
  }, [initialValues, prevInitialValues])

  const handleSubmit = (event: any) => {
    if(event) event.preventDefault()
    onSubmit(values);
  }

  const handleChange = (event: any) => {
    event.persist();
    const hasValidation = schemaValidation[event.target.name as string];
    if(hasValidation) {
      setErrors(prev => ({
        ...prev,
        [event.target.name]: hasValidation(event.target.value)
      }))
    }
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }

  const setFieldValue = (fieldName: string, value: string) => {
    setValues(values => ({
      ...values,
      [fieldName]: value
    }))
  };

  const setFormValues = (values: Customer) => {
    setValues({
      id: values.id,
      name: values.name,
      observation: values.observation,
      email: values.email,
      document: values.document,
      address: values.address,
      birthday: values.birthday,
      cellphone: values.cellphone
    })
    setErrors({});
  }

  const inputProps = (name: string) => {
    return {
      onChange: handleChange,
      value: values[name]
    }
  }
  
  return {
    onChange: handleChange,
    onSubmit: handleSubmit,
    values,
    errors,
    setFieldValue,
    inputProps,
    setValues: setFormValues
  }
}

export default useForm;