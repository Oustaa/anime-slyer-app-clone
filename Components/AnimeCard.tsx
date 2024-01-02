import React, { FC } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { AnimeEpisodIterface } from "../data/dammy-anime-date";
import AnimeImage from "./UI/AnimeImage";
import { SIZES } from "../utils/sizes";

const AnimeCard: FC<AnimeEpisodIterface> = ({
  episode,
  imageURL,
  rating,
  state,
  title,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.CardImageContainer}>
        <AnimeImage uri={imageURL} />
        <Text style={styles.CardImageText}>
          {truncate("Episode: " + episode, 16)}
        </Text>
      </View>
      <View>
        <Text style={[styles.cardText, styles.animeTitle]}>
          {truncate(title, 18)}
        </Text>
        <View style={styles.cardFooter}>
          <View style={styles.ratingContainer}>
            <Text style={styles.cardText}>{rating}</Text>
            <AntDesign name="star" size={SIZES.sm} color="#e8840a" />
          </View>
          <Text style={styles.cardText}>{state}</Text>
        </View>
      </View>
    </View>
  );
};

export default AnimeCard;

const styles = StyleSheet.create({
  cardContainer: {
    overflow: "hidden",
    flex: 1,
    marginBottom: SIZES.xs,
  },
  CardImageContainer: {
    position: "relative",
    overflow: "hidden",
  },
  CardImageText: {
    position: "absolute",
    bottom: 3,
    fontWeight: "400",
    color: "#fff",
    marginHorizontal: 4,
    textShadowColor: "red",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  cardText: {
    fontSize: SIZES.sm,
    color: "#fff",
  },
  cardFooter: {
    flexDirection: "row",
    gap: SIZES.xs,
    // justifyContent: "space-between",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  animeTitle: {
    marginVertical: SIZES.xs,
  },
});

const truncate = (str: string, max: number) => {
  return str.length > max ? str.substring(0, max) + "..." : str;
};
