import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AnimatedWelcomeMessage() {
    const [index, setIndex] = useState(0);
    const welcome = "Welcome To Filmix...";
    const [forward, setForward] = useState(true);
    const [animatedText, setAnimatedText] = useState('');

    useEffect(() => {
        const animateText = () => {
            if (forward) {
                if (index < welcome.length) {
                    setAnimatedText((prevText) => prevText + welcome[index]);
                    setIndex((prevIndex) => prevIndex + 1);
                } else { setForward(false); }
            } else {
                if (index > 1) {
                    setAnimatedText((prevText) => prevText.slice(0, -1));
                    setIndex((prevIndex) => prevIndex - 1);
                } else { setForward(true); }
            }
        };
        const interval = setInterval(animateText, 300);
        return () => clearInterval(interval);
    }, [index, forward, welcome]);


    return (
        <View>
            {/* <Text style={styles.text}>{welcome}</Text> */}
            <Text style={styles.text}>{animatedText}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        // color: 'yellow',
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})