import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Badge } from 'react-native-paper';
import { useSelector } from 'react-redux';

const IconWithBadge = ({ name, color, size, focused }) => {
    const length = useSelector(state => state.favourite.favourites.length);

    return (
        <View style={{ width: 24, height: 24, margin: 5 }}>
            <Ionicons name={name} size={size} color={color} />
            {0 < length && (
                <Badge
                    size={14}
                    style={[styles.badge, { backgroundColor: focused ? 'gray' : 'yellow', color: 'black', fontSize: 12, fontWeight: 'bold' }]}
                >
                    {length}
                </Badge>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        top: -4,
        right: -4,
    },
});

export default IconWithBadge;
