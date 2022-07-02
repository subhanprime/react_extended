import { useState, useCallback, useMemo } from 'react';
export const useHandleMulReq = (data = [], initialIndex = 0) => {
    const [i, setIndex] = useState(initialIndex)
    console.log('data', data.length);

    const next = useCallback(() => {
        if (i > data.length - 1)
            setIndex(initialIndex)
        else
            setIndex(i + 1)
    }, [i])
    const prev = useCallback(() => {
        if (i < 0)
            setIndex(data.length - 1)
        else
            setIndex(i - 1)
    }, [i])
    const item = useMemo(() => data[i], [i]);
    return [item ||data[0], next, prev];
}
