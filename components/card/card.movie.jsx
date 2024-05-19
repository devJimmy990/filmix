import routes from '../../utils/routes';
import sources from '../../utils/sources';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Pressable } from 'react-native';

const MovieCard = ({ movie }) => {
    const { navigate } = useNavigation();

    return (
        <Pressable style={styles.card} onPress={() => navigate(routes.DETAILS, { ...movie })}>
            <Image style={styles.image}
                source={{ uri: sources.POSTER + movie.poster_path }} />

            {/* <Text style={styles.title} numberOfLines={1}>{movie.original_title}</Text> */}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        minWidth: 120,
        marginHorizontal: 'auto',
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
