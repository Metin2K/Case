import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '95%',
    height: 200,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
    fontFamily: 'Montserrat',
  },
  description: {
    fontSize: 14,
    margin: 15,
  },
  textcontainer: {
    marginHorizontal: 0,
  },
  purchase: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
  },
  priceContainer: {
    flex: 1,
    marginBottom: 0,
  },
  priceText: {
    color: '#2A59FE',
    fontSize: 20,
    marginLeft: 15,
  },
  price: {
    color: 'black',
    fontSize: 20,
    marginLeft: 25,
    fontWeight: 'bold',
  },
  buyContainer: {
    flex: 1,
    backgroundColor: '#2A59FE',
    marginRight: 15,
    borderRadius: 3,
  },
  buyText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 7,
  },
});
