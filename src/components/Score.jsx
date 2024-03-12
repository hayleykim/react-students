import { useState } from "react";

const Score = (props) => {
    const {scores} = props;

    return (
        <div>
            {scores.map((score, idx) => (
                <div key={idx}>
                    <div>Score Date: {score.date}</div>
                    <div>Score: {score.score}</div>
                </div>

            ))}
        
        </div>

    );
};

export default Score;