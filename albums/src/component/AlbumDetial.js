import React from 'react';
import { Image,Text, View ,Linking} from 'react-native';
import Card from './Card.js'
import CardSection from './CardSection.js'
import Button from './Button.js'

const AlbumsDetial = (props) => {

    const { title,thumbnail_image,artist,image ,url} = props.albumCheck,
          { thmbnailImage,headerContainer,albumImage,headerFontSize} = styles;
    return (
        <Card>
            <CardSection>
            <View>
            <Image style={thmbnailImage} 
            source={{uri:thumbnail_image}} />
            </View>
            
            <View style={headerContainer}>
            <Text style={headerFontSize}>{artist}</Text>
            <Text>{title}</Text>
            </View>
            </CardSection>
            <CardSection>
            <Image style={albumImage}
                   source={{uri:image}}
            />
            </CardSection>
            <CardSection>
            <Button  onPressFunction={()=>Linking.openURL(url)}>
            Click to by this album
            </Button>
            </CardSection>
            
        </Card>
    );
};


const styles ={
    headerContainer:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerFontSize:{
        fontSize:18
    },
    thmbnailImage:{
        width:50,
        height:50,
        marginRight:10,
        marginLeft:10
    },
    albumImage:{
        height:300,
        flex:1, 
        width:null,
        margin:10
    }

}
export default AlbumsDetial;