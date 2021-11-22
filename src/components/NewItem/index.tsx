import { TrashIcon } from '../Icons/TrashIcon';
import { InputItemsContainer, InputItem } from './styles';

export const NewItem: React.FC<any> = (props) => {
  return (
    <InputItemsContainer>
      <InputItem
        type="text"
        placeholder="Nome do item"
        name="itemName"
        value={props.item?.itemName || ''}
        onChange={(event: any) => {
          props.editItem(props.index, event.target.value);
        }}
      />
      {/* @ts-ignore */}
      <div onClick={() => props.removeItem(props.index)}>
        <TrashIcon />
      </div>
    </InputItemsContainer>
  );
};

export default NewItem;
