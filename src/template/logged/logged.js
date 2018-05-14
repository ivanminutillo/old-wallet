import {
    StyleSheet,
    View,
    Platform
  } from 'react-native'
import * as React from 'react'
import Drawer from '../../components/drawer'

const Logged = (props) => {
  console.log(props)
  return (
    <View style={styles.container}>
      {props.drawerVisibility ? <Drawer toggleDrawer={props.toggleDrawer} /> : <View /> }
      <View style={styles.wrapper}>
        {React.cloneElement(props.children, {...props})}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        paddingTop: 30
      }
    })
  },
  wrapper: {
    flex: 1
  }
})

export default Logged
