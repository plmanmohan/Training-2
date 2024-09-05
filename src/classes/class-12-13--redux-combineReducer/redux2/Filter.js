import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./actions";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    console.log(filter)
    return (
        <div>
            <div>Filter</div>
            <button onClick={() => dispatch(setFilter('ALL'))} disabled={filter === 'ALL'}>All</button>
            <button onClick={() => dispatch(setFilter('COMPLETED'))} disabled={filter === 'COMPLETED'}>Complete</button>
            <button onClick={() => dispatch(setFilter('INCOMPLETED'))} disabled={filter === 'INCOMPLETED'}>Incomplete</button>
        </div>
    )
}

export default Filter;