import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {

    const navigation = useNavigation();

    function navigateToDetail(){
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0</Text> casos
                </Text>
            </View>

            <Text style={styles.title}>Bem Vindo</Text>
            <Text style={styles.desciption}>Escolha um dos casos abaixo e salve o dia.</Text>
            
            <FlatList 
                data={[1,2,3,4]}
                style={styles.incidentList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>
                    
                    <Text style={styles.incidentProperty}>Caso:</Text>
                    <Text style={styles.incidentValue}>Xornder lander uonder</Text>
                    
                    <Text style={styles.incidentProperty}>Valor:</Text>
                    <Text style={styles.incidentValue}>R$ 120,00</Text>

                    <TouchableOpacity style={styles.detailsButton} onPress={ () => {} }>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02041"></Feather>
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    );
}