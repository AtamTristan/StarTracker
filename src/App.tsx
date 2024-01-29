import { useState } from 'react';
import styles from './App.module.scss';
import { Navbar } from './components/navbar/navbar';
import { TrackerScreen } from './components/tracker-screen/tracker-screen';

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <TrackerScreen />
        </div>
    );
}

export default App;
