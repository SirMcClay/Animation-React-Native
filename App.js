import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet, PanResponder} from 'react-native';

const App: React.FC = () => {
  const ball = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderGrant: () => {
        ball.setOffset({
          x: ball.x._value,
          y: ball.y._value,
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: ball.x,
            dy: ball.y,
          },
        ],
        {
          useNativeDriver: false,
          listener: (e, gestureState) => {
            console.log(gestureState);
          },
        },
      ),
      onPanResponderRelease: () => {
        ball.flattenOffset();
      },
    }),
  ).current;

  // useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.ball,
          {
            transform: [{translateX: ball.x}, {translateY: ball.y}],
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
