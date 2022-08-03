import React from 'react';

import './App.css';
import {MainProvider} from "./contexts";
import {MainPage} from "./pages";

function App() {
    return (
        <MainProvider>
            <MainPage/>
        </MainProvider>
    );
}

export default App;
