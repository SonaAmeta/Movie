import React, { useState } from "react";
import { View, TextInput, FlatList, Text } from "react-native";

const SearchFilter = ({ data }) => {
  const [searchText, setSearchText] = useState("");
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={{backgroundColor:'white'}}>
      <View style={{borderWidth:1,padding:10,margin:10,borderRadius:10}}>
        <TextInput
          placeholder="Search"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>

      <FlatList
        data={filteredData}
        renderItem={({ item }) => <View style={{borderWidth:.5 , margin:5 ,padding:10}}>
            <Text>{item}</Text>
            </View>
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SearchFilter;
