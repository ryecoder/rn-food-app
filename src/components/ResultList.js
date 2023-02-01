import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultItem from './ResultItem';
import { withNavigation } from 'react-navigation';

const ResultList = ({title, list, navigation}) => {  
    
    let hasResult = (
        <View>
            <Text style={styles.category}>{title}</Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={list}
            keyExtractor={(item) => item.id}
            // in render item you need to destructure item. item is the name exactly
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={()=> navigation.navigate('ResultScreen',{id:item.id})}>
                        <ResultItem item={item}/>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )

    return list.length > 0 ? hasResult : null
}

const styles = StyleSheet.create({
    category:{
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5
    }
});

export default withNavigation(ResultList);