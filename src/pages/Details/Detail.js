import {Image, View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import {useNavigation} from '@react-navigation/native';

const Details = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: data.name,
    });
  }, [navigation, data]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.image}} />
      <View style={styles.textcontainer}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>
      <View style={styles.purchase}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Price:</Text>
          <Text style={styles.price}>{data.price} ₺</Text>
        </View>
        <TouchableOpacity style={styles.buyContainer}>
          <Text style={styles.buyText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
