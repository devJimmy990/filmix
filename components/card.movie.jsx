import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MovieDetailsPage from '../pages/movie_details';
import routes from '../utils/routes';

const MovieCard = ({ movie }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { navigate } = useNavigation();

    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <Pressable style={styles.card} onPress={() => navigate(routes.DETAILS, { ...movie })}>
            <Image source={{ uri: "https://image.tmdb.org/t/p/w500/" + movie.poster_path }} style={styles.image} />
            <TouchableOpacity style={styles.favoriteButton} onPress={handleToggleFavorite}>
                <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={32} color='red' />
            </TouchableOpacity>
            <Text style={styles.title} numberOfLines={1}>{movie.original_title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        width: '45%',
        elevation: 5,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'black',
    },
    image: {
        height: 200,
        width: '100%',
    },
    favoriteButton: {
        top: 0,
        right: 0,
        zIndex: 1,
        padding: 0,
        position: 'absolute',
    },
    title: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',

    },
});

export default MovieCard;
