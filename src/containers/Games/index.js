import React from 'react';
import { COUNT_DOWN_GAME, WHEN_WHITE_GAME, SAD_FACE_GAME, LOADING_GAME } from '../../constants';
import CountDown from './CountDown';
import WhenWhite from './WhenWhite';
import SadFace from './SadFace';
import Loading from './Loading';

function Games({ gameType, gameRef }) {
    switch (gameType) {
        case SAD_FACE_GAME: {
            return <SadFace ref={gameRef} />;
        }
        case COUNT_DOWN_GAME: {
            return <CountDown ref={gameRef} />;
        }
        case WHEN_WHITE_GAME: {
            return <WhenWhite ref={gameRef} />;
        }
        case LOADING_GAME: {
            return <Loading ref={gameRef} />;
        }
        default: {
            return <Loading ref={gameRef} />;
        }
    }
};

export default Games;