import {compose, withState, withHandlers} from 'recompose'
import Header from './mainHeader'

const WithState = compose(
  withState('filterVisibility', 'handleFilterVisibility', false),
  withState('SearchVisibility', 'handleSearchVisibility', false),
  withHandlers({
    toggleFilter: props => () => {
      return props.handleFilterVisibility(!props.filterVisibility)
    },
    toggleSearch: props => () => {
      return props.handleSearchVisibility(!props.SearchVisibility)
    }
})
)(Header)

export default WithState
