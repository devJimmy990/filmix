import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MovieDetailsPage from '../pages/movie_details';
import routes from '../utils/routes';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourite } from '../controllers/redux/slices/favourite';

const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();
    const { navigate } = useNavigation();
    const [isFavorite, setIsFavorite] = useState(false);
    const favourites = useSelector(state => state.favourite.favourites);

    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite);
        dispatch(toggleFavourite(movie));
    };

    useEffect(() => {
        setIsFavorite(favourites.find
            (favourite => favourite.id === movie.id));
    }, [favourites, movie.id]);

    return (
        <Pressable style={styles.card} onPress={() => navigate(routes.DETAILS, { ...movie })}>
            <Image style={styles.image}
                source={{ uri: "https://image.tmdb.org/t/p/w500/" + movie.poster_path }} />
            <TouchableOpacity style={styles.favoriteButton} onPress={handleToggleFavorite}>
                <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={32} color='yellow' />
            </TouchableOpacity>
            <Text style={styles.title} numberOfLines={1}>{movie.original_title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        width: '100%',
        elevation: 5,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'black',
    },
    image: {
        height: 200,
        width: '100%',
        borderRadius: 10,
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
