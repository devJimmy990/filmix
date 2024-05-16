import React from 'react';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import MovieCard from '../components/card.movie';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function FavouritePage() {
    const movies = useSelector(state => state.favourite.favourites);

    return (
        <View style={styles.container}>
            {movies.length === 0 && <Text style={styles.noMoviesText}>No movies in favourites</Text>}
            {movies.length > 0 && (
                <View style={{ flex: 1 }}>
                    <View style={styles.backgroundImageContainer}>
                        <Image
                            source={{ uri: "https://th.bing.com/th/id/R.c491ca7e121176716a7f74d0c7655db9?rik=rjv4EABN7DupUQ&riu=http%3a%2f%2fgiphygifs.s3.amazonaws.com%2fmedia%2fd9wPasV7ukkta%2fgiphy.gif&ehk=NgYUNKK%2b2IC4VuOJz72PGfDcMGi%2frRs6EQvOFtlwvQo%3d&risl=&pid=ImgRaw&r=0" }}
                            style={styles.image}
                        />
                    </View>
                    <ScrollView contentContainerStyle={styles.scrollViewContent} >
                        <View style={styles.rowContainer}>
                            {movies.map(movie => (
                                <View style={styles.cardContainer} key={movie.id}>
                                    <MovieCard movie={movie} />
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    noMoviesText: {
        marginTop: 20,
        color: 'white',
        textAlign: 'center',
    },
    backgroundImageContainer: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    cardContainer: {
        width: '45%', // Adjust the width as needed to fit two cards in a row
        marginBottom: 10,
    },
});
