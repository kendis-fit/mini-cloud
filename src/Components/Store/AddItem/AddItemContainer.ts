import { connect } from "react-redux";

import AddItem from "./AddItem";
import StoreApi from "../../../Api/StoreApi";
import IRootState from "../../../Reducers/Interfaces/IRootState";

const mapStateToProps = (state: IRootState) => ({
    Id: state.Store.Id
});

const mapDispatchToProps = (dispatch: any) => ({
    AddItem: (Id: string, Name: string, GetId?: (ItemId: string) => void) => dispatch(StoreApi.AddItem(Id, Name, GetId))
});

const AddItemContainer = connect(mapStateToProps, mapDispatchToProps)(AddItem);

export default AddItemContainer;