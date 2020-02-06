import IAddStore from "../Reducers/Store/Interfaces/IAddStore";
import IInitStore from "../Reducers/Store/Interfaces/IInitStore";
import ICreateStore from "../Reducers/Store/Interfaces/ICreateStore";

export type StoreTypes = ICreateStore | IAddStore | IInitStore;