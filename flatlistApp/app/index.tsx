import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";

import { useState } from "react";
import ListItemSeparator from "@/components/ListItemSeparator";
import ListItem from "@/components/ListItem";

import { dataType, DATA } from "@/data/appData";

export default function Index() {
  const [selectedId, setSelectedId] = useState<string>("");

  /* 
  declaring a function called selectedList that receives
  a parameter of type dataType that we will refer to as "item"
  we can access the values of item using dot notation 
  */
  const handleRowPress = (item: dataType) => {
    setSelectedId(item.id);
    console.log("selected" + item.title);
  };

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>title?</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA}
            keyExtractor={(item: dataType) => item.id}
            ItemSeparatorComponent={() => (
              <ListItemSeparator color="lightblue" />
            )}
            renderItem={({ item }) => (
              <ListItem
                item={item}
                isSelected={item.id === selectedId}
                onPress={handleRowPress}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: colors.secondary,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
