import { useState } from 'react';
import { Text,  View,  Modal, TouchableOpacity} from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context'; 
import styles from '../styles/modalStyles';

const ModalFade = ({animation, themeColor}) => {
    const [visible, setVisible] = useState(false);  

    return (
        <SafeAreaView style={[styles.screenContainer, {backgroundColor: themeColor + 10}]}>
            <Text styles={[styles.headerText, {color: themeColor}]}>
                Modo: {animation.toUpperCase()}
            </Text>   

            <TouchableOpacity style={[styles.mainButton, {backgroundColor: themeColor}]} onPress={() => setVisible(true)}>
                <Text style={styles.buttonText}>
                    Abrir Modal {animation.toUpperCase()}
                </Text>
            </TouchableOpacity>

            <Modal 
                animationType={animation} 
                transparent={true} 
                visible={visible}
                onRequestClose={()=> setVisible(false)}
            >
                <TouchableOpacity 
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setVisible(false)}
                >
                    <View styles={styles.modalCard}>
                        <View styles={[styles.colorIndicator, {backgroundColor:themeColor}]} />

                        <Text style={styles.modalTitle}>
                            Animação: {animation}
                        </Text>

                        <Text style={styles.modalBody}>
                            Esta transição demonstra o comportamento nativo do tipo {animation}
                        </Text>

                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>
                                FECHAR
                            </Text>
                        </TouchableOpacity>

                    </View>
                </TouchableOpacity>
            </Modal>

        </SafeAreaView>
    )
}
export default ModalFade;