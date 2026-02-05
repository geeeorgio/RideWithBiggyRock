import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { ICONS, QUIZ_IMAGES } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';
import type {
  MainStackNavigationProp,
  QuizQuestion,
  QuizState,
} from 'src/types';

const QuizScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const { contextQuiz, addToTotalScore } = useGameContext();

  const [quizState, setQuizState] = useState<QuizState>('intro');

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const [showHint, setShowHint] = useState(false);

  const [earnedPoints, setEarnedPoints] = useState(0);

  const currentQuestion: QuizQuestion | undefined =
    contextQuiz[currentQuestionIndex];

  const handleStartQuiz = () => {
    setQuizState('question');

    setCurrentQuestionIndex(0);

    setSelectedAnswer(null);

    setShowHint(false);

    setEarnedPoints(0);
  };

  const handleSelectAnswer = (answer: string) => {
    if (!currentQuestion) return;

    setSelectedAnswer(answer);

    const isCorrect =
      answer.trim().toLowerCase() ===
      currentQuestion.correctAnswer.trim().toLowerCase();

    if (isCorrect) {
      setEarnedPoints((prev) => prev + 1);

      addToTotalScore(1);

      setTimeout(() => {
        if (currentQuestionIndex < contextQuiz.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);

          setSelectedAnswer(null);

          setShowHint(false);
        } else {
          setQuizState('complete');
        }
      }, 800);
    } else {
      setShowHint(true);
    }
  };

  const handleTryAgain = () => {
    setSelectedAnswer(null);

    setShowHint(false);
  };

  const renderIntro = () => (
    <View style={styles.introContainer}>
      <Image
        source={QUIZ_IMAGES.quiz_1}
        style={styles.introImage}
        resizeMode="cover"
      />

      <CustomContainer extraStyle={styles.introContent}>
        <CustomText extraStyle={styles.introDescription}>
          Test your knowledge about Biggy Rock and his journey. {'\n'} Points
          you earn in the quiz are added to your total score and can be used to
          unlock vehicles and travel tips.
        </CustomText>
      </CustomContainer>

      <CustomButton onPress={handleStartQuiz} extraStyle={styles.startButton}>
        <View style={styles.startBtnOverlay} />
        <CustomText extraStyle={styles.startButtonText}>Start quiz</CustomText>
      </CustomButton>
    </View>
  );

  const renderQuestion = () => {
    if (!currentQuestion) return null;

    const isCorrectAnswer =
      selectedAnswer &&
      selectedAnswer.trim().toLowerCase() ===
        currentQuestion.correctAnswer.trim().toLowerCase();

    return (
      <>
        <ScrollView
          style={styles.questionScrollView}
          contentContainerStyle={styles.questionContainer}
          showsVerticalScrollIndicator={false}
        >
          <CustomContainer
            variant="onboarding"
            extraStyle={styles.questionContent}
          >
            <Image
              source={ICONS.question}
              style={styles.questionIcon}
              resizeMode="contain"
            />
            <CustomText extraStyle={styles.questionText}>
              {currentQuestion.question}
            </CustomText>
          </CustomContainer>

          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option;

              const isCorrect =
                option.trim().toLowerCase() ===
                currentQuestion.correctAnswer.trim().toLowerCase();

              const showAsCorrect = isSelected && isCorrect;

              const showAsWrong = isSelected && !isCorrect;

              return (
                <Pressable
                  key={`${currentQuestion.id}_option_${index}`}
                  onPress={() => handleSelectAnswer(option)}
                  disabled={selectedAnswer !== null}
                  style={[
                    styles.optionButton,

                    showAsCorrect && styles.optionCorrect,

                    showAsWrong && styles.optionWrong,
                  ]}
                >
                  <CustomText extraStyle={[styles.optionText]}>
                    {option}
                  </CustomText>
                </Pressable>
              );
            })}
          </View>

          {showHint && !isCorrectAnswer && (
            <>
              <CustomContainer extraStyle={styles.hintContainer}>
                <View style={styles.hintHeader}>
                  <Image
                    source={ICONS.answer}
                    style={styles.hintIcon}
                    resizeMode="contain"
                  />
                  <CustomText extraStyle={styles.hintText}>
                    {currentQuestion.hint}
                  </CustomText>
                </View>
              </CustomContainer>
              <CustomButton
                onPress={handleTryAgain}
                extraStyle={styles.tryAgainButton}
              >
                <CustomText extraStyle={styles.tryAgainText}>
                  Try Again
                </CustomText>
              </CustomButton>
            </>
          )}

          {isCorrectAnswer && (
            <View style={styles.correctFeedback}>
              <CustomText extraStyle={styles.correctText}>
                Correct! +1
              </CustomText>
            </View>
          )}
        </ScrollView>
        <View style={styles.progressContainer}>
          <CustomText extraStyle={styles.progressText}>
            {currentQuestionIndex + 1} / {contextQuiz.length}
          </CustomText>
        </View>
      </>
    );
  };

  const renderComplete = () => (
    <>
      <View style={styles.completeContainer}>
        <Image
          source={QUIZ_IMAGES.quiz_2}
          style={styles.completeImage}
          resizeMode="cover"
        />

        <CustomContainer
          variant="onboarding"
          extraStyle={styles.completeContent}
        >
          <CustomText extraStyle={styles.completeDescription}>
            You’ve successfully completed the quiz. Your earned points have been
            added — use them to unlock vehicles and travel tips and keep moving
            forward.
          </CustomText>

          <Image
            source={ICONS.question}
            style={styles.completeBadgeIcon}
            resizeMode="contain"
          />
        </CustomContainer>

        <View style={styles.restartButtonsContainer}>
          <CustomButton
            onPress={handleStartQuiz}
            extraStyle={styles.restartButton}
          >
            <View style={styles.restartBtnOverlay} />
            <CustomText extraStyle={styles.restartButtonText}>
              Start again
            </CustomText>
          </CustomButton>
          <CustomButton
            onPress={() => navigation.navigate('MainGameScreen')}
            extraStyle={styles.restartButton}
          >
            <View style={styles.restartBtnOverlay} />
            <CustomText extraStyle={styles.restartButtonText}>
              Tap to play
            </CustomText>
            <Image
              source={ICONS.play}
              style={styles.playIcon}
              resizeMode="contain"
            />
          </CustomButton>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <CustomText extraStyle={styles.progressText}>Quiz is over</CustomText>
      </View>
    </>
  );

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomHeader
        title={quizState === 'intro' ? 'Quiz' : earnedPoints.toString()}
      />

      {quizState === 'intro' && renderIntro()}

      {quizState === 'question' && renderQuestion()}

      {quizState === 'complete' && renderComplete()}
    </CustomScreenWrapper>
  );
};

export default QuizScreen;
