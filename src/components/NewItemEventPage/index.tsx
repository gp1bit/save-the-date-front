import { TrashIcon } from '../Icons/TrashIcon';
import { InputContainer, InputItem } from './styles';

export const NewItemEventPage: React.FC<any> = (props) => {
  return (
    <InputContainer>
      <InputItem
        type="text"
        placeholder="Nome do item"
        name="itemName"
        value={props.item?.itemName || ''}
        onChange={(event: any) => {
          props.editItemName(props.index, event.target.value);
        }}
      />

      <InputItem
        type="text"
        placeholder="Convidado"
        name="userName"
        value={props.item?.userName || ''}
        disabled
      />
      <div onClick={() => props.removeUserFromItem(props.index)}>
        <TrashIcon />
      </div>
    </InputContainer>
  );
};

export default NewItemEventPage;
