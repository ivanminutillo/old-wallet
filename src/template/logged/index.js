import {compose, withState, withHandlers} from 'recompose'
import Component from './logged'

const EnhancedWrapper = compose(
    withState('drawerVisibility', 'handleDrawerVisibility', false),
    withHandlers({
      toggleDrawer: props => () => props.handleDrawerVisibility(!props.drawerVisibility)
    }
  )
  )(Component)

export default Component
