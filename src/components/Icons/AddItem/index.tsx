import addItemIcon from '../../../assets/add.svg';
import './styles';
import { AddItemImg } from './styles';

export function AddItem() {
  return <AddItemImg src={addItemIcon} alt="save the date" />;
}
