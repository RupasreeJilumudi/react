import {connect} from 'react-redux';
//import {selectValue} from '../action/actionEvent'
//import * as actionCreators from './component/action/aindex'
import {selectValue} from '../component/common/action/actionEvent'
import * as actionCreators from '../component/common/action/aindex'
const mapDispatchProps = (dispatch) => ({
    selectValue: (event) =>dispatch(selectValue(event)),
}); 
export default connect(mapDispatchProps, actionCreators)(DropDown);





