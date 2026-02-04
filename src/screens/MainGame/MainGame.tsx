import {
  ExitModal,
  GameArea,
  ResultsOverlay,
  RulesOverlay,
} from './components';

import { CustomHeader, CustomScreenWrapper } from 'src/components';
import { useMainGameLogic } from 'src/hooks';

const MainGame = () => {
  const {
    gamePhase,
    timeLeft,
    sessionScore,
    sessionBiggy,
    sessionFish,
    spawnedItems,
    floatingScores,
    showExitModal,
    handleItemTap,
    handleBackPress,
    startGame,
    confirmExit,
    closeExitModal,
    goBack,
    formatTime,
  } = useMainGameLogic();

  return (
    <CustomScreenWrapper>
      <CustomHeader
        title={gamePhase === 'playing' ? 'Catch it!' : 'Rules'}
        onBackPress={handleBackPress}
      />

      {gamePhase === 'playing' && (
        <GameArea
          timeLeft={timeLeft}
          score={sessionScore}
          items={spawnedItems}
          floatingScores={floatingScores}
          onTap={handleItemTap}
          formatTime={formatTime}
        />
      )}

      {gamePhase === 'rules' && <RulesOverlay onStart={startGame} />}

      {gamePhase === 'results' && (
        <ResultsOverlay
          biggyCount={sessionBiggy}
          fishCount={sessionFish}
          finalScore={sessionScore}
          onRestart={startGame}
          onClose={goBack}
        />
      )}

      {showExitModal && (
        <ExitModal onStay={closeExitModal} onExit={confirmExit} />
      )}
    </CustomScreenWrapper>
  );
};

export default MainGame;
