import React from 'react';
import {useParams} from 'react-router-dom';

const DetailPost = () => {
    const {id} = useParams();

    return (
        <div className="detail-page">
            <h2>detail page {id}</h2>
        </div>
    );
}
export default DetailPost;