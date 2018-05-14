import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native'
import * as React from 'react'
// import View from 'react-native-linear-gradient'
import MainSectionTitle from './mainSectionTitle'
import Icon from 'react-native-vector-icons/Feather'

const MainOverview = () => (
  <View style={styles.mainListOverview}>
    <MainSectionTitle icon={<Icon name='activity'size={18} color='#454C53' />} title={'OVERVIEW'} />
    <ScrollView horizontal contentContainerStyle={styles.overviewStats}>
      <View colors={['#44B3F6', '#207BEA']} style={styles.statItem}>
        <Icon name='hash'size={18} color='#4C97F3' />
        <View style={styles.itemData}>
          <Text style={styles.itemQt}>189</Text>
          <Text style={styles.itemTitle}>MOVEMENTS</Text>
        </View>
      </View>
      <View colors={['#44B3F6', '#207BEA']} style={styles.statItem}>
        <Icon name='trending-up'size={18} color='#4C97F3' />
        <View style={styles.itemData}>
          <Text style={styles.itemQt}>1.837,50</Text>
          <Text style={styles.itemTitle}>TOKENS EXCHANGED</Text>
        </View>
      </View>
      <View colors={['#44B3F6', '#207BEA']} style={styles.statItem}>
        <Icon name='users'size={18} color='#4C97F3' />
        <View style={styles.itemData}>
          <Text style={styles.itemQt}>46</Text>
          <Text style={styles.itemTitle}>PARTECIPANTS</Text>
        </View>
      </View>
      <View colors={['#44B3F6', '#207BEA']} style={styles.statItem}>
        <Icon name='tag'size={18} color='#4C97F3' />
        <View style={styles.itemData}>
          <Text style={styles.itemQt}>21</Text>
          <Text style={styles.itemTitle}>TAGS</Text>
        </View>
      </View>
    </ScrollView>
  </View>
)


const styles = StyleSheet.create({
  mainListOverview: {
    marginBottom: 20
  },
  overviewStats: {
    marginTop: 10,
    marginBottom: 20
  },
  statItem: {
    height: 140,
    borderRadius: 4,
    padding: 15,
    width: 315,
    marginRight: 10,
    shadowColor: '#1E1445',
    shadowRadius: 10,
    backgroundColor: '#207BEA',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.2
  },
  itemData: {
    marginTop: 15
  },
  itemQt: {
    fontSize: 46,
    color: '#fff',
    fontWeight: '800'
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff'
  }
})

export default MainOverview
