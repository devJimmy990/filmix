import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MovieCard from '../card/card.movie';



export default function ListMovies({ movies }) {
    return (
        <FlatList
            data={movies}
            numColumns={2}
            keyExtractor={(movie) => movie.id.toString()}
            renderItem={({ item }) => <View style={styles.card} ><MovieCard movie={item} /></View>}
        />
    );
}

const styles = StyleSheet.create({
    card: {
        width: '45%',
        marginHorizontal: 'auto',
        marginBottom: 10,
    },
});



