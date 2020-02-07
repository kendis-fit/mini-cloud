export default interface IAddItem
{
    Id?: string;
    AddItem: (Id: string, Name: string, GetId?: (ItemId: string) => void) => void;
}