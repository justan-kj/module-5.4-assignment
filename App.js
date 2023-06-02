import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Picker } from "@react-native-picker/picker";

const searchEngines = [
  { label: "Google", value: "https://www.google.com" },
  { label: "Bing", value: "https://www.bing.com" },
  { label: "DuckDuckGo", value: "https://duckduckgo.com" },
  { label: "Yahoo", value: "https://yahoo.com" },
];

export default function App() {
  const [selectedSite, setSelectedSite] = useState(searchEngines[0].value);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(selectedSite);
  };
  return (
    <View style={styles.container}>
      <Text>Pick a search engine:</Text>
      <Picker
        selectedValue={selectedSite}
        onValueChange={(itemValue) => setSelectedSite(itemValue)}
        style={styles.picker}
      >
        {searchEngines.map((website) => (
          <Picker.Item
            key={website.value}
            label={website.label}
            value={website.value}
          />
        ))}
      </Picker>
      <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  picker: {
    width: "50%",
    marginBottom: 16,
  },
});
