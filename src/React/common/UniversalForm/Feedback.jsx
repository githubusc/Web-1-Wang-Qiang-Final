import React, { useContext } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

/* Context  ---------------------------*/
import Context from './Context';

const Feedback = () => {

    const { state } = useContext(Context);

    if (!state.feedback.show) { return '; '}
    
    const theClassName = classNames({
        'Feedback': true,
        [state.feedback.type]: true,
    });
    return (
        <FeedbackStyled className={ theClassName }>
            { state.feedback.message }
        </FeedbackStyled>
    );
}

export default Feedback;

const FeedbackStyled = styled.div`
    
    padding: 20px;
    margin-bottom: 30px;

    &.error {
        background-color: #f9c76b;
    }
    &.success {
        background-color: #7df9a8;
    }
    
`;