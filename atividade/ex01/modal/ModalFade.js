import { useState } from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/modalStyles';

const ModalFade = ({ animation, themeColor }) => {
    const [visible, setVisible] = useState(false);

    return (
        <SafeAreaView style={[styles.screenContainer, { backgroundColor: themeColor + '15' }]}>
            <Text style={[styles.headerText, { color: themeColor }]}>
                {animation.toUpperCase()} 
            </Text>

            <TouchableOpacity
                style={[styles.mainButton, { backgroundColor: themeColor }]}
                onPress={() => setVisible(true)}
                activeOpacity={0.85}
            >
                <Text style={styles.buttonText}>
                    Abrir Modal {animation.toUpperCase()}
                </Text>
            </TouchableOpacity>

            <Modal
                animationType={animation}
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setVisible(false)}
                >
                    <View style={styles.modalCard}>
                        <View style={[styles.colorIndicator, { backgroundColor: themeColor }]} />

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Animação: {animation}
                            </Text>

                            <Text style={styles.modalBody}>
                                Esta transição demonstra o comportamento nativo do tipo {animation}
                            </Text>

                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setVisible(false)}
                                activeOpacity={0.7}
                            >
                                <Text style={[styles.closeButtonText, { color: themeColor }]}>
                                    FECHAR
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>

        </SafeAreaView>
    )
}

export default ModalFade;