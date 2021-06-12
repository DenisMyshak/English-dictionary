import React, { useState } from 'react'; // по default, любое название
import { View, Text, TextInput, ScrollView, Modal, Button, TouchableWithoutFeedback, TouchableWithoutFeedbackComponent } from 'react-native'; // export по имени
import styles from './styles';
import { words } from '../../mock/dictionary';
import ListItem from '../list-item/list-item';
import AddButton from '../add-button/add-button';

export default function Home() {
    const [search, setSearch] = useState(``);
    const [wordsData, setWordsData] = useState(words);
    const [modalVisible, setModalVisible] = useState(false);
    const [newWord, setNewWord] = useState('');

    const showWords = (words) => {
        return words.map((word) => {
            return (
                <ListItem key={word.id} name={word.name} />
            );
        })
    }
    return (
        <View style={styles.container}>
            <Modal
                visible={modalVisible}
                animation="slide"
                transparent={true}
            >
                <TouchableWithoutFeedback
                    onPress={() => {
                        setModalVisible(false);
                        setNewWord('');
                    }}
                >
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalWindow}>
                                <View>
                                    <TextInput placeholder='Enter new word' value={newWord} onChangeText={(text) => {
                                        setNewWord(text);
                                    }}/>
                                </View>
                                <Button title='Add' color='lightgreen' onPress={() => {
                                    setWordsData((prev) => {
                                        return [{
                                            id: 56,
                                            name: newWord
                                        }, ...prev];
                                    });
                                    setModalVisible(false);
                                    setNewWord('');
                                }}/>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <View>
                <TextInput placeholder='Enter your word' value={search} onChangeText={(text) => {
                    setSearch(text);
                }} />
            </View>
            <ScrollView>
                {search ?
                    showWords(wordsData.filter((word, index, arr) => word.name === search))
                    :
                    showWords(wordsData)
                }
            </ScrollView>
            <AddButton
                style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20
                }}
                onPress={() => {
                    console.log('hello')
                    setModalVisible(true);
                }}
            />
        </View>
    );
}