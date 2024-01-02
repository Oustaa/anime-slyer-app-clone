import { Image, StyleSheet, View } from "react-native";
import React, { FC } from "react";
import { SIZES } from "../../utils/sizes";

interface AnimeImageProps {
  uri: string;
}

const AnimeImage: FC<AnimeImageProps> = ({ uri }) => {
  return (
    <View style={styles.ImageContainer}>
      <Image style={styles.imageStyles} source={{ uri }} resizeMode="cover" />
    </View>
  );
};

export default AnimeImage;

const styles = StyleSheet.create({
  ImageContainer: {
    overflow: "hidden",
    borderRadius: 4,
    width: "100%",
  },
  imageStyles: {
    aspectRatio: "1/1.6",
  },
});
