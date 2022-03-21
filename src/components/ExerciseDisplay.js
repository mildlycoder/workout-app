import React from 'react';
import './ExerciseDisplay.css';

const ExerciseDisplay = (props) => {
    console.log(props.steps);
    const steps = props.steps.map(step => {
        return(
            <li>{step}</li>
        )
    })
    const url = `https://www.youtube.com/embed/${props.embedId}`;
    const levelStyle = {
        background : (props.level == "beginner")? "green" : "red"
    }
    return ( 
        <section className="exercise">
            <h2 className='exercise-name'>{props.name}</h2>
            <div className="exercise-level" style={levelStyle}>
                <h2 >{props.level}</h2>
            </div>
            <div className="iframe-container">
                <iframe
                loading="lazy"
                src={url} 
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
                title="Embedded youtube"
                />
            </div>
            <ol className='steps'>{steps}</ol>
        </section>
     );
}
 
export default ExerciseDisplay;
