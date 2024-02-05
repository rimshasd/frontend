import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { RNCamera } from "react-native-camera";

const ViewCamera = () => {
  const cameraRef = useRef(null);

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default ViewCamera;
