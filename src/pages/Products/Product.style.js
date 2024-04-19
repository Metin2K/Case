import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Search: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    width: '95%',
    height: 40,
    alignSelf: 'center',
    backgroundColor: '#fafafb',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  filterButton: {
    backgroundColor: '#D9D9D9',
    width: 158,
    height: 36,
    alignItems: 'center',
    paddingVertical: 10,
  },

  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginVertical: 5,
    marginBottom: 15,
  },
  Title: {
    fontSize: 18,
    color: 'black',
    marginTop: 3,
  },
  ModalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  ModalButton: {
    width: 200,
    height: 50,
  },
  ModalHeader: {
    marginTop: 50,
    width: '100%',
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#ffffff',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5, // Yalnızca alt tarafında gölge olması için yükseklik değerini artırın
    },
    shadowOpacity: 0.1, // Dikkat: shadowOpacity değeri 0 ile 1 arasında olmalıdır
    shadowRadius: 4,
    elevation: 1,
  },
  ModalHeaderText: {
    fontSize: 20,
    color: 'black',
    marginTop: 5,
    marginLeft: 120,
    fontSize: 25,
    fontWeight: '300',
    borderBottomWidth: 10,
    borderBottomColor: 'red',
  },
  ModalHeaderIcon: {
    width: 25,
    height: 25,
    marginTop: 9,
  },
  SortBy: {
    marginTop: 20,
    width: '100%',
    height: 200,
    backgroundColor: 'grey',
  },
  SortByText: {
    color: '#333333B2',
    fontSize: 12,
    marginLeft: 20,
    marginTop: 10,
  },
});
