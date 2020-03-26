import * as React from 'react';
import Main from '../Main';
import '../../custom.scss';
import ApiUrlContextProvider from "../../context/ApiUrlContext/ApiUrlContextProvider";

const App: React.FunctionComponent<{}> = () => {
    return (
        <ApiUrlContextProvider>
            <Main />
        </ApiUrlContextProvider>
    );
};

export default App;
