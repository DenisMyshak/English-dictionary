import React from 'react';
import { View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

export default function AddButton({ style, onPress }) {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}>
            <View style={[styles.buttonContainer, style]}>
                <Image
                    style={styles.addButton}
                    source={{
                        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
                    }}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}