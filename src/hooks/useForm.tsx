import { useState } from 'react';

interface useFormProps {
  onSubmit(values: any): any;
  initialValues?: Object;
  schemaValidation: {
    [index: string]: (value: string) => string | void;
  };
}

const useForm = ({onSubmit, initialValues = {}, schemaValidation}: useFormProps) => {
  const [values, setValues] = useState<{
    [index: string]: string | undefined
  }>(initialValues as any);
  const [errors, setErrors] = useState<{
    [index: string]: string | null
  }>({});

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
    inputProps
  }
}

export default useForm;