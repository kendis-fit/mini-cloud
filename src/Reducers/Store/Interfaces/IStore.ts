import IComponentStore from "../../../Components/Store/Interfaces/IStore";

export default interface IStore extends IComponentStore
{
    Id: string | null;
}
