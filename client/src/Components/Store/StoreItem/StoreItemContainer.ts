import { connect } from "react-redux";

import StoreItem from "./StoreItem";
import StoreApi from "../../../Api/StoreApi";

const mapDispatchToProps = (dispatch: any) => ({
    RemoveItem: (id: string, itemId: string) => dispatch(StoreApi.RemoveItem(id, itemId))
});

const StoreItemContainer = connect(null, mapDispatchToProps)(StoreItem);

export default StoreItemContainer;