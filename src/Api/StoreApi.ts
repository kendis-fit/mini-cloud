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

    public static GetStore(id: string)
    {
        return async (dispatch: any) => {
            try
            {
                const response = await fetch(`${process.env["REACT_APP_API"]}/stores/${id}`);

                if (response.status === 200)
                {
                    const result = await response.json();
                    dispatch(InitStore({ Id: id, Items: result }));
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

    public static AddItem(id: string, name: string, GetId?: (itemId: string) => void)
    {
        return async (dispatch: any) => {
            try
            {
                const response = await fetch(`${process.env["REACT_APP_API"]}/stores/${id}/items`, {
                    method: "POST",
                    body: JSON.stringify({ name }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (response.status === 201)
                {
                    const result = await response.json();
                    GetId?.(result.id);
                    dispatch(AddItem({ _id: result.id, name: name, icon: result.icon }));
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