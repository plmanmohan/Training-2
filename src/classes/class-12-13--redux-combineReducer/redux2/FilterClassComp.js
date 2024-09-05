import { Component } from "react";
import { connect } from "react-redux";
import { setFilter } from "./actions";

class FilterClassComp extends Component {
    render() {
        const {setFilterProp, filter} = this.props;
        return (
            <div>
            <div>Filter</div>
            <button onClick={() => setFilterProp('ALL')} disabled={filter === 'ALL'}>All</button>
            <button onClick={() => setFilterProp('COMPLETED')} disabled={filter === 'COMPLETED'}>Complete</button>
            <button onClick={() => setFilterProp('INCOMPLETED')} disabled={filter === 'INCOMPLETED'}>Incomplete</button>
        </div>
        )
    }
}
// sruthiveerepalli.20@gmail.com
const mapStateToProps = (state) => {
    return {
      filter: state.filter,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        setFilterProp: (filter) => dispatch(setFilter(filter))
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(FilterClassComp);
