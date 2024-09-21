import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ScreenEmail = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}>
        <View style={styles.container_img}>
          <Image style={styles.image} source={require('./assets/screen3_lock.jpg')} />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            top: 70,
          }}>
          <Text style={[styles.baseText, styles.titleText]}>FORGET</Text>
          <Text style={[styles.baseText, styles.titleText]}>PASSWORD</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            margin: '5%',
          }}>
          <Text style={[styles.baseText, styles.textDescription]}>
            Provide your account’s email for which you want to reset your
            password
          </Text>
        </View>
        <View style={styles.container_email}>
          <Image
            style={styles.style_image_email}
            source={require('./assets/screen3_email.jpg')}
          />
          <TextInput
            placeholder="Email"
            style={styles.style_txtInput}></TextInput>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#E3C000' }]}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container_email: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  style_image_email: {
    width: 48,
    height: 45,
  },
  container_img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: 105, height: 117, top: 76 },
  button: {
    // padding: 15,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: 305,
    borderRadius: 5,
  },
  buttonText: {
    color: 'dark',
    fontSize: 18,
    fontWeight: '700',
  },
  baseText: {
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: '700',
  },
  textDescription: {
    fontWeight: '600',
    fontSize: 15,
  },
  style_txtInput: {
    backgroundColor: '#C4C4C4',
    width: 257,
    height: 45,
  },
});

export default ScreenEmail;