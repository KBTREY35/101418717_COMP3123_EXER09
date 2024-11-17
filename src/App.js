import React from 'react';
import PersonList from './PersonList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <header className="bg-primary text-white text-center py-3">
                <h1>Lab 11: Axios and Fetch API</h1>
            </header>
            <main>
                <PersonList />
            </main>
        </div>
    );
}

export default App;
