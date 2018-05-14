// @flow
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'
import * as React from 'react'
import MainSectionTitle from './mainSectionTitle'
import Icon from 'react-native-vector-icons/Feather'

const MainMovements = () => (
    <View style={styles.movementsList}>
    <MainSectionTitle icon={<Icon name='hash'size={18} color='#454C53' />} title={'MOVEMENTS'} />
    <View style={styles.listItem}>
      <Image
        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
        style={styles.listItemAvatar}
      />
      <View style={styles.listItemInfo}>
        <Text style={styles.listItemInfoTitle}><Text style={styles.bold}>Corey Barton</Text> sent 10 susino to <Text style={styles.bold}>Alekos</Text></Text>
        <View style={styles.listItemInfoTagsContainer}>
          <View style={styles.listItemInfoTagContainer}><Text style={styles.listItemInfoTag}>Foods</Text></View>
          <View style={styles.listItemInfoTagContainer}><Text style={styles.listItemInfoTag}>Foods</Text></View>
          <View style={styles.listItemInfoTagContainer}><Text style={styles.listItemInfoTag}>Foods</Text></View>
        </View>
        <Text style={styles.listItemInfoDate}>27 Apr 2018</Text>
      </View>
    </View>
    <View style={styles.listItem}>
      <Image
        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
        style={styles.listItemAvatar}
      />
      <View style={styles.listItemInfo}>
        <Text style={styles.listItemInfoTitle}><Text style={styles.bold}>Corey Barton</Text> sent 10 susino to <Text style={styles.bold}>Alekos</Text></Text>
        <View style={styles.listItemInfoTagsContainer}>
          <View style={styles.listItemInfoTagContainer}><Text style={styles.listItemInfoTag}>Foods</Text></View>
          <View style={styles.listItemInfoTagContainer}><Text style={styles.listItemInfoTag}>Foods</Text></View>
          <View style={styles.listItemInfoTagContainer}><Text style={styles.listItemInfoTag}>Foods</Text></View>
        </View>
        <Text style={styles.listItemInfoDate}>27 Apr 2018</Text>
      </View>
    </View>
    <View style={styles.listItem}>
      <Image
        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
        style={styles.listItemAvatar}
      />
      <View style={styles.listItemInfo}>
        <Text style={styles.listItemInfoTitle}><Text style={styles.bold}>Corey Barton</Text> sent 10 susino to <Text style={styles.bold}>Alekos</Text></Text>
        <View style={styles.listItemInfoTagsContainer}>
          <View style={styles.listItemInfoTagContainer}><Text style={styles.listItemInfoTag}>Foods</Text></View>
          <View style={styles.listItemInfoTagContainer}><Text style={styles.listItemInfoTag}>Foods</Text></View>
          <View style={styles.listItemInfoTagContainer}><Text style={styles.listItemInfoTag}>Foods</Text></View>
        </View>
        <Text style={styles.listItemInfoDate}>27 Apr 2018</Text>
      </View>
    </View>
    <View style={styles.listItem}>
      <Image style={styles.listItemAvatar} source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}} />
      <View style={styles.listItemInfo}>
        <Text style={styles.listItemInfoTitle}><Text style={styles.bold}>Corey Barton</Text> sent 10 susino to <Text style={styles.bold}>Alekos</Text></Text>
        <View style={styles.listItemInfoTagsContainer}>
          <View style={styles.listItemInfoTagContainer}><Text style={styles.listItemInfoTag}>Foods</Text></View>
          <View style={styles.listItemInfoTagContainer}><Text style={styles.listItemInfoTag}>Foods</Text></View>
          <View style={styles.listItemInfoTagContainer}><Text style={styles.listItemInfoTag}>Foods</Text></View>
        </View>
        <Text style={styles.listItemInfoDate}>27 Apr 2018</Text>
      </View>
    </View>
    <View style={styles.listItem}>
      <Image
        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
        style={styles.listItemAvatar}
      />
      <View style={styles.listItemInfo}>
        <Text style={styles.listItemInfoTitle}><Text style={styles.bold}>Corey Barton</Text> sent 10 susino to <Text style={styles.bold}>Alekos</Text></Text>
        <View style={styles.listItemInfoTagsContainer}>
          <View style={styles.listItemInfoTagContainer}><Text style={styles.listItemInfoTag}>Foods</Text></View>
          <View style={styles.listItemInfoTagContainer}><Text style={styles.listItemInfoTag}>Foods</Text></View>
          <View style={styles.listItemInfoTagContainer}><Text style={styles.listItemInfoTag}>Foods</Text></View>
        </View>
        <Text style={styles.listItemInfoDate}>27 Apr 2018</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  movementsList: {
    marginTop: 5,
    marginBottom: 20
  },
  listItem: {
    borderBottomWidth: 1,
    borderColor: '#E9E9E9',
    paddingBottom: 10,
    flexDirection: 'row',
    marginTop: 10
  },
  listItemAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#dadada'
  },
  listItemContainerStyle: {
    borderColor: 'transparent'
  },
  listItemInfo: {
    paddingLeft: 10
  },
  listItemInfoTitle: {
    fontSize: 14
  },
  bold: {
    fontWeight: '500'
  },
  listItemInfoTagsContainer: {
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 10
  },
  listItemInfoTagContainer: {
    borderWidth: 1,
    borderColor: '#419BF9',
    borderRadius: 2,
    paddingLeft: 6,
    paddingRight: 6,
    marginRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    alignSelf: 'center'
  },
  listItemInfoTag: {
    color: '#419BF9',
    fontSize: 12
  },
  listItemInfoDate: {
    fontSize: 12,
    fontWeight: '500',
    color: '#B9BBBD',
    marginTop: 10
  }
})

export default MainMovements
