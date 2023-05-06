import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - React Station`;
    },[title]);
};

export default useTitle;