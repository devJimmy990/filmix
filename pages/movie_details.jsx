import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

export default function MovieDetails() {
    const {
        original_title,
        title,
        poster_path,
        backdrop_path,
        overview,
        release_date,
        vote_average,
        vote_count,
        original_language
    } = useRoute().params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.backdropContainer}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w780${backdrop_path}` }} style={styles.backdrop} />
                <View style={styles.overlay} />
            </View>
            <Card style={styles.card}>
                <Card.Title title={original_title || title || ""} subtitle={`Released on: ${release_date}`} titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle} />
                <Card.Content>
                    <Paragraph style={styles.overview}>{overview}</Paragraph>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>Rating: {vote_average} ({vote_count} votes)</Text>
                        <Text style={styles.detailItem}>Language: {original_language}</Text>
                    </View>
                </Card.Content>
                <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} style={styles.poster} />
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    backdropContainer: {
        width: '100%',
        height: 250,
        position: 'relative',
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
        margin: 10,
        backgroundColor: '#121212',
        borderRadius: 10,
        elevation: 10,
    },
    cardTitle: {
        fontSize: 22,
        color: '#fff',
        fontFamily: 'sans-serif-condensed',
    },
    cardSubtitle: {
        fontSize: 16,
        color: '#ddd',
        fontFamily: 'sans-serif-light',
    },
    overview: {
        color: '#ccc',
        fontFamily: 'sans-serif',
    },
    poster: {
        height: 500,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
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
