import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
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
  const [snare, setSnare] = useState();
  async function playSnare() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/sound/snare.mp3")
    );
    setSnare(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return snare
      ? () => {
          snare.unloadAsync();
        }
      : undefined;
  }, [snare]);

  const [ride, setRide] = useState();
  async function playRide() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/sound/ride.mp3")
    );
    setRide(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return ride
      ? () => {
          ride.unloadAsync();
        }
      : undefined;
  }, [ride]);

  const [close, setCLose] = useState();
  async function playClose() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/sound/close.mp3")
    );
    setCLose(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return close
      ? () => {
          close.unloadAsync();
        }
      : undefined;
  }, [close]);

  const [crash, setCrash] = useState();
  async function playCrash() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/sound/crash.mp3")
    );
    setCrash(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return crash
      ? () => {
          crash.unloadAsync();
        }
      : undefined;
  }, [crash]);

  const [open, setOpen] = useState();
  async function playOpen() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/sound/open.mp3")
    );
    setOpen(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return open
      ? () => {
          open.unloadAsync();
        }
      : undefined;
  }, [open]);

  const [kick, setKick] = useState();
  async function playKick() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/sound/kick.mp3")
    );
    setKick(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return kick
      ? () => {
          kick.unloadAsync();
        }
      : undefined;
  }, [kick]);

  const [tom, setTom] = useState();
  async function playTom() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/sound/tom.mp3")
    );
    setTom(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return tom
      ? () => {
          tom.unloadAsync();
        }
      : undefined;
  }, [tom]);

  const [splash, setSplash] = useState();
  async function playSplash() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/sound/splash.mp3")
    );
    setSplash(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return splash
      ? () => {
          splash.unloadAsync();
        }
      : undefined;
  }, [splash]);

  useEffect(() => {
    async function setOrientasi() {
      await ScreenOrientation.OrientationLock.LANDSCAPE_LEFT;
    }
    setOrientasi();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.crash}>
        <TouchableOpacity onPress={playCrash}>
          <Image source={imageCrash} />
        </TouchableOpacity>
      </View>
      <View style={styles.open}>
        <TouchableOpacity onPress={playOpen}>
          <Image source={imageOpen} />
        </TouchableOpacity>
      </View>
      <View style={styles.kick}>
        <TouchableOpacity onPress={playKick}>
          <Image source={imageKick} />
        </TouchableOpacity>
      </View>
      <View style={styles.splash}>
        <TouchableOpacity onPress={playSplash}>
          <Image source={imageSplash} />
        </TouchableOpacity>
      </View>
      <View style={styles.tom}>
        <TouchableOpacity onPress={playTom}>
          <Image source={imageTom} />
        </TouchableOpacity>
      </View>
      <View style={styles.close}>
        <TouchableOpacity onPress={playClose}>
          <Image source={imageclose} />
        </TouchableOpacity>
      </View>
      <View style={styles.ride}>
        <TouchableOpacity onPress={playRide}>
          <Image source={imageRide} />
        </TouchableOpacity>
      </View>
      <View style={styles.snare}>
        <TouchableOpacity onPress={playSnare}>
          <Image source={imageSnare} />
        </TouchableOpacity>
      </View>
      <View style={styles.snare2}>
        <TouchableOpacity onPress={playSnare}>
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
