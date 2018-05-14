import {
    ScrollView,
    StyleSheet,
    View,
    Dimensions,
    Text,
    Platform
  } from 'react-native'
  import * as React from 'react'
  import Drawer from '../../components/drawer'
  
  // COMPONENTS
  import Sidebar from '../../sidebar'
  import MainHeader from '../../components/header'
  // import MainFilter from './mainFilter'
  import MainOverview from '../../mainOverview'
  import MainMovements from '../../mainMovements'
  import MainFooter from '../../mainFooter'
  
  
  class Profile extends React.Component {
    constructor (props) {
      super(props)
      this.onContainerLayout = this.onContainerLayout.bind(this)
      this.state = {
        sidebarVisibility: true
      }
    }
  
    onContainerLayout (e) {
      let {width} = Dimensions.get('window')
      if (width < 800) {
        return this.setState({
          sidebarVisibility: false
        })
      } else {
        return this.setState({
          sidebarVisibility: true
        })
      }
    }
  
    render () {
      const {sidebarVisibility} = this.state
      const {toggleDrawer, drawerVisibility} = this.props
      return (
          <View style={styles.container} onLayout={this.onContainerLayout}>
            {drawerVisibility ? <Drawer toggleDrawer={toggleDrawer} /> : <View /> }
            {Platform.OS !== 'ios'
            ? <View style={styles.sidebarWrapper}>
            </View>
            : <View /> }
            <View style={styles.main}>
              <View style={styles.stickyHeader}>
                <Text>Profile</Text>
              </View>
            </View>
          </View>
      )
    }
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
    sidebarWrapper: {
      flex: 1,
      // flexBasis: '18em',
    },
    main: {
      flex: 4
    },
    stickyFooter: {
      height: 60,
      backgroundColor: '#fff',
      ...Platform.select({
        ios: {
          height: 'auto'
        }
      })
    },
    stickyHeader: {
      height: 'auto',
      backgroundColor: '#F8F8F8'
    },
    mainList: {
      flex: 1,
      flexBasis: 1,
      flexGrow: 1,
      padding: 20,
      backgroundColor: '#F8F8F8',
    }
  })
  
  
  export default Profile
  