import useMovies from '../hooks/use.movies';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import ListMovies from '../components/list/movies';
import SearchInput from '../components/input.search';
import PopularList from '../components/list/popular';
import {
    View,
    Text,
    Animated,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const tabs = [
    { key: "all", value: "All" },
    { key: "top", value: "Top" },
    { key: "upcoming", value: "New" },
];
export default function HomePage() {

    const [search, setSearch] = useState('');
    const [tab, setTab] = useState('all');
    const { data, error, isLoading } = useMovies(tab);
    const [hideBar, setHideBar] = useState(false);
    const lastScrollY = useRef(0);
    const scrollY = useRef(new Animated.Value(0)).current;

    const handleSearchInput = (text) => setSearch(text);
    const handleTabPress = (key) => setTab(key);

    const translateY = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [0, -165],
        extrapolate: 'clamp',
    });

    const opacity = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });


    const handleAnimation = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        {
            listener: event => {
                const currentScrollY = event.nativeEvent.contentOffset.y;
                if (currentScrollY > 200 && !hideBar) setHideBar(true);
                else if (currentScrollY <= 200 && hideBar) setHideBar(false);
                lastScrollY.current = currentScrollY;
            },
            useNativeDriver: true,
        }
    );
    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={hideBar ? 'black' : 'transparent'} />
            <Animated.View style={[styles.popularListContainer, { transform: [{ translateY },], opacity }]}>
                <PopularList />
            </Animated.View>
            <Animated.View style={[styles.searchAndTabsContainer, { transform: [{ translateY }] }]}>
                <View style={{ width: '55%' }}>
                    <SearchInput search={search} handleSearchInput={handleSearchInput} />
                </View>
                <View style={styles.tabs}>
                    {tabs.map((tab) => (
                        <TouchableOpacity
                            key={tab.key}
                            style={styles.tabItem}
                            onPress={() => handleTabPress(tab.key)}
                        >
                            <Text style={styles.tabText}>{tab.value}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Animated.View>
            <Animated.ScrollView
                contentContainerStyle={styles.scrollViewContent}
                onScroll={handleAnimation}
                scrollEventThrottle={16}
                // style={{ backgroundColor: 'red', }}
            >
                {isLoading && <Text>Loading...</Text>}
                {error && <Text>Error Happened...</Text>}
                {!isLoading && !error && <ListMovies movies={data.filter(movie =>
                    movie.title.toLowerCase().includes(search.toLowerCase()))} />}
            </Animated.ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    popularListContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    searchAndTabsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 200,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    tabs: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
    },
    tabItem: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
        marginRight: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
    },
    tabText: {
        color: 'white',
    },
    scrollViewContent: {
        paddingTop: 250, // Adjust based on the height of the popular list and search container
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: '2.5%',
    },
});
