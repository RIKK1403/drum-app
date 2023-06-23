import { StyleSheet, Text, View } from "react-native";

const Snare = () => {
  return (
    <View>
      <Text>Snare</Text>
    </View>
  );
};

const Ride = () => {
  return (
    <View>
      <Text>Ride</Text>
    </View>
  );
};

const Close = () => {
  return (
    <View>
      <Text>Close</Text>
    </View>
  );
};

const Tom = () => {
  return (
    <View>
      <Text>Tom</Text>
    </View>
  );
};

const Splash = () => {
  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

const Kick = () => {
  return (
    <View>
      <Text>Kick</Text>
    </View>
  );
};

const Open = () => {
  return (
    <View>
      <Text>Open</Text>
    </View>
  );
};

const Crash = () => {
  return (
    <View>
      <Text>Crash</Text>
    </View>
  );
};

const Stage = () => {
  return (
    <View style={styles.container}>
      <Open />
      <Crash />
      <Kick />
      <Splash />
      <Tom />
      <Close />
      <Ride />
      <Snare />
      <Text>Stage</Text>
    </View>
  );
};

export default Stage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
