'use client'

import {useEffect, useState} from "react";

function useSomethingClientside() {
    const [returnValue, setReturnValue] = useState('initial clientside value. wait 2 secs and it will change')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setReturnValue('changed clientside value');
        }, 2000);

        return () => clearTimeout(timeout); // Cleanup the timeout if the component unmounts
    }, []);

    return returnValue
}

export default useSomethingClientside;
