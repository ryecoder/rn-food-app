import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const ResultItem = ({item}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.image_url ? item.image_url : "https://freesvg.org/img/warningSmall.png"}}/>
            <Text>{item.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginRight: 7
    },
    image: {
        width: 300,
        height: 150,
        borderRadius: 4
    }
});

export default ResultItem;