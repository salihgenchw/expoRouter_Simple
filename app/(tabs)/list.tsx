import { Link } from "expo-router";
import { View } from "react-native";

const ListPage = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    }}>
      <Link href="/list/1">Item 1</Link>
      <Link href="/list/2">Item 2</Link>
      <Link href="/list/3">Item 3</Link>
    </View>
  );
};

export default ListPage;
