//CRUD para eventos e listagem de eventos em que o usuário participe ou seja o host
export interface party {
  eventName: string;
  host: {
    id: number;
    name: string;
    email: string;
  };
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
