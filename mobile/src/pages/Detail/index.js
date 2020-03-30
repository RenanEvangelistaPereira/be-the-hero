import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {

    const navigation = useNavigation();

    function navigateToIncidents(){
        navigation.navigate('Incidents');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={navigateToIncidents}>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                    <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>
                    
                    <Text style={styles.incidentProperty}>Caso:</Text>
                    <Text style={styles.incidentValue}>Xornder lander uonder</Text>
                    
                    <Text style={styles.incidentProperty}>Valor:</Text>
                    <Text style={styles.incidentValue}>R$ 120,00</Text>
             </View>
             <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia</Text>
                <Text style={styles.heroTitle}>Seja o heroi deste caso</Text>

                <Text style={styles.heroTitle}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
             </View>
        </View>
    );
}