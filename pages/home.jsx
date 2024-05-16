import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useMovies } from '../hooks/use.movies';
import ListMovies from '../components/list.movies';
import SearchInput from '../components/input.search';

export default function HomePage() {
    const { data, error, isLoading } = useMovies();
    const [search, setSearch] = useState('');
    handleSearchInput = (text) => setSearch(text);

    return (
        <View style={{ backgroundColor: 'black', flex: 1}}>
            {isLoading && <Text>Loading...</Text>}
            {error && <Text>Error Happened...</Text>}
            {!isLoading && !error &&
                <View style={{ backgroundColor: 'black'}}>
                    <View style={styles.backgroundImageContainer}>
                        <Image
                            source={{ uri: "https://th.bing.com/th/id/R.c491ca7e121176716a7f74d0c7655db9?rik=rjv4EABN7DupUQ&riu=http%3a%2f%2fgiphygifs.s3.amazonaws.com%2fmedia%2fd9wPasV7ukkta%2fgiphy.gif&ehk=NgYUNKK%2b2IC4VuOJz72PGfDcMGi%2frRs6EQvOFtlwvQo%3d&risl=&pid=ImgRaw&r=0" }}
                            style={styles.image}
                        />
                        <SearchInput search={search} handleSearchInput={handleSearchInput} />
                    </View>

                    <ListMovies movies={data.filter(movie =>
                        movie.title.toLowerCase().includes(search.toLowerCase()))} />
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImageContainer: {
        height: 125,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
});

