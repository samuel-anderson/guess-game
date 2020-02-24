import React from 'react'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            
            <Card style={styles.inputContainter}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainter}>
                    <View style={styles.button}>
                        <Button color={Colors.secondary} title="Reset" onPress={() => {}}/>
                    </View>
                    <View style={styles.button}>
                        <Button color={Colors.primary} style={styles.button} title="Confirm" onPress={() => {}}/>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
    
    },
    inputContainter: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainter:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button:{
        width: 100
    }
})

export default StartGameScreen

