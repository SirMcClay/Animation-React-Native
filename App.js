import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

const App: React.FC = () => {
  const ballY = useRef(new Animated.Value(0)).current;

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
    Animated.decay(ballY, {
      velocity: 1,
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
