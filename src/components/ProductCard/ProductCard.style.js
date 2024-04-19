import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  cardcontainer: {
    flex: 1,
    flexDirection: 'row',
  },

  card: {
    borderColor: '#e0e0e0',
    borderWidth: 1,
    margin: 10,
    width: 170,
    height: 302,
    padding: 10,
    shadowColor: ' #0000001A',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
  },

  buttoncontainer: {
    backgroundColor: '#2A59FE',
    padding: 10,
    borderRadius: 4,
    width: 150,
    height: 36,
    marginTop: 20,
  },
  button: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
  imagecontainer: {
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 10,
    justifyContent: 'center',
  },
  price: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    color: '#2A59FE',
    fontSize: 14,
    marginVertical: 8,
  },
  name: {
    fontSize: 16,
    marginVertical: 10,
  },
});
