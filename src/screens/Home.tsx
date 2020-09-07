import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import {colors} from '../styles/color';

const users = [
  {
    id: 1,
    name: 'Fit and Flare',
    location: 'USA',
    email: 'jhon@xyz.com',
    uri:
      'https://i.pinimg.com/474x/7c/e6/d1/7ce6d18322d890500e0a1631fabd0e10.jpg',
    price: '$200.99',
    discount: '10%',
  },
  {
    id: 2,
    name: 'Flora Fun',
    location: 'UAE',
    email: 'doe@xyz.com',
    uri:
      'https://i.pinimg.com/474x/ac/2e/de/ac2edeed671b501f5628ea32fd86a428.jpg',
    price: '$120.50',
    discount: '10%',
  },
  {
    id: 3,
    name: 'Empire Dress',
    location: 'Canada',
    email: 'alex@xyz.com',
    uri:
      'https://i.pinimg.com/474x/0e/ac/c2/0eacc248df124d9bd3345f4dd66475d5.jpg',
    price: '$150.87',
    discount: '10%',
  },
  {
    id: 4,
    name: 'Summer Vibe',
    location: 'North America',
    email: 'bob@xyz.com',
    uri:
      'https://i.pinimg.com/474x/ec/02/0d/ec020dc3c9690c76d5feea0f596ccc1b.jpg',
    price: '$180.39',
    discount: '10%',
  },
  {
    id: 5,
    name: 'Classic Dress',
    location: 'Pakistan',
    email: 'ali@xyz.com',
    uri:
      'https://i.pinimg.com/474x/e1/f9/34/e1f9349759809f24cf487db9aaf50485.jpg',
    price: '$100.57',
    discount: '10%',
  },
  {
    id: 6,
    name: 'Berry Berry',
    location: 'Britain',
    email: 'ali@xyz.com',
    uri:
      'https://i.pinimg.com/474x/01/b9/b9/01b9b9da48770678dbf09f179997e638.jpg',
    price: '$220.99',
    discount: '10%',
  },
  {
    id: 7,
    name: 'Pretty Lady',
    location: 'Dubai',
    email: 'doe@xyz.com',
    uri:
      'https://i.pinimg.com/474x/f8/7d/16/f87d169920425c5ebb3f92b6511740f8.jpg',
    price: '$350.49',
    discount: '10%',
  },
  {
    id: 8,
    name: 'City Girl',
    location: 'HongKong',
    email: 'alex@xyz.com',
    uri:
      'https://i.pinimg.com/474x/3c/09/f1/3c09f13e5ece2c0d070dbcde1aa97d00.jpg',
    price: '$270.29',
    discount: '10%',
  },
];

function CustomImage({imageURI}: any) {
  return (
    <Image
      style={styles.imageThumbnail}
      source={{
        uri: imageURI,
      }}
    />
  );
}

interface CardProps {
  item: any;
  handlePress: any;
}

function Card({item, handlePress}: CardProps) {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => handlePress(item)}>
      <CustomImage imageURI={item.uri} />
      <View style={styles.detailHolder}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.priceDetail}>
          <Text style={styles.price}> {item.price}</Text>
          <Text style={styles.discount}> {item.discount} OFF</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

interface Props {
  onPress?: Function;
  navigation?: any;
}

export default class Home extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  handlePress = (item: any) => {
    console.log('HANDLE PRESS ', item);
    this.props.navigation.navigate('Details');
  };

  render() {
    return (
      <React.Fragment>
        <FlatList
          columnWrapperStyle={styles.container}
          data={users}
          numColumns={2}
          renderItem={({item}) => (
            <Card item={item} handlePress={this.handlePress} />
          )}></FlatList>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: colors.primary,
  },
  name: {
    fontFamily: 'Times New Roman',
    fontSize: 20,
    marginBottom: 5,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 170,
    borderRadius: 10,
  },
  cardContainer: {
    marginTop: 40,
  },
  detailHolder: {
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
  },
  discount: {
    marginLeft: 15,
    fontSize: 16,
    color: colors.discountText,
  },
  priceDetail: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
