import IStore from "../../../Components/Store/Interfaces/IStore";

export default interface IInitStore
{
    type: string;
    value: IStore;
}