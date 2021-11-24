import { EditItemBlack } from '../Icons/EditItemBlack';
import { InputContainer, InputItem } from './styles';

export const NewItemFriendsEvents: React.FC<any> = (props: any) => {
  return (
    <InputContainer>
      <InputItem
        type="text"
        placeholder="Nome do item"
        name="itemName"
        value={props.item?.itemName || ''}
        disabled
      />

      <InputItem
        id="userName"
        disabled
        type="select"
        placeholder="Convidado"
        name="userName"
        value={props.item?.userName || ''}
      />
      {!props.item?.userName && (
        <div
          onClick={() =>
            props.editUserFromItem(props.index, 1, 'userName do usuário')
          }
        >
          <label htmlFor="userName">
            <EditItemBlack />
          </label>
        </div>
      )}
    </InputContainer>
  );
};

export default NewItemFriendsEvents;
