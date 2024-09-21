import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#00CCF9' }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center', top: 67}}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}></View>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', top: 70 }}>
        <Text style={[styles.baseText, styles.titleText]}>GROW </Text>
        <Text style={[styles.baseText, styles.titleText]}>YOUR BUSINESS</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: '5%',
        }}>
        <Text style={[styles.baseText, styles.textDescription]}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#E3C000' }]}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
     
        <TouchableOpacity style={[styles.button, { backgroundColor: '#E3C000' }]}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 119, // Fixed width without quotes
    borderRadius: 5,
  },
  buttonText: {
    color: 'dark', // White text for better visibility
    fontSize: 18,
    fontWeight: '700',
  },
  baseText: {
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 25, // Removed px, since React Native handles it in device pixels
    fontWeight: '700',
  },
  textDescription: {
    fontWeight: '600',
    fontSize: 15,
  },
  outerCircle: {
    width: 140,
    height: 140,
    backgroundColor: '#00c8ff',
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 120,
    height: 120,
    backgroundColor: '#00c8ff',
    borderRadius: 60,
    borderWidth: 10,
    borderColor: 'black',
  },
});

export default LoginScreen;