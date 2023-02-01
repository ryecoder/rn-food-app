import { React, useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView, FlatList, Image } from "react-native";
import yelp from '../api/yelp';

const ResultScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState();

    const searchApi = async (id) => {
        console.log("GETTING ITEM DATA" + id);

        try{
            const response = await yelp.get(`${id}`);
            setResult(response.data)

            console.log("GET DONE");
            console.log(response.data);
        } catch(e){
            console.log(e)
        }

    }

    useEffect(()=>{
        searchApi(id)
    },[])

    if(!result){
        return null
    }

    return (
        <>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor = {(photo)=>photo}
                renderItem={(item)=> {
                    return <Image source={{uri: item.item}} style={styles.image}/>
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 300,
        margin: 5,
        alignSelf: 'center'
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 15
    }
});

export default ResultScreen;