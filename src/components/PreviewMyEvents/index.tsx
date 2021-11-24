import { ContainerElements, DivEvento, ShareButton } from './styles';
import { useHistory } from 'react-router';
import { CalendarIcon } from '../Icons/CalendarIcon';
import { ShareIcon } from '../Icons/ShareIcon';
import Swal from 'sweetalert2';

export function PreviewMyEvents(props: any) {
  const history = useHistory();

  const shareButton = () => {
    return Swal.fire({
      icon: 'success',
      text: 'Compartilhe seu evento através do link abaixo!',
      html: '<a href="">Link</a>',
    });
  };

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
      <ShareButton type="button" onClick={() => shareButton()}>
        <ShareIcon />
      </ShareButton>
    </ContainerElements>
  );
}
