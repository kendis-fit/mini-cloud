import IStoreItem from "./IStoreItem";

export default interface IStore
{
    Id?: string;
    Items?: IStoreItem[];
}