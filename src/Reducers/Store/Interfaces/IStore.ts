import IStoreItem from "../../../Components/Store/Interfaces/IStoreItem";

export default interface IStore
{
    Id?: string;
    Items?: IStoreItem[];
}