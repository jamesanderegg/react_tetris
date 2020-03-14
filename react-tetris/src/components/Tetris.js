import React from 'react';

//components
import Stage from './Stage';
import Disply from './Display';
import StartButton from './StartButton'
import Display from './Display';

const Tetris = () => {


    return (
        <div>
            <Stage />
            <aside>
                <div>
                    <Display text= "Score" />
                    <Display text= "Rows" />
                    <Display text= "Level" />
                </div>
                <StartButton />
            </aside>

        </div>
    )
};

export default Tetris;