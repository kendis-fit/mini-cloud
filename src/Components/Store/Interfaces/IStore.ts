import IStoreItem from "./IStoreItem";

export default interface IStore
{
    Id: string | null;
    Items: IStoreItem[];
}