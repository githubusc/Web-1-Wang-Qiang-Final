import React, {useState} from 'react';
import styled from 'styled-components';

import ActiveArea from './ActiveArea';
import Modal from './Modal/Modal';

const Lightbox = ({title, activeContent, modalContent}) => {

    const [showModal, showModalUpdate] = useState(false);
    return (
        <LightboxStyled className='Lightbox'>
            

            <ActiveArea activeContent={ activeContent } showModalUpdate={ showModalUpdate }/>
            {
                showModal &&
                <Modal title={ title } modalContent={ modalContent } showModalUpdate={ showModalUpdate }/>
            }
            
            
            
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    
`;