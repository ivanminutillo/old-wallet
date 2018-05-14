
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  Platform
} from "react-native"
import * as React from 'react'
import Icon from 'react-native-vector-icons/Feather'

const Drawer = ({toggleDrawer}) => {
  return (
  <View style={styles.drawerContainer}>
    <View style={styles.drawer}>
      <View style={styles.drawerProfile}>
        <Image style={styles.profileAvatar} source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}} />
        <Text style={styles.sidebarProfileTitle}>Ivan Minutillo</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SOCIAL CURRENCIES</Text>
        <View style={styles.sectionList}>
          <Text style={styles.listItem}>Susino</Text>
          <Text style={styles.listItem}>ECO</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SHARES</Text>
        <View style={styles.sectionList}>
          <Text style={styles.listItem}>CoopShares</Text>
        </View>
      </View>
      <View style={styles.generalOptions}>
        <TouchableHighlight style={styles.optionsItem}>
          <View style={styles.optionsItemWrapper}>
            <Icon name='settings' size={20} color={'#B6B6B6'} />
            <Text style={styles.itemText}>Settings</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>🍶 Varnelli</Text>
        <Text style={styles.footerTagline}>Version 0.0.1</Text>
      </View>
    </View>
    <TouchableHighlight onPress={toggleDrawer} style={styles.drawerBackground}>
      <View />
    </TouchableHighlight>
  </View>
)}

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    flex: 1,
    padding: 20
  },
  footerTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: '#454C53',
    marginBottom: 10
  },
  footerTagline: {
    fontSize: 14,
    fontWeight: '300',
    color: '#8D9399'
  },
  generalOptions: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#E6E6E6'
  },
  optionsItemWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center'
  },
  itemText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500'
  },
  drawerContainer: {
    position: 'absolute',
    zIndex: 9999999,
    backgroundColor: 'rgba(0,0,0,.3)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  drawer: {
    width: 300,
    backgroundColor: '#fff',
    height: '100%'
  },
  drawerProfile: {
    backgroundColor: '#207BEA',
    height: 140,
    padding: 20,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        paddingTop: 40
      }
    })
  },
  section: {
    padding: 20,
    paddingBottom: 0
  },
  sectionTitle: {
    color: '#BDC3C9',
    fontSize: 13,
    marginBottom: 20
  },
  listItem: {
    fontSize: 14,
    color: '#454C53',
    fontWeight: '500',
    marginBottom: 15
  },
  profileAvatar: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  sidebarProfileTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginTop: 10
  },
  drawerBackground: {
    flex: 4
  }
})

export default Drawer
