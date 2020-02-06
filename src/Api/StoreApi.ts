import { CreateStore, InitStore } from "../Reducers/Store/StoreActions";

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
                const response = await fetch(`${process.env["REACT_APP_API"]}/${Id}`);

                if (response.status === 200)
                {
                    const result = await response.json();
                    dispatch(InitStore(result));
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
}