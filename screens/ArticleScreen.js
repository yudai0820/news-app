import React from 'react';
import WebView from 'react-native-webview';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../components/Loading';
import StarButton from '../components/StarButton';
import { addStar, deleteStar } from '../store/actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ArticleScreen = ({ route }) => {
  const { article } = route.params;

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { stars } = user;

  const isStarped = () => {
    return stars.some((star) => star.url === article.url);
  };

  const toggleStar = () => {
    if (isStarped()) {
      dispatch(deleteStar({ star: article }));
    } else {
      dispatch(addStar({ star: article }));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: article.url }}
        startInLoadingState={true}
        renderLoading={() => <Loading />}
      />
      <StarButton onPress={toggleStar} enabled={isStarped()} />
    </SafeAreaView>
  );
};
