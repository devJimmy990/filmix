import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import MovieCard from '../card.movie';



export default function ListTabs({ tabs }) {
    // console.warn(tabs);
    return (
        <FlatList
            data={tabs}
            horizontal
            keyExtractor={(tab) => tab.toString()}
            renderItem={({ tab }) => <Text style={styles.card} >{tab}</Text>}
        />
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'black',
        color: 'white',
        marginBottom: 10,
    },
});

