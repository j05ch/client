import * as React from 'react';
import { useContext } from 'react';
import { ApiUrlContext } from '../context/ApiUrlContext/ApiUrlContext';

const useApiUrlContext = () => useContext(ApiUrlContext);

export default useApiUrlContext;
