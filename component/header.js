import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        {/*<View style={styles.header}>
            <Text style={styles.title}>Where's My Beer</Text>
        </View>*/}
    )
}

const styles = StyleSheet.create({
    header: { /*modify header bar */
        height: 80,
        paddingTop: 38,
        backgroundColor: 'green'
    },
    title: { /* modify text */
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
}
)