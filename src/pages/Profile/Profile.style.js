import {Image, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  Header: {
    width: '100%',
    height: 97,
    backgroundColor: '#2A59FE',
  },
  HeaderText: {
    marginLeft: 30,
    textAlign: 'left',
    fontSize: 27,
    color: 'white',
    fontWeight: 'bold',
    marginTop: -40,
  },
  ImageView: {
    paddingLeft: 45,
    marginTop: 120,
    flex: 1,
    width: 100,
    height: 100,
  },
  Name: {
    fontWeight: 'bold',
    marginTop: 80,
    fontSize: 30,
    textAlign: 'center',
    flex: 1,
  },

  Image: {
    width: 300,
    height: 300,
    borderRadius: 30,
  },
});
