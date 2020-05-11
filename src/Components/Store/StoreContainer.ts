import { connect } from "react-redux";

import Store from "./Store";
import StoreApi from "../../Api/StoreApi";
import IRootState from "../../Reducers/Interfaces/IRootState";

const mapStateToProps = (state: IRootState) => ({
    Id: state.Store.Id,
    Items: state.Store.Items
});

const mapDispatchToProps = (dispatch: any) => ({
    AddItem: (id: string, name: string, GetId?: (itemId: string) => void) => dispatch(StoreApi.AddItem(id, name, GetId)),
    RemoveItem: (id: string, itemId: string) => dispatch(StoreApi.RemoveItem(id, itemId))
});

const StoreContainer = connect(mapStateToProps, mapDispatchToProps)(Store);

export default StoreContainer;