export interface ItemProps {
  name: string;
  id: number;
}

export interface ItemComponentProps extends ItemProps {
  onPress: (item: ItemProps) => void;
}

export interface CreateItemResponse {
  createCard: {
    __typename: string;
    id: number;
    name: string;
  };
}
