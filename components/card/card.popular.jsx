import React from 'react';
import { Image, StyleSheet, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import routes from '../../utils/routes';
import sources from '../../utils/sources';

export default function PopularMovieCard({ movie }) {
    const { navigate } = useNavigation();

    return (
        <Pressable style={styles.card} onPress={() => navigate(routes.DETAILS, { ...movie })}>
            <Image style={styles.backgroundImage}
                source={{ uri: sources.POSTER + movie.poster_path }} />
            <View style={styles.overlay}>
                <Ionicons name="play-circle-outline" size={64} color="white" />
            </View>
            <Image style={styles.posterImage}
                source={{ uri: sources.POSTER + movie.poster_path }} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'black',
        position: 'relative',
        alignItems: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: 200,
    },
    overlay: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -32 }, { translateY: -32 }],
        zIndex: 1,
    },
    posterImage: {
        position: 'absolute',
        width: '40%',
        height: 150,
        top: '50%',
        left: '50%',
        transform: [{ translateX: -75 }, { translateY: -75 }],
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
    },
});
