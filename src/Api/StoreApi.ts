import { CreateStore, AddItem, InitStore } from "../Reducers/Store/StoreActions";

export default class StoreApi
{
    public static CreateStore()
    {
        return async (dispatch: any) => {
            try
            {
                const response = await fetch(`${process.env["REACT_APP_API"]}/stores`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (response.status === 201)
                {
                    const result = await response.json();
                    dispatch(CreateStore(result.id));
                }
                else
                {
                    throw new Error("Create store failed");
                }
            }
            catch (error)
            {
                alert(error.message);
            }
        }
    }

    public static GetStore(Id: string)
    {
        return async (dispatch: any) => {
            try
            {
                const response = await fetch(`${process.env["REACT_APP_API"]}/stores/${Id}`);

                if (response.status === 200)
                {
                    const result = await response.json();
                    dispatch(InitStore({ Id, Items: result }));
                }
                else if (response.status === 404)
                {
                    throw new Error("Store not found");
                }
                else
                {
                    throw new Error("Get store failed");
                }
            }
            catch (error)
            {
                alert(error.message);
            }
        }
    }

    public static AddItem(Id: string, Name: string, GetId?: (ItemId: string) => void)
    {
        return async (dispatch: any) => {
            try
            {
                const response = await fetch(`${process.env["REACT_APP_API"]}/stores/${Id}/items`, {
                    method: "POST",
                    body: JSON.stringify({ name: Name }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (response.status === 201)
                {
                    const result = await response.json();
                    GetId?.(result.id);
                    dispatch(AddItem({ _id: result.id, name: Name, icon: result.icon }));
                }
                else
                {
                    throw new Error("Add item failed");
                }
            }
            catch (error)
            {
                alert(error.message);
            }
        }
    }

    
}