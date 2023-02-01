import { React, useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  // states
  const [ term, setTerm ] = useState("");

  // hooks
  const [ result, searchApi ] = useResult();

  // helper functions
  const getGroupedResult = (list, rating) => {
    // rating === '$' || '$$' || '$$$' || '$$$$'
    let grouped = list.filter(item => {
      return item.price == rating;
    })
    return grouped;
  }

  return (
    <View style={{flex:1}}>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onTermSubmit={()=>{searchApi(term)}}
      />
      {/* <Text>Results Found {result.length}</Text> */}
      <ScrollView>
        <ResultList title="Budget Friendly" list={getGroupedResult(result, '₱')}/>
        <ResultList title="Cost Effective" list={getGroupedResult(result, '₱₱')}/>
        <ResultList title="Bit Pricier" list={getGroupedResult(result, '₱₱₱')}/>
        <ResultList title="Big Spender" list={getGroupedResult(result, '₱₱₱₱')}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
