import React, { useState } from 'react';

//Style components
import { StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris';

//custom hooks
import {usePlayer } from '../hooks/usePlayer';
import {useStage } from '../hooks/useStage';

//components
import Stage from './Stage';
import Disply from './Display';
import StartButton from './StartButton'
import Display from './Display';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    //custom hooks
    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log('re-render')
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>
                    
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                    <div>
                        <Display text= "Score" />
                        <Display text= "Rows" />
                        <Display text= "Level" />
                    </div>
                    )}
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
};

export default Tetris;