import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

const App = () => {

    return (
        <div>
            <Header/>
            <Sidebar/>
            <div className='rightContentContainer'>

                <h1>Welcome to the Course</h1>

            </div>
        </div>
    );
};


export default App;