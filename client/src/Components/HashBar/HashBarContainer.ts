import { connect } from "react-redux";

import HashBar from "./HashBar";
import IRootState from "../../Reducers/Interfaces/IRootState";

const mapStateToProps = (state: IRootState) => ({
    Value: state.Store.Id
});

const HashBarContainer = connect(mapStateToProps, null)(HashBar);

export default HashBarContainer;