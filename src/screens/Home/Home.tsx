import React from 'react';
import { Text, View } from 'react-native';

// Styles
import HomeStyles from './Home.style';

const Home: React.FunctionComponent = () => {
  return (
    <View style={HomeStyles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
