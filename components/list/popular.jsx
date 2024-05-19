import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import useMovies from '../../hooks/use.movies';
import MovieCard from '../card/card.movie';
import PopularMovieCard from '../card/card.popular';

export default function PopularList() {
    const { data, error, isLoading } = useMovies("popular");
    return (
        <View style={{ height: 200, justifyContent: 'center', }}>
            {isLoading && <ActivityIndicator size="large" color="blue" />}
            {error && <Text>Error: {error.message}</Text>}
            {data && (
                <Swiper
                    loop={true}
                    autoplay={true}
                    horizontal={false}
                    autoplayTimeout={3}
                    centerContent={true}
                    showsPagination={false}
                >
                    {data.map(movie => (
                        <View style={styles.slide} key={movie.id}>
                            <PopularMovieCard movie={movie} />
                        </View>
                    ))}
                </Swiper>
            )}
        </View>
    );
};

const styles = {

    slide: {
        width: '100%',
        height: '100%',
        marginHorizontal: 'auto'
    },

};
