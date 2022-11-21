
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../store/accions/actions'
import Filter from '../pure/filter'



const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.filterState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
   }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default FilterContainer;