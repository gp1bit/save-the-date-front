import trashIcon from '../../../assets/trash.svg';
import './styles';
import { TrashIconImg } from './styles';

export function TrashIcon() {
  return <TrashIconImg src={trashIcon} alt="excluir icone" />;
}
