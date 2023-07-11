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

  return (
    <View style={styles.container}>
      <View style={styles.crash}>
        <TouchableOpacity>
          <Image source={imageCrash} />
        </TouchableOpacity>
      </View>
      <View style={styles.open}>
        <TouchableOpacity>
          <Image source={imageOpen} />
        </TouchableOpacity>
      </View>
      <View style={styles.kick}>
        <TouchableOpacity>
          <Image source={imageKick} />
        </TouchableOpacity>
      </View>
      <View style={styles.splash}>
        <TouchableOpacity>
          <Image source={imageSplash} />
        </TouchableOpacity>
      </View>
      <View style={styles.tom}>
        <TouchableOpacity>
          <Image source={imageTom} />
        </TouchableOpacity>
      </View>
      <View style={styles.close}>
        <TouchableOpacity>
          <Image source={imageclose} />
        </TouchableOpacity>
      </View>
      <View style={styles.ride}>
        <TouchableOpacity>
          <Image source={imageRide} />
        </TouchableOpacity>
      </View>
      <View style={styles.snare}>
        <TouchableOpacity>
          <Image source={imageSnare} />
        </TouchableOpacity>
      </View>
      <View style={styles.snare2}>
        <TouchableOpacity>
          <Image source={imageSnare2} />
        </TouchableOpacity>
      </View>
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
  snare2: {
    position: "absolute",
    top: 136,
    left: 268,
  },
  kick: {
    position: "absolute",
    top: 72,
    left: 290,
  },
  splash: {
    position: "absolute",
    top: 230,
    left: 160,
  },
  close: {
    position: "absolute",
    top: 165,
    left: 474,
  },
  open: {
    position: "absolute",
    top: 266,
    left: 481,
  },
  tom: {
    position: "absolute",
    top: 243,
    left: 408,
  },
  snare: {
    position: "absolute",
    top: 243,
    left: 270,
  },
});
