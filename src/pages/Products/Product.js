import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
  Image,
} from 'react-native';
import Close from '../../assets/close.png';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Styles from './Product.style';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.API_URL);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [checked, setChecked] = React.useState('first');

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleProductSelect = id => {
    navigation.navigate('DetailsScreen', {id});
  };

  const handleSearch = name => {
    setSearchTerm(name);
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(name.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  function renderModal() {
    return (
      <Modal animationType="slide" transparent={true} visible={openModal}>
        <View style={Styles.ModalContainer}>
          <View style={Styles.ModalHeader}>
            <TouchableOpacity title="Close" onPress={() => setOpenModal(false)}>
              <Image style={Styles.ModalHeaderIcon} source={Close} />
            </TouchableOpacity>
            <Text style={Styles.ModalHeaderText}>Filter</Text>
          </View>
          <View style={Styles.SortBy}>
            <View>
              <Text style={Styles.SortByText}>Sort By</Text>
            </View>
            <View />
            <View />
            <View />
            <View />
          </View>
          <View>
            <View />
            <View />
            <View />
            <View />
            <View />
          </View>
          <View />
          <View />
        </View>
      </Modal>
    );
  }

  return (
    <View style={Styles.Container}>
      <FlatList
        style={Styles.List}
        data={filteredData} // filteredData'ya göre veri göster
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        ListHeaderComponent={
          <View>
            <TextInput
              style={Styles.Search}
              placeholder="Search"
              placeholderTextColor={'#5f6d92'}
              onChangeText={handleSearch} // onChangeText olayında handleSearch işlevini çağır
            />
            <View style={Styles.Header}>
              <Text style={Styles.Title}>Filters:</Text>
              <TouchableOpacity
                onPress={() => setOpenModal(true)}
                style={Styles.filterButton}>
                <Text>Select Filter</Text>
              </TouchableOpacity>
              {renderModal()}
            </View>
          </View>
        }
      />
    </View>
  );
};

export default Products;
