import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, setTerm, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.input}
        value={term}
        onChangeText={setTerm}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#dbdbdb",
    height: 50,
    flexDirection: "row",
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    fontSize: 30,
    alignSelf: "center",
    marginRight: 10,
  },
  input: {
    // borderColor: "black",
    // borderWidth: 1,
    flex: 1,
  },
});

export default SearchBar;
