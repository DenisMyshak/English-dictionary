import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 10 
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'rgba(70,70,70, 0.4)'
    },
    modalWindow: {
        paddingVertical: 200,
        width: '85%',
        // height: 200,
        backgroundColor: 'white',

    }
})

export default styles;