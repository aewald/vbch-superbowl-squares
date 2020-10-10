import { useState } from 'react';

import Board from './board.component';
import { TeamLabel } from './gameBoard.styles';
import { Button, ButtonGroup, Container } from '../UI';

import { Hello } from 'ae-auth';

const GameBoard = () => {
  const [currentUserState, setCurrentUserState] = useState({
    name: 'Test User',
    nickname: 'Player Tester',
    initals: 'TUE',
    color: 'green',
    allotments: 3,
    used: 0,
  }); //testing

  const [gameBoard, setGameBoard] = useState({
    squares: null,
    active: false,
    randomize: false,
  });
  const [randomizeScoresState, setRandomizeScoresState] = useState(false);
  const [scores, setScores] = useState({
    AFC: null,
    NFC: null,
  });

  const shuffleDigits = () => {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return digits.sort(() => Math.random() - 0.5);
  };

  const clickHandler = (index) => {
    if (currentUserState.allotments > currentUserState.used) {
      const squares = [...gameBoard.squares];
      squares[index] = { ...squares[index], color: currentUserState.color, value: currentUserState.initals };
      setGameBoard({ ...gameBoard, squares });
      setCurrentUserState((prevState) => ({
        ...currentUserState,
        used: prevState.used + 1,
      }));
    }
  };

  const createNewBoardHandler = () => {
    setScores({ AFC: shuffleDigits(), NFC: shuffleDigits() });
    setGameBoard({
      ...gameBoard,
      squares: Array(10 * 10).fill({
        value: null,
        selectColor: null,
      }),
    });
    randomizeHandler();
  };

  const randomizeHandler = () => {
    setRandomizeScoresState(
      setInterval(() => {
        setScores({ AFC: shuffleDigits(), NFC: shuffleDigits() });
      }, 1000)
    );
  };

  const acceptGameBoardHandler = (setScoresOnStart) => {
    if (setScoresOnStart) {
      stopRandomizeScores();
    }

    setGameBoard((prevState) => ({
      ...prevState,
      active: true,
      randomize: setScoresOnStart,
    }));
  };

  const stopRandomizeScores = () => {
    clearInterval(randomizeScoresState);
    setRandomizeScoresState(false);
  };

  let allotments = (
    <h6>
      Allotments: {currentUserState.allotments} | Used: {currentUserState.used}
    </h6>
  );

  if (!gameBoard.active) {
    allotments = null;
  }

  let board = (
    <>
      <h4>Teams</h4>
      {allotments}
      <TeamLabel vertical={true}>NFC Team</TeamLabel>
      <TeamLabel>AFC Team</TeamLabel>
      <Board
        squares={gameBoard.squares}
        scores={scores}
        disabled={!gameBoard.active || currentUserState.allotments <= currentUserState.used}
        clicked={clickHandler}
      />
    </>
  );

  let controls = (
    <div>
      <h4>Options:</h4>
      <ButtonGroup>
        <Button variant="outline-secondary" onClick={acceptGameBoardHandler.bind(this, true)}>
          Set Scores on Start
        </Button>
        <Button variant="outline-secondary" onClick={acceptGameBoardHandler.bind(this, false)}>
          Set Scores after Full Board
        </Button>
      </ButtonGroup>
      <hr />
    </div>
  );

  if (!gameBoard.squares) {
    controls = (
      <div>
        <Button variant="success" onClick={createNewBoardHandler}>
          Create New Squares
        </Button>
      </div>
    );
    board = null;
  }

  if (gameBoard.active) {
    controls = null;
  }

  return (
    <>
      <Container>
        {Hello}
        {controls}
        {board}
      </Container>
    </>
  );
};

export default GameBoard;
