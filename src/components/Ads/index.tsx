import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useApiUrlContext from "../../services/useApiUrl";

const Ads: React.FunctionComponent<{}> = () => {
    const [adList, setAdList] = useState<Array<Object>>([]);
    const {apiUrl} = useApiUrlContext();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${apiUrl}/ad-list`);
                setAdList(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData().catch(err => console.error(err));
    }, [apiUrl]);

    return (
        <>
            {console.log(adList)}
        </>

    );
};

export default Ads;
