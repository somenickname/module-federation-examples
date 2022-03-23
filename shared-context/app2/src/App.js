import React from 'react';
import Welcome from './Welcome';

import {ExposedContext} from 'app1/exposed-context';

const App = () => (
    <div>
        <h1>Context Provider</h1>
        <h2>App 2</h2>
        <ExposedContext.Provider value="ExposedContext.Provider from app 2">
        <Welcome/>
        </ExposedContext.Provider>

    </div>
);

export default App;
