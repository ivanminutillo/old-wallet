import * as React from 'react'
import {
  StyleSheet,
  View,
  Platform
} from 'react-native'

// TEMPLATE
import Logged from '../logged'

// COMPONENTS
import Sidebar from '../../sidebar'
  
const AssetTemplate = (props) =>  {
  console.log('ora')
  console.log(props)
  return (
    <Logged>
      <View style={{flexDirection: 'row', flex: 1}}>
        {Platform.OS === 'web'
        ? <View style={styles.sidebarWrapper}>
        <Sidebar toggleDrawer={props.toggleDrawer} />
        </View>
        : <View /> }
        <View style={styles.main}>{React.cloneElement(props.children)}</View>
      </View>
    </Logged>
  )
}
const styles = StyleSheet.create({
  sidebarWrapper: {
    flex: 1,
    // flexBasis: '18em',
  },
  main: {
    flex: 4
  }
})
  
export default AssetTemplate
  