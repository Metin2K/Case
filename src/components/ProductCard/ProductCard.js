import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './ProductCard.style';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/CartSlice';

const ProductCard = ({product, onSelect}) => {
  // const dispatch = useDispatch();
  const [cartProductName, setCartProductName] = useState([]);
  const [cartProductPrice, setCartProductPrice] = useState([]);
  const addtoCart = product => {
    Alert.alert('Product added to cart', product.name);
    const names = product.name;
    const prices = product.price;
    setCartProductName([...cartProductName, names]);
    setCartProductPrice([...cartProductPrice, prices]);
    console.log(names);
    console.log(prices);
    //   dispatch(addToCart(product));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelect}>
        <View style={styles.cardcontainer}>
          <View style={styles.card}>
            <View style={styles.imagecontainer}>
              <Image style={styles.image} source={{uri: product.image}} />
            </View>
            <View>
              <Text style={styles.price}>{product.price} ₺</Text>
              <Text styles={styles.name}>{product.name}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                addtoCart(product);
              }}
              style={styles.buttoncontainer}>
              <Text style={styles.button}> Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
