import React from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import HomeStyles from './Home.style';

// Components
import Loading from '../../components/Loading';

// State
import { loadingState, stopLoadingAsync } from '../../components/Loading/LoadingSlice';

const Home: React.FunctionComponent = () => {
  const loading = useSelector(loadingState);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // This going to dispatch stopLoadingAsync reducer that delays proccess 1000ms
    dispatch(stopLoadingAsync());
  }, []);

  return (
    <View style={HomeStyles.container}>{loading ? <Loading /> : <Text>Home Screen</Text>}</View>
  );
};

export default Home;
