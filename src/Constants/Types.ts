import IAddStore from "../Reducers/Store/Interfaces/IAddItem";
import IInitStore from "../Reducers/Store/Interfaces/IInitStore";
import IRemoveItem from "../Reducers/Store/Interfaces/IRemoveItem";
import ICreateStore from "../Reducers/Store/Interfaces/ICreateStore";

export type StoreTypes = ICreateStore | IAddStore | IInitStore | IRemoveItem;