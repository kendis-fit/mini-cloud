import { connect } from "react-redux";

import SearchBar from "./SearchBar";
import StoreApi from "../../../Api/StoreApi";

const mapDispatchToProps = (dispatch: any) => ({
    GetStore: (Id: string) => dispatch(StoreApi.GetStore(Id))
});

const SearchBarContainer = connect(null, mapDispatchToProps)(SearchBar);

export default SearchBarContainer;