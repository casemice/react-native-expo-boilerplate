import React from 'react';
import { Text, View } from 'react-native';
import FeedStyles from './Feed.style';

const Feed: React.FunctionComponent = () => {
  return (
    <View style={FeedStyles.container}>
      <Text>Feed Screen</Text>
    </View>
  );
};

export default Feed;
