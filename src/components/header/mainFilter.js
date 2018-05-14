// @flow
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Platform
  } from "react-native"
import * as React from 'react'
import Icon from 'react-native-vector-icons/Feather'

const MainFilter = ({toggleFilter}) => (
  <View style={styles.mainFilter}>
    <View style={styles.mainFilterWrapper}>
    <Icon name='filter' size={18} color='#454C53' />
    <Text style={styles.mainFilterTitle}>FILTERS</Text>
    </View>
    <View style={[styles.filterLayer, styles.filterDate]}>
      <Icon name='calendar'size={18} color='#454C53' />
      <TouchableHighlight style={styles.buttonDate}><Text style={styles.buttonDateTitle}>All</Text></TouchableHighlight>
    </View>
    <View style={[styles.filterLayer, styles.filterTag]}>
      <Icon name='tag'size={18} color='#419BF9' />
      <TouchableHighlight style={styles.buttonTag}><Text style={styles.buttonTagTitle}>All Tags</Text></TouchableHighlight>
    </View>
    <View style={[styles.filterLayer, styles.filterMember]}>
      <Icon name='users'size={18} color='#454C53' />
      <TextInput style={styles.membersInput} placeholder='All partecipants' />
    </View>
    <TouchableHighlight
      onPress={toggleFilter}
      underlayColor='#EFEFEF'
    >
      <Icon name='x-circle'size={22} color='#C8C8C8' />
    </TouchableHighlight>
  </View>
)

const styles = StyleSheet.create({
  mainFilter: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#A6CBF9',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
    flex: 1,
    left: 10,
    right: 10,
    top: 10
    // ...Platform.select({
    //   ios: {
    //     flexDirection: 'column',
    //     height: 240
    //   }
    // })
  },
  mainFilterWrapper: {
    borderRightWidth: 1,
    borderColor: '#E4E4E4',
    paddingLeft: 10,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  mainFilterTitle: {
    paddingLeft: 10,
    fontSize: 12,
    color: '#454C53',
    fontWeight: '600'
  },
  // filterLayer: {
  //   marginBottom: 10
  // },
  filterDate: {
    flexDirection: 'row',
    marginLeft: 30
  },
  buttonDate: {
    backgroundColor: '#E4E4E4',
    height: 20,
    marginLeft: 10
  },
  buttonDateTitle: {
    fontSize: 13,
    color: '#8F949A',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    padding: 2
  },
  filterTag: {
    flexDirection: 'row',
    marginLeft: 30,
    alignItems: 'center'
  },
  buttonTag: {
    borderWidth: 1,
    borderColor: '#419BF9',
    padding: 2,
    marginLeft: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonTagTitle: {
    color: '#419BF9',
    fontSize: 13,
    alignItems: 'center'
  },
  filterMember: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    height: 34,
    padding: 3,
    flex: 1,
    alignItems: 'center',
    marginLeft: 30,
    paddingLeft: 10,
    marginRight: 10
  },
  membersInput: {
    fontSize: 13,
    color: '#8F949A',
    paddingLeft: 10
  }
})
export default MainFilter
