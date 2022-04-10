import React, { useContext } from 'react';
import { RouterContext } from "./Router";
const useParams = () => {
    return useContext(RouterContext);
};

export default useParams;