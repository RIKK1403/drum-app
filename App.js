import { StyleSheet, Text, View, Image } from "react-native";
import imageRide from "./images/5ride.png";
import imageCrash from "./images/1crash.png";
import imageSnare2 from "./images/7snare2.png";
import imageKick from "./images/9kick.png";
import imageSplash from "./images/2splash.png";
import imageclose from "./images/closeh.png";
import imageOpen from "./images/openh.png";
import imageTom from "./images/8tom.png";
import imageSnare from "./images/4snare.png";

const Snare2 = () => {
  return (
    <View style={styles.Snare2}>
      <Image source={imageSnare2} />
    </View>
  );
};

const Snare = () => {
  return (
    <View style={styles.Snare}>
      <Image source={imageSnare} />
    </View>
  );
};

const Ride = () => {
  return (
    <View style={styles.ride}>
      <Image source={imageRide} />
    </View>
  );
};

const Close = () => {
  return (
    <View style={styles.close}>
      <Image source={imageclose} />
    </View>
  );
};

const Tom = () => {
  return (
    <View style={styles.Tom}>
      <Image source={imageTom} />
    </View>
  );
};

const Splash = () => {
  return (
    <View style={styles.Splash}>
      <Image source={imageSplash} />
    </View>
  );
};

const Kick = () => {
  return (
    <View style={styles.Kick}>
      <Image source={imageKick} />
    </View>
  );
};

const Open = () => {
  return (
    <View style={styles.Open}>
      <Image source={imageOpen} />
    </View>
  );
};

const Crash = () => {
  return (
    <View style={styles.crash}>
      <Image source={imageCrash} />
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
      <Snare2 />
      <Text>Stage</Text>
    </View>
  );
};

export default Stage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    position: "relative",
  },
  ride: {
    position: "absolute",
    top: 65,
    left: 380,
  },
  crash: {
    position: "absolute",
    top: 50,
    left: 150,
  },
  Snare2: {
    position: "absolute",
    top: 136,
    left: 268,
  },
  Kick: {
    position: "absolute",
    top: 72,
    left: 290,
  },
  Splash: {
    position: "absolute",
    top: 230,
    left: 160,
  },
  close: {
    position: "absolute",
    top: 165,
    left: 474,
  },
  Open: {
    position: "absolute",
    top: 266,
    left: 481,
  },
  Tom: {
    position: "absolute",
    top: 243,
    left: 408,
  },
  Snare: {
    position: "absolute",
    top: 243,
    left: 270,
  },
});
