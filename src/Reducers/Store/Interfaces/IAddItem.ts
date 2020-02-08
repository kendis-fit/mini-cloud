import IStoreItem from "../../../Components/Store/Interfaces/IStoreItem";

export default interface IAddItem
{
    type: string;
    value: IStoreItem;
}