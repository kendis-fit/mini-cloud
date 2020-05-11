export default interface IStoreItem
{
    StoreId?: string;
    _id: string;
    name: string;
    icon: string;
    RemoveItem?: (id: string, itemId: string) => void;
}