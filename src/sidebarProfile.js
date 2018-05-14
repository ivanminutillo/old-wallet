import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
  } from "react-native"
import * as React from 'react'
// import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'

const SidebarProfile = ({toggleDrawer}) => (
    <View style={styles.sidebarProfile}>
      <TouchableOpacity onPress={toggleDrawer} style={styles.sidebarProfileIcon}>
        <Icon name='menu' size={18} color='#fff' />
      </TouchableOpacity>
      <Image style={styles.profileAvatar} source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}} />
      <View style={styles.sidebarProfileInfo}>
        <Text style={styles.sidebarProfileTitle}>Ivan Minutillo</Text>
        <View style={styles.sidebarProfileBalanceGeneral}>
          <Icon name='trending-down' size={16} color='#C20F0F' />
          <Text style={styles.sidebarProfileBalance}>293.00 $</Text>
        </View>
      </View>
    </View>
)

const styles = StyleSheet.create({
  sidebarProfile: {
    height: 80,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderBottomWidth: 0,
    flexDirection: 'row',
    borderRadius: 4,
    alignItems: 'center',
    shadowColor: '#1E1445',
    shadowRadius: 10,
    backgroundColor: '#207BEA',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.2
  },
  profileAvatar: {
    height: 48,
    width: 48,
    borderRadius: 100
  },
  sidebarProfileInfo: {
    flex: 1,
    paddingLeft: 10,
    // paddingTop: 10
  },
  sidebarProfileIcon: {
    alignItems: 'center',
    paddingRight: 10,
    // paddingTop: 15,
    paddingLeft: 10
  },
  sidebarProfileTitle: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500'
  },
  sidebarProfileBalanceGeneral: {
    flexDirection: 'row',
    paddingTop: 6
  },
  sidebarProfileBalance: {
    fontSize: 12,
    color: '#BDDFFA',
    paddingLeft: 10
  }
})

export default SidebarProfile
