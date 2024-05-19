import { FlatList, StyleSheet, View, Text } from 'react-native';
import MovieCard from '../card/card.movie';
import useRelated from '../../hooks/use.related';


export default function RelatedMovies({ id }) {
    const { data, error, isLoading } = useRelated(id);
    // if (data.length === 0) return;
    return (
        <View>
            {isLoading && <Text>Loading...</Text>}
            {error && <Text>Error Happened...</Text>}
            {!isLoading && !error &&
                <View style={styles.container}>
                    <Text style={styles.title}>Related Movies</Text>
                    <FlatList
                        data={data} horizontal
                        keyExtractor={(movie) => movie.id.toString()}
                        renderItem={({ item }) => <View style={styles.card} ><MovieCard movie={item} /></View>}
                    />
                </View>}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        fontStyle: 'italic',
    },
    card: {
        // width: 100,
        marginHorizontal: 5,
        // marginBottom: 10,
    },
});

