import React from "react";
import { playerEmojis } from "./game_constants.js";

export const WinnerBanner = (props) => {
    const style = {
        height: '120px',
        width: '120px',
        background: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '120px',
    };
    return <div style={style}>{playerEmojis[props.symbol]}</div>;
};
