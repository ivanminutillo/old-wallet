import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Image,
  Platform
} from "react-native"
import * as React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import MainFilter from './mainFilter'

const MainHeader = ({toggleDrawer, sidebarVisibility, SearchVisibility, toggleSearch, toggleFilter, filterVisibility}) => (
  <View>
    <View style={styles.mainHeader}>
      <Image style={styles.headerAvatar} />
      <Text style={styles.text}>
        Susino
      </Text>
      <View style={styles.rightIcons}>
        <TouchableHighlight
          onPress={toggleFilter}
          style={filterVisibility ? [styles.active, styles.rightIconsItem] : styles.rightIconsItem}
          underlayColor='#EFEFEF'
        >
          <View style={styles.iconsItemWrapper}>
            <Icon name='filter'size={18} color='#A8A8A8' />
            <Text style={styles.itemText}>Filter</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.rightIconsItem}>
          <Icon name='sliders'size={18} color='#A8A8A8' />
        </TouchableHighlight>
      </View>
      {Platform.OS === 'ios'
      ? <TouchableHighlight onPress={toggleDrawer} style={styles.nativeMenu}>
          <Icon name='menu'size={24} color='#A8A8A8' />
        </TouchableHighlight>
      : <View />
      }
      
    </View>
    {filterVisibility ? <MainFilter toggleFilter={toggleFilter} /> : <View />}
  </View>
)

const styles = StyleSheet.create({
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 80,
    // backgroundColor: '#fff',
    // borderBottomWidth: 1,
    // borderColor: '#E9E9E9',
    paddingLeft: 20
  },
  active: {
    backgroundColor: '#EFEFEF'
  },
  mainNavBarBack: {
    marginRight: 10,
    marginLeft: 10
  },
  nativeMenu: {
    marginTop: 40,
    marginRight: 20
  },
  headerAvatar: {
    height: 40,
    width: 40,
    borderRadius: 3,
    backgroundColor: '#dadada',
    ...Platform.select({
      ios: {
        display: 'none'
      }
    })
  },
  text: {
    color: '#454C52',
    flex: 1,
    fontSize: 32,
    marginLeft: 10,
    fontWeight: '600',
    ...Platform.select({
      ios: {
        marginLeft: 0,
        marginTop: 40
      }
    })
  },
  rightIcons: {
    flexDirection: 'row',
    marginRight: 10,
    ...Platform.select({
      ios: {
        display: 'none'
      }
    })
  },
  rightIconsItem: {
    marginRight: 20,
    borderRadius: 4,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#A6CBF9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 36
  },
  iconsItemWrapper: {
    flexDirection: 'row',
    
  },
  itemText: {
    marginLeft: 10,
    fontSize: 13,
    fontWeight: '500'
  },
  filterMember: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#A6CBF9',
    height: 60,
    borderRadius: 4,
    padding: 3,
    alignItems: 'center',
    // marginLeft: 30,
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
    left: 10,
    right: 10,
    top: 10
  },
  membersInput: {
    fontSize: 13,
    color: '#8F949A',
    paddingLeft: 10,
    flex: 1,
    height: 60
  }
})

export default MainHeader
