import React from "react";

import { Text, View, Image } from "react-native";

export default () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
      }}
    >
      {/* Not loading */}
      <Image
        source={require("../assets/favicon.png")}
        style={{ width: 900, height: 900 }}
        resizeMode="contain"
      />
    </View>
  );
};
