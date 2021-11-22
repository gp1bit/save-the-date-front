//endpoint de CRUD para eventos, listagem com filtro por host do evento, e convidados e endpoint para adicionar/editar/excluir novos items
export interface IPartyRequest {
  partyName: string;
  hostId: number;
  adress: string;
  city: string;
  state: string;
  date: string;
  startTime: string;
  closingTime: string;
  items: [
    {
      itemName: string;
      userId: number;
      userName: string;
    }
  ];
}
