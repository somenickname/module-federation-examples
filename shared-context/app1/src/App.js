import React from 'react';
import {ExposedContext} from './context';

const Welcome = React.lazy(() => import('app2/Welcome'));

const App = () => {
    const temp = React.useContext(ExposedContext);
    console.log('temp', temp);

    return (
        <div>
            <h2>App 1</h2>
            <ExposedContext.Provider value="ExposedContext.Provider value from app 1">
                <h1>Local Context Provider</h1>
                <LocaleWelcome/>
                <br/>
                <h1>Federated Context Provider</h1>
                <React.Suspense fallback="Loading Name">
                    <Welcome/>
                </React.Suspense>
            </ExposedContext.Provider>
        </div>
    );
};

export default App;

const LocaleWelcome = () => {
    const name = React.useContext(ExposedContext);

    return (
        <p>Welcome, {name}</p>
    );
};
