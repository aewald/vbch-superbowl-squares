import { BoardContainer } from './board.styles';
import Square from './square.component';

const board = ({ clicked, disabled, scores, squares }) => {
  const { AFC: afcScores, NFC: nfcScores } = scores;

  const afcScoreSquares = afcScores.map((square, i) => <Square as="div" key={`scoreAFC${i}`} value={square} />);

  const squaresArray = [];
  for (let i in squares) {
    if (!(i % 10)) {
      squaresArray.push(<Square as="div" key={`scoreNFC${i}`} value={nfcScores[Math.floor((i / 10) % 10)]} />);
    }

    squaresArray.push(
      <Square
        key={`square${i}`}
        value={squares[i].value}
        selectedColor={squares[i].color}
        onClick={() => clicked(i)}
        disabled={disabled || squares[i].value}
      />
    );
  }

  return (
    <BoardContainer>
      <Square as="div" value="X" />
      {afcScoreSquares}
      {squaresArray}
    </BoardContainer>
  );
};

export default board;
