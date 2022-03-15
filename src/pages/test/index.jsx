import React from 'react';
import { useHistory } from 'react-router-dom';

const Test = () => {
    const history = useHistory();

    return(
        <>
            <h3>Test Page</h3>
            <div style={{cursor: 'pointer'}} onClick={() => history.push('/')}>Go to page posts</div>
        </>
    );
}
export default Test;