import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import imageRide from "./images/5ride.png";
import imageCrash from "./images/1crash.png";
import imageSnare2 from "./images/7snare2.png";
import imageKick from "./images/9kick.png";
import imageSplash from "./images/2splash.png";
import imageclose from "./images/closeh.png";
import imageOpen from "./images/openh.png";
import imageTom from "./images/8tom.png";
import imageSnare from "./images/4snare.png";

const Stage = () => {
  const playsound = async (element) => {
    switch (element) {
      case "snare":
        const { sound } = await Audio.Sound.createAsync(
          require("./assets/sound/snare.mp3")
        );

        await sound.playAsync();
        break;
      case "ride":
        //code block
        break;
      case "close":
        //code block
        break;
      case "tom":
        //code block
        break;
      case "splash":
        //code block
        break;
      case "kick":
        //code block
        break;
      case "open":
        //code block
        break;
      case "crash":
        const { suara } = await Audio.Sound.createAsync(
          require("./assets/sound/snare.mp3")
        );

        await sound.playAsync();
        break;
    }
  };

  const Snare2 = () => {
    return (
      <TouchableOpacity onPress={() => playsound("snare")}>
        <View style={styles.Snare2}>
          <Image source={imageSnare2} />
        </View>
      </TouchableOpacity>
    );
  };

  const Snare = () => {
    return (
      <TouchableOpacity>
        <View style={styles.Snare}>
          <Image source={imageSnare} />
        </View>
      </TouchableOpacity>
    );
  };

  const Ride = () => {
    return (
      <TouchableOpacity>
        <View style={styles.ride}>
          <Image source={imageRide} />
        </View>
      </TouchableOpacity>
    );
  };

  const Close = () => {
    return (
      <TouchableOpacity>
        <View style={styles.close}>
          <Image source={imageclose} />
        </View>
      </TouchableOpacity>
    );
  };

  const Tom = () => {
    return (
      <TouchableOpacity>
        <View style={styles.Tom}>
          <Image source={imageTom} />
        </View>
      </TouchableOpacity>
    );
  };

  const Splash = () => {
    return (
      <TouchableOpacity>
        <View style={styles.Splash}>
          <Image source={imageSplash} />
        </View>
      </TouchableOpacity>
    );
  };

  const Kick = () => {
    return (
      <TouchableOpacity>
        <View style={styles.Kick}>
          <Image source={imageKick} />
        </View>
      </TouchableOpacity>
    );
  };

  const Open = () => {
    return (
      <TouchableOpacity>
        <View style={styles.Open}>
          <Image source={imageOpen} />
        </View>
      </TouchableOpacity>
    );
  };

  const Crash = () => {
    return (
      <TouchableOpacity>
        <View style={styles.crash}>
          <Image source={imageCrash} />
        </View>
      </TouchableOpacity>
    );
  };

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
