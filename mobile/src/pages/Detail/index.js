import React from 'react';
import { View, Image, Text } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    return (
        <View style={styles.container}>
                <Image source={logoImg} />
                <Text>
                    Detalhe
                </Text>
        </View>
    );
}