import React from 'react';
import { View, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const YouTubeVideo = ({ url }) => {

  return (
    <View style={styles.container}>
      <YoutubePlayer
        play={true}
        height={'100%'}
        // height={250}
        videoId={url}
        width={'100%'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default YouTubeVideo;
