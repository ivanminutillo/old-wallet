import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image
} from "react-native"
import * as React from 'react'
import userlist from './list'
import Icon from 'react-native-vector-icons/Feather'
import SidebarProfile from './sidebarProfile'

const Sidebar = ({toggleDrawer}) => (
  <View style={styles.sidebar}>
    <View style={styles.sidebarProfile}>
      <SidebarProfile toggleDrawer={toggleDrawer} />
    </View>
    <ScrollView style={styles.sidebarList}>
      <SidebarTitle />
      <View style={{marginTop: 10, borderTopWidth: 0, borderBottomWidth: 0}}>
        {
          userlist.map((l, i) => (
            <View key={i} style={styles.listItem}>
              <Image style={styles.avatarImage} source={{uri: l.avatar_url}} />
              <Text style={styles.listItemAvatarText}>{l.name}</Text>
            </View>
          ))
        }
      </View>
    </ScrollView>
  </View>
)

const SidebarTitle = () => (
  <View style={styles.sidebarListPrimary}>
    <Text style={styles.sidebarListIcon}>
      <Icon name='users' size={18} color='#8E9397' />
    </Text>
    <Text style={styles.sidebarListText}>46 PARTECIPANTS</Text>
  </View>
)

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#E9E9E9',
    borderRightWidth: 1
  },
  sidebarListPrimary: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    paddingTop: 20
  },
  sidebarListIcon: {
    paddingLeft: 5
  },
  sidebarList: {
    flex: 1,
    flexBasis: 1,
    flexGrow: 1,

  },
  listItem: {
    marginBottom: 20,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarImage: {
    width: 30,
    height: 30,
    borderRadius: 100
  },
  listItemAvatarText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#454C53',
    fontWeight: '500'
  },
  sidebarProfile: {
    height: 100
  },
  sidebarListText: {
    color: '#8E9397',
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: '500'
  }
})

export default Sidebar
