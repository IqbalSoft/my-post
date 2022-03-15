import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './styles.scss';

const Post = () => {
    const history = useHistory();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setData(res.data)
        })
    }, [])

    console.log(data);

    return(
        <div className="post-page">
            <div className="title">Post List</div>
            <div className="divider"></div>

            <div className="card-list">
                {
                    data && data.map((item, key) => (
                        <div className="card-box" key={key} onClick={() => history.push(`/detail/${item.id}`)}>
                            <div className="card-image"></div>
                            <div className="title">{item.title.split(' ')[0]}</div>
                            <div className="description">{item.body}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default Post;