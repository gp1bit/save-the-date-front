import Swal from 'sweetalert2';

const partyNameValidation = (partyName: any): string => {
  if (partyName === '') return 'Nome do evento obrigatório';
  return '';
};

const hostNameValidation = (hostName: any): string => {
  if (hostName === '') return 'Nome obrigatório';
  return '';
};

const adressValidation = (adress: any): string => {
  if (adress === '') return 'Endereço obrigatório';
  return '';
};

const cityValidation = (city: any): string => {
  if (city === '') return 'Cidade/Estado obrigatórios';
  return '';
};

const eventDateValidation = (date: any): string => {
  if (date === '') return 'Data do evento obrigatória';
  return '';
};

const scheduleValidation = (scheduleEvent: any): string => {
  if (scheduleEvent === '') return 'Horário do evento obrigatório';
  return '';
};

const itemNameValidation = (itemName: any, index: number): string => {
  if (itemName === '') return `Nome do item ${index + 1} é obrigatório`;
  return '';
};

export const eventValidator = (
  data: any,
  submitNewEvent: Function,
  items: any
) => {
  const { partyName, hostName, adress, city, date, scheduleEvent, itemName } =
    data;

  let errors = [];
  let erro = '';
  erro = partyNameValidation(partyName);
  if (erro) errors.push(erro);

  erro = hostNameValidation(hostName);
  if (erro) errors.push(erro);

  erro = adressValidation(adress);
  if (erro) errors.push(erro);

  erro = cityValidation(city);
  if (erro) errors.push(erro);

  erro = eventDateValidation(date);
  if (erro) errors.push(erro);

  erro = scheduleValidation(scheduleEvent);
  if (erro) errors.push(erro);

  items.map((item: any, index: number) => {
    erro = itemNameValidation(item.itemName, index);
    if (erro) errors.push(erro);
  });

  if (errors.length > 0) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      html: errors.join('<br>'),
    });
  }

  submitNewEvent();
};
