import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

const App: React.FC = () => {
  const ballY = useRef(new Animated.Value(0)).current;
  const ballX = useRef(new Animated.Value(0)).current;
  // const ballX = useRef(new Animated.divide(ballY, 2)).current;
  // const ballX = useRef(new Animated.add(ballY, 2)).current;
  // const ballX = useRef(new Animated.multiply(ballY, 2)).current;

  useEffect(() => {
    // ANIMACAO SIMPLES SECA
    // Animated.timing(ballY, {
    //   toValue: 500,
    //   duration: 1000,
    //   useNativeDriver: false,
    // }).start();

    // ANIMACAO COM ELASTICO BOUNCING
    // Animated.spring(ballY, {
    //   toValue: 500,
    //   bounciness: 20,
    //   useNativeDriver: false,
    // }).start();

    // ANIMACAO ORGANICA COM VELOCIDADE DEFINIDA ATE PARAR
    // Animated.decay(ballY, {
    //   velocity: 0.3,
    //   useNativeDriver: false,
    // }).start();

    // Animated.parallel([
    // Animated.stagger(100, [
    // Animated.loop(
    //   Animated.sequence([
    //     Animated.timing(ballY, {
    //       toValue: 200,
    //       duration: 500,
    //       useNativeDriver: false,
    //     }),

    //     Animated.delay(200),

    //     Animated.timing(ballX, {
    //       toValue: 200,
    //       duration: 500,
    //       useNativeDriver: false,
    //     }),

    //     Animated.delay(200),

    //     Animated.timing(ballY, {
    //       toValue: 0,
    //       duration: 500,
    //       useNativeDriver: false,
    //     }),

    //     Animated.delay(200),

    //     Animated.timing(ballX, {
    //       toValue: 0,
    //       duration: 500,
    //       useNativeDriver: false,
    //     }),

    //     Animated.delay(200),
    //   ]),
    //   {
    //     iterations: 2,
    //   },
    // ).start();

    Animated.timing(ballY, {
      toValue: 500,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [ballY]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.ball,
          {
            top: ballY,
            // left: ballX,
            opacity: ballY.interpolate({
              // inputRange: [0, 280, 300],
              // outputRange: [1, 1, 0],
              inputRange: [0, 300],
              outputRange: [1, 0.2],
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F00',
  },
});

export default App;
