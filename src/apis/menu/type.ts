export interface BoothMenuResponse {
  booth_name: string;
  menu: {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    sell_count: number;
    is_open: boolean;
  }[];
}
