import IStoreItem from "./IStoreItem";

export default interface IStore
{
    Id?: string;
    Items?: IStoreItem[];
    AddItem?: (id: string, name: string, GetId?: (itemId: string) => void) => void;
    RemoveItem?: (id: string, itemId: string) => void;
}