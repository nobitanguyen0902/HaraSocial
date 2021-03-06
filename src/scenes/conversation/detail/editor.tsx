import * as React from "react";
import { ScrollView, StyleSheet, View, Text, TextInput } from 'react-native';

export const Editor = React.memo(() => {
    return <TextInput
        placeholder="Aa"
        multiline
        numberOfLines={4}
        maxLength={40}
        style={styles.input}
    />
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    input: {
        backgroundColor: "#EEE",
        borderRadius: 30,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        paddingStart: 16
    }
})