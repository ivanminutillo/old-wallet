// @flow
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Platform
} from 'react-native'
import * as React from 'react'
import Icon from 'react-native-vector-icons/Feather'

const MainFooter = () => (
  // <View style={styles.nativeTx}>
    /* <TouchableHighlight style={styles.barToggleTx}>
      <View style={styles.barToggleTxWrapper}>
        <Icon name='navigation'size={18} color='#fff' />
        <Text style={styles.txTitle}>Send a Transaction</Text>
      </View>
    </TouchableHighlight> */
  <View>
    <View style={styles.nativeFooter}>
      <TouchableHighlight style={styles.nativeFooterItem}>
        <View style={styles.nativeFooterItemWrapper}>
          <Icon name='users'size={22} color='#C8C8C8' />
          <Text style={styles.nativeFooterItemText}>MEMBERS</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.nativeFooterItem}>
        <View style={styles.nativeFooterItemWrapper}>
          <Icon name='filter'size={22} color='#C8C8C8' />
          <Text style={styles.nativeFooterItemText}>FILTERS</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.nativeFooterItem}>
        <View style={styles.nativeFooterItemWrapper}>
          <Icon name='navigation'size={22} color='#C8C8C8' />
          <Text style={styles.nativeFooterItemText}>SEND</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.nativeFooterItem}>
        <View style={styles.nativeFooterItemWrapper}>
          <Icon name='sliders'size={22} color='#C8C8C8' />
          <Text style={styles.nativeFooterItemText}>SETTINGS</Text>
        </View>
      </TouchableHighlight>
    </View>
    <View style={styles.tabBar}>
      <View style={[styles.tabBarButton, styles.button1]} ><Text style={styles.tabBarButtonText}>Amount</Text><TextInput style={styles.tabBarInput} placeholder='00.00' /></View>
      <View style={[styles.tabBarButton, styles.button1]} ><Text style={styles.tabBarButtonText}>To</Text><TextInput style={styles.tabBarInput} placeholder='@member' /></View>
      <View style={[styles.tabBarButton, styles.button3]} >
        <View style={styles.filterTag}>
          <Icon name='tag'size={18} color='#419BF9' />
          <TouchableHighlight style={styles.buttonTag}><Text style={styles.buttonTagTitle}>All Tags</Text></TouchableHighlight>
        </View>
      </View>
      <View style={[styles.tabBarButton, styles.button4]} >
        <TouchableHighlight>
          <Icon name='check'size={26} color='#36B37E' />
        </TouchableHighlight>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  nativeFooter: {
    height: 60,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#E9E9E9',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    display: 'none',
    ...Platform.select({
      ios: {
        display: 'flex'
      }
    })
  },
  nativeFooterItem: {
    flex: 1,
    alignItems: 'center',
  },
  nativeFooterItemWrapper: {
    alignItems: 'center',
  },
  nativeFooterItemText: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 5
  },
  tabBar: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E9E9E9',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        // flexDirection: 'column',
        // height: 180,
        // paddingTop: 10,
        // paddingBottom: 10
        display: 'none'
      }
    })
  },
  barToggleTx: {
    backgroundColor: '#36B37E',
    height: 50,
    // flex: 1,
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%'
  },
  barToggleTxWrapper: {
    flexDirection: 'row',
  },
  txTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: '#fff',
    marginLeft: 10
  },
  button1: {
    flex: 2,
    flexWrap: 'wrap',
    height: 40,
    borderColor: '#F0F0F0',
    borderWidth: 1,
    borderRadius: 2,
    marginRight: 10,
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#1E1445',
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.2,
    ...Platform.select({
      ios: {
        marginBottom: 10
      }
    })
  },
  tabBarButtonText: {
    fontSize: 14,
    fontWeight: '500',
    paddingRight: 10,
    borderRightWidth: 1,
    paddingLeft: 5
  },
  tabBarInput: {
    flex: 1,
    borderLeftWidth: 1,
    borderColor: '#f8f8f8',
    color: '#E4E4E4',
    fontWeight: '200',
    paddingLeft: 10,
    // height: 40
  },
  buttonTagTitle: {
    color: '#419BF9',
    fontSize: 13,
    alignItems: 'center'
  },
  button3: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 1
  },
  button4: {
    flexWrap: 'wrap',
    paddingRight: 20,
    paddingLeft: 20,
    borderLeftWidth: 1,
    borderColor: '#E4E4E4'
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
  }
})

export default MainFooter
