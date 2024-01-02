import { StyleSheet, FlatList, View } from "react-native";

import { ANIMESDATA } from "../data/dammy-anime-date";

import AnimeCard from "../Components/AnimeCard";
import { SIZES } from "../utils/sizes";

const LatestUplodesScreen = () => {
  return (
    <View style={styles.latestUploadsContainer}>
      <FlatList
        data={ANIMESDATA}
        renderItem={({ item }) => <AnimeCard {...item} />}
        numColumns={3}
        columnWrapperStyle={{
          gap: SIZES.xs,
        }}
      />
    </View>
  );
};

export default LatestUplodesScreen;

const styles = StyleSheet.create({
  latestUploadsContainer: {
    marginHorizontal: SIZES.xs,
    paddingTop: SIZES.xs,
  },
});
