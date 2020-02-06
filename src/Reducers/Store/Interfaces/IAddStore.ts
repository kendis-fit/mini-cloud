import IStoreItem from "../../../Components/Store/Interfaces/IStoreItem";

export default interface ICreateStore
{
    type: string;
    value: IStoreItem;
}