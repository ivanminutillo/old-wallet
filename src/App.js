// @flow
import * as React from 'react'
import {
  View
} from 'react-native'
import Asset from './pages/asset'
import Profile from './pages/profile'
import {Router, Switch, Route} from './Routing'
import {compose, withState, withHandlers} from 'recompose'


// ROUTING
const App = () => (
  <Router>
    <View style={{flex: 1}}>
    <Switch>
      <Route exact path='/' component={Asset} />
      {/* <Route exact path='/profile' component={Profile} /> */}
    </Switch>
    </View>
  </Router>
)

const EnhancedWrapper = compose(
  withState('drawerVisibility', 'handleDrawerVisibility', false),
  withHandlers({
    toggleDrawer: props => () => props.handleDrawerVisibility(!props.drawerVisibility)
  }
)
)(App)

export default EnhancedWrapper