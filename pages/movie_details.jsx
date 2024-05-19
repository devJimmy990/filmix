import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import sources from '../utils/sources';
import RelatedMovies from '../components/list/related';
import useRelated from '../hooks/use.related';
import YouTubeVideo from '../components/form/video.movie';
import useVideo from '../hooks/use.movie';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourite } from '../controllers/redux/slices/favourite';

export default function MovieDetails() {
    const {
        id,
        title,
        overview,
        vote_count,
        poster_path,
        vote_average,
        release_date,
        backdrop_path,
        original_title,
        original_language
    } = useRoute().params;
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);
    const favourites = useSelector(state => state.favourite.favourites);

    const { data, error, isLoading } = useVideo(id);
    // console.warn(backdrop_path);
    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite);
        dispatch(toggleFavourite({ id, title, overview, vote_count, poster_path, vote_average, release_date, backdrop_path, original_title, original_language }));
    };


    useEffect(() => {
        setIsFavorite(favourites.find
            (favourite => favourite.id === id));
    }, [favourites, id]);

    return (
        <ScrollView style={styles.container}>

            <Image source={{ uri: `${sources.POSTER}${poster_path}` }} style={styles.poster} />
            <View style={styles.card}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ flex: 11 }}>
                        <Text style={styles.cardTitle}>{original_title || title || "No Title"}</Text>
                    </View>
                    <TouchableOpacity style={styles.favoriteButton} onPress={handleToggleFavorite}>
                        <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={32} color='yellow' />
                    </TouchableOpacity>
                </View>

                <Text style={styles.cardSubtitle}>{`Released on: ${release_date}`}</Text>

                <View>
                    <Paragraph style={styles.overview}>{overview}</Paragraph>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>Rating: {vote_average.toFixed(1)} ({vote_count} votes)</Text>

                        <Text style={styles.detailItem}>Language: {original_language}</Text>
                    </View>
                </View>
            </View>

            {!isLoading && !error && data.trailer && <YouTubeVideo url={data.trailer} />}
            {!isLoading && !error && !data.trailer && <View style={styles.backdropContainer}>
                <Image source={{ uri: `${sources.BACK_DROP}${backdrop_path}` }} style={styles.backdrop} />
                <View style={styles.overlay} />
            </View>}
            <RelatedMovies id={id} />
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        // paddingHorizontal: 20,
        // backgroundColor: '#000',
    },
    backdropContainer: {
        width: '100%',
        height: 270,
        // position: 'relative',
    },
    backdrop: {
        width: '100%',
        height: '100%',
        opacity: 0.5,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    card: {
        // margin: 10,
        backgroundColor: 'rgba(18, 18, 18, 0.4)',
        // backgroundColor: 'white',
        paddingVertical: 10,
        opacity: 0.9,
        marginBottom: 10,
        elevation: 10,
    },
    cardTitle: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 5,
        marginLeft: 10,
        fontFamily: 'sans-serif-condensed',
    },
    cardSubtitle: {
        fontSize: 15,
        color: 'gray',
        marginLeft: 10,
        marginBottom: 5,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'sans-serif-light',
    },
    overview: {
        color: 'white',
        textAlign: 'justify',
        marginHorizontal: 10,

        fontFamily: 'sans-serif',
    },
    poster: {
        height: 300,
        width: '100%',
        resizeMode: 'cover',
    },
    details: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    detailItem: {
        color: '#fff',
        fontFamily: 'Avenir-Roman',
        fontFamily: 'sans-serif',
    }
});
