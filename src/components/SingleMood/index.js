import React from 'react';
import './styles.scss';

function SingleMood(props) {
    const { singleMood } = props;
    return (
        <div className="mood__wrapper">
            <div className={`mood ${singleMood.mood}`}>
                <p className="face">
                    {singleMood.mood === 'happy'
                        ? ':)'
                        : ':('
                    }
                </p>
            </div>
            <div className="mood__info">
                <p>{singleMood.date}</p>
                <p>{singleMood.message}</p>
            </div>
        </div>
    );
}

export default SingleMood;