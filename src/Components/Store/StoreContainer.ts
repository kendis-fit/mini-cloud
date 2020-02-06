import { connect } from "react-redux";

import Store from "./Store";
import IRootState from "../../Reducers/Interfaces/IRootState";

const mapStateToProps = (state: IRootState) => ({
    Id: state.Store.Id,
    Items: state.Store.Items
});

const StoreContainer = connect(mapStateToProps, null)(Store);

export default StoreContainer;