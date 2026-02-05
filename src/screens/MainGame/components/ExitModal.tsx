import { View } from 'react-native';

import { styles } from '../styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';

interface ExitModalProps {
  onStay: () => void;
  onExit: () => void;
}

const ExitModal = ({ onStay, onExit }: ExitModalProps) => {
  return (
    <View style={styles.exitOverlay}>
      <CustomContainer extraStyle={styles.exitModalContainer}>
        <CustomText extraStyle={styles.exitTitle}>Stop the game?</CustomText>
        <CustomText extraStyle={styles.exitSubtitle}>
          Progress will not be saved!
        </CustomText>
        <View style={styles.exitButtonsRow}>
          <CustomButton onPress={onStay} extraStyle={styles.exitStayButton}>
            <CustomText extraStyle={styles.exitButtonText}>Stay</CustomText>
          </CustomButton>
          <CustomButton onPress={onExit} extraStyle={styles.exitExitButton}>
            <CustomText extraStyle={styles.exitButtonText}>Exit</CustomText>
          </CustomButton>
        </View>
      </CustomContainer>
    </View>
  );
};

export default ExitModal;
