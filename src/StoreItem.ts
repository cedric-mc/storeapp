export interface StoreItem {
    id: string;
    name: string;
    description: string;
    price: number;
    discount?: number;
    picture?: string;
}