import React from "react";

import { Text, View, Image } from "react-native";

export default () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Not loading */}
      <Image
        source={require("../assets/small.png")}
        width={100}
        height={100}
        resizeMode="contain"
      />
    </View>
  );
};
