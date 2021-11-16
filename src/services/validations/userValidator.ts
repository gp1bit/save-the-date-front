import Swal from 'sweetalert2';
import { validatePhone } from 'validations-br';

const nameValidation = (name: any): string => {
  if (name === '') return 'Nome obrigatório';
  return '';
};

const emailValidation = (email: any): string => {
  if (email === '') return 'E-mail obrigatório';

  let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!reg.test(email)) return 'E-mail inválido';
  return '';
};

const birthDateValidation = (birthDate: any): string => {
  if (birthDate === '') return 'Data de nascimento obrigatória';
  return '';
};

const phoneValidation = (phone: any): string => {
  if (phone === '') {
    return 'Telefone obrigatório';
  } else {
    if (!validatePhone(phone)) {
      return 'Telefone inválido';
    }
  }

  return '';
};

export const userValidator = (data: any, submitRegistration: Function) => {
  const { name, email, birthDate, phone } = data;
  let errors = [];
  let erro = '';
  erro = nameValidation(name);
  if (erro) errors.push(erro);

  erro = emailValidation(email);
  if (erro) errors.push(erro);

  erro = birthDateValidation(birthDate);
  if (erro) errors.push(erro);

  erro = phoneValidation(phone);
  if (erro) errors.push(erro);

  if (errors.length > 0) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      html: errors.join('<br>'),
    });
  }

  submitRegistration();
};
