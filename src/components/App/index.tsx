import * as React from 'react';
import '../../custom.scss';
import Main from '../Main';
import ApiUrlContextProvider from "../../context/ApiUrlContext/ApiUrlContextProvider";

const App: React.FunctionComponent<{}> = () => {
    return (
        <ApiUrlContextProvider>
            <Main />
        </ApiUrlContextProvider>
    );
};

export default App;
