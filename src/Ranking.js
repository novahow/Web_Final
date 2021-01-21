import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useQuery, useMutation } from "@apollo/client"
import { Button } from 'antd'
// import console from 'console'
import useChat from './useChat'
const Ranking = (props) => {
    const { getUsers, addUser, addLoginUser, checkLogin } = useChat()
    const [exp, setExp] = useState(false)
    const [users, setUsers] = useState([]);
    const sea_in_deps = {
        'CSEE': ['資工', '電機'], 'LAW': ['法律'],
        'INDUSTRY': ['化工', '土木', '機械', '工海', '材料'],
        'ELITE': ['財金', '會計', '國企', '工管', '資管'],
        'SOCIAL': ['經濟', '政治', '社工']
    }
    const arr = [];
    useEffect(async () => {
        for (var e of sea_in_deps[props.dep]) {
            const tmp = await getUsers(e);
            tmp.map(({ name, popularity, totalVoting, gender }, i) => {
                arr.push({ name, popularity, totalVoting, gender })
            })
            // setUsers(tmp.concat(users));
            console.log(tmp, arr)
        }
        setUsers(arr)

    }, [])


    /*users.map(({ name, popularity, totalVoting }, i) => {
        arr[i] = { name, popularity, totalVoting }
    })*/
    console.log(users, 'www')
    users.sort((a, b) => {
        return b.popularity / b.totalVoting - a.popularity / a.totalVoting;
    });
    const boys = users.filter(e => (e.gender == 0));
    const girls = users.filter(e => (e.gender == 1));
    return (
        <div><a className="dropdown-item dropdown-toggle"> {props.dep} </a>
            <ul className="submenu dropdown-menu">
                <div className="dropdown-divider"></div>
                <div><a className="dropdown-item fuck0" >
                    boys
                </a></div>
                <div className="dropdown-divider"></div>
                {boys.slice(0, 5).map(e =>
                    (<div><a className="dropdown-item" >
                        {e.name}({(e.popularity / e.totalVoting).toFixed(1)})
                    </a></div>))}
                <div className="dropdown-divider"></div>
                <div><a className="dropdown-item fuck1">
                    girls
                </a></div>
                <div className="dropdown-divider"></div>
                {girls.slice(0, 5).map(e =>
                    (<div><a className="dropdown-item" >
                        {e.name}({(e.popularity / e.totalVoting).toFixed(1)})
                    </a></div>))}
            </ul>
        </div>

    )
}

export default Ranking
/*
<div className="dropdown dropright">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                {props.dep}
            </button>
            <div className="dropdown-menu">
                {props.arr.map(e => (<a className="dropdown-item" href="#">{e}</a>))};
            </div>
        </div>
*/
