import * as React from 'react';
import { useState } from 'react';
import { ApiUrlContext } from './ApiUrlContext';

const ApiUrlContextProvider: React.FunctionComponent = ({children}: any) => {
    const [apiUrl] = useState('http://localhost:8080');

    return (
        <ApiUrlContext.Provider value={{apiUrl}}>
            {children}
        </ApiUrlContext.Provider>
    );
};

export default ApiUrlContextProvider;
