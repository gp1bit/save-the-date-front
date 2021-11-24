import { ContainerElements, DivEvento } from './styles';
import { useHistory } from 'react-router';
import { CalendarIcon } from '../Icons/CalendarIcon';

export function PreviewFriendsEvents(props: any) {
  const history = useHistory();

  return (
    <ContainerElements>
      <CalendarIcon />
      <DivEvento
        type="button"
        onClick={() => history.push('/detailsFriendsEventPage')}
      >
        <h4>{props.partyName}</h4>
        <p>{props.hostName}</p>
        <p>
          {props.date} ás {props.schedule}
        </p>
      </DivEvento>
    </ContainerElements>
  );
}
