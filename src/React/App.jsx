import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

/* Scripts  ---------------------------*/
import { MediaQueryProvider } from './common/useMediaQuery';

/* Components ---------------------------*/
import Header from './Layout/Header/Header';
import Nav from './Layout/Nav/Nav';
import Main from './Layout/Main';
import Footer from './Layout/Footer/Footer';

const App = () => {

    return (
        <MediaQueryProvider>
            <BrowserRouter>
                <AppStyled className='App'>
                    <Header />
                    <Nav />
                    <Main />
                    <Footer />
                </AppStyled>
            </BrowserRouter>
        </MediaQueryProvider>
    );
}

export default App;

const AppStyled = styled.div`

`;