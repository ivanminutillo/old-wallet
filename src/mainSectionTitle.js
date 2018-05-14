import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import * as React from 'react'

const MainSectionTitle = ({icon, title}) => (
  <View style={styles.overviewInfo}>
    {icon}
    <Text style={styles.overviewTitle}>{title}</Text>
  </View>
)

const styles = StyleSheet.create({
  overviewInfo: {
    flexDirection: 'row',
    marginBottom: 10
  },
  overviewTitle: {
    marginLeft: 10,
    fontSize: 12,
    color: '#454C53',
    fontWeight: '600'
  }
})

export default MainSectionTitle
