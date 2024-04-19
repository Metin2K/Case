import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CartCard.style';
import {useSelector, useDispatch} from 'react-redux';

const CartCard = () => {
  // const cart = useSelector(state => state.cart);
  // console.log(cart);
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Text style={styles.name}>Product Name</Text>
        <Text style={styles.price}>Product Price</Text>
        <View style={styles.price}>
          <View>
            <Text style={styles.price}> ₺</Text>
            <Text styles={styles.name} />
          </View>
          <Text style={styles.button}> Add to Cart</Text>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
