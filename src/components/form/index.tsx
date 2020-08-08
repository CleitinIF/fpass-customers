import React from 'react';

import './styles.css';
import useForm from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../../store/modules/customers/actions';

const Form: React.FC = () => {
  const dispatch = useDispatch();

  const { values, onSubmit, onChange, errors, setFieldValue, inputProps } = useForm({
    initialValues: {
      name: '',
      birthday: '',
      cellphone: '',
      document: '',
      email: '',
      address: '',
      observation: ''
    },
    onSubmit: (values) => {
      dispatch(addCustomer(values));
      console.log(values)
    },
    schemaValidation: {
      name: (value: string) => {
        if(!value) return 'Campo obrigatório!';
        if(value.match(/[^a-zA-Z 0-9]+/g)) {
          return 'O nome não pode conter caracteres especiais!'
        }
      },
      birthday: (value: string) => {
        if(!value) return 'Campo obrigatório!';

        if(!value.match(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/i)) {
          return 'Insira uma data válida!'
        }
      },
      cellphone: (value: string) => {
        if(!value) return 'Campo obrigatório!';

        let maskedValue = value.replace(/\D/g, '');
        maskedValue = maskedValue.replace(/^(\d\d)(\d)/g,"($1) $2");
        maskedValue = maskedValue.replace(/(\d{5})(\d)/,"$1-$2");

        setFieldValue('cellphone', maskedValue);
      

        if(!maskedValue.match(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)) {
          return 'Insira um número válido!'
        }
      },
      document: (value: string) => {
        if(!value) return 'Campo obrigatório!';

        let maskedValue = value.replace(/\D/g, '');
        maskedValue = maskedValue.replace(/(\d{3})(\d)/,"$1.$2");
        maskedValue = maskedValue.replace(/(\d{3})(\d)/,"$1.$2");
        maskedValue = maskedValue.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

        setFieldValue('document', maskedValue);

        if(!maskedValue.match(/^\d{3}.\d{3}.\d{3}-\d{2}$/g)) {
          return 'Documento inválido!'
        }
      },
      email: (value: string) => {
        if(!value) return 'Campo obrigatório!';

        if(!value.match(/^[a-z0-9.]+@[a-z0-9]+[a-z0-9.]+/i)) {
          return 'Email inválido!'
        }
      },
      address: (value: string) => {
        if(!value) return 'Campo obrigatório!'
      },
      observation: (value: string) => {
        if(value.length > 300) return 'Máximo de 300 caracteres!'
      }
    }
  });

  const changeFieldValue = (name: string, value: string) => {
    setFieldValue(name, value);
  }

  return (
    <form className="form-container" onSubmit={onSubmit} autoComplete="off">
      <div className="buttons-header-container">
        <button className="button">
          <span className="material-icons">
            add
          </span>
        </button>
        <button className="button">
          <span className="material-icons">
            delete
          </span>
        </button>
      </div>
      <div className={`input-container ${errors.name && 'error'}`}>
        <label htmlFor="name">Nome</label>
        <input name="name" {...inputProps('name')} />
        <span className="error-label">{errors.name}</span>
      </div>
      <div className={`input-container ${errors.birthday && 'error'}`}>
        <label htmlFor="birthday">Data de nascimento</label>
        <input name="birthday" {...inputProps('birthday')} />
        <span className="error-label">{errors.birthday}</span>
      </div>
      <div className={`input-container ${errors.cellphone && 'error'}`}>
        <label htmlFor="cellphone">Celular</label>
        <input name="cellphone" {...inputProps('cellphone')} />
        <span className="error-label">{errors.cellphone}</span>
      </div>
      <div className={`input-container ${errors.document && 'error'}`}>
        <label htmlFor="document">CPF</label>
        <input name="document" {...inputProps('document')} />
        <span className="error-label">{errors.document}</span>

      </div>
      <div className={`input-container ${errors.email && 'error'}`}>
        <label htmlFor="email">Email</label>
        <input name="email" {...inputProps('email')} />
        <span className="error-label">{errors.email}</span>
      </div>
      <div className={`input-container ${errors.address && 'error'}`}>
        <label htmlFor="address">Endereço</label>
        <input name="address" {...inputProps('address')} />
        <span className="error-label">{errors.address}</span>
      </div>
      <div className={`input-container ${errors.observation && 'error'}`}>
        <label htmlFor="observation">Observação</label>
        <textarea name="observation" {...inputProps('observation')} />
      </div>
      <div className="buttons-footer-container">
        <button className="reset-button">Cancelar</button>
        <button className="submit-button" type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default Form;