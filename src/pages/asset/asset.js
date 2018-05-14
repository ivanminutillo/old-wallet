import {
    ScrollView,
    StyleSheet,
    View,
    Dimensions,
    Platform
  } from 'react-native'
  import * as React from 'react'
  import Drawer from '../../components/drawer'
  import AssetTemplate from '../../template/asset'
  // COMPONENTS
  import MainHeader from '../../components/header'
  // import MainFilter from './mainFilter'
  import MainOverview from '../../mainOverview'
  import MainMovements from '../../mainMovements'
  import MainFooter from '../../mainFooter'
  
  
  
const Asset = (props) => {

  console.log('props')
  console.log(props)
  return (
  <AssetTemplate>
    <View style={{flex: 1}}>
      <View style={styles.stickyHeader}>
        <MainHeader toggleDrawer={props.toggleDrawer} />
        {/* <MainFilter /> */}
      </View>
      <ScrollView style={styles.mainList} >
        <MainOverview />
        <MainMovements />
      </ScrollView>
      <View style={styles.stickyFooter} >
        <MainFooter />
      </View>
    </View>
  </AssetTemplate>
)}
  
const styles = StyleSheet.create({
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
  
  
export default Asset
  