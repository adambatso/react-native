import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumsDetial from './AlbumDetial.js'

class AlbumList extends Component {
    state = {albums:[]};
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response=>this.setState({albums:response.data}));    
    }

    renderAlbums(){
        return this.state.albums.map(album => 
        <AlbumsDetial key={album.title} albumCheck={album} /> );
    }
    render(){
        return (
            <ScrollView >
                {this.renderAlbums()}
            </ScrollView>
        );
    }

}

const styles = {

}

export default AlbumList;
