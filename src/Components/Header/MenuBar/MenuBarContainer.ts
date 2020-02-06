import { connect } from "react-redux";

import MenuBar from "./MenuBar";
import StoreApi from "../../../Api/StoreApi";

const mapDispatchToProps = (dispatch: any) => ({
    CreateStore: () => dispatch(StoreApi.CreateStore())
});

const MenuBarContainer = connect(null, mapDispatchToProps)(MenuBar);

export default MenuBarContainer;