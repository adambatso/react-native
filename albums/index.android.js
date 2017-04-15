import React from 'react';
import { AppRegistry,View } from 'react-native';
import Header from './src/component/Header.js'
import AlbumsList from './src/component/AlbumList.js'

const App = () => (
  <View style={{flex:1}}>
  <Header headerText={'Albums'} />
  <AlbumsList />
  </View>
);
AppRegistry.registerComponent('albums', () => App);

