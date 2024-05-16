import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MovieCard from './card.movie';



const ListMovies = ({ movies }) => {
    return (
        <FlatList
            data={movies}
            keyExtractor={(movie) => movie.id.toString()} // Ensure the key is a string
            renderItem={({ item }) => <MovieCard movie={item} />}
            numColumns={2} // Display items in 2 columns (change as needed)
            contentContainerStyle={styles.container} // Add container style
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 5, 
        backgroundColor: 'black',
    },
});



export default ListMovies;
