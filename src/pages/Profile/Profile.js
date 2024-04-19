import {View, Text, Image} from 'react-native';
import React from 'react';
import metilla from '../../assets/metilla.jpeg';
import Styles from './Profile.style';
import {Header} from 'react-native/Libraries/NewAppScreen';

const Profile = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.Header} />
      <Text style={Styles.HeaderText}>Profile</Text>
      <View style={Styles.ImageView}>
        <Image style={Styles.Image} source={metilla} />
      </View>

      <Text style={Styles.Name}>Metin Köroğlu</Text>
    </View>
  );
};

export default Profile;
