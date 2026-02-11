import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default function OlaMundo(){
    return(
        <View>
            <Text>Ola</Text>
            <Text>{props.nome}!</Text>
        </View>
    )
}