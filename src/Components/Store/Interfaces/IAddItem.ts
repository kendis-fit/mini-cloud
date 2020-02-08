export default interface IAddItem
{
    Id?: string;
    AddItem: (id: string, name: string, GetId?: (itemId: string) => void) => void;
    RemoveItem: (id: string, itemId: string) => void;
}