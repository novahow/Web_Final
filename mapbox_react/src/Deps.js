import React, { useEffect, useRef, useState, useCallback } from 'react'
import useChat from './useChat'
import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
const Deps = (props) => {
    const [exp, setExp] = useState(false)

    const [newUserData, setNewUserData] = useState({})
    const [users, setUsers] = useState([]);
    // const [department, setDepartment] = useState('');

    return (
        <div>
            <div className='txtimg'>
                <div className='text'>
                    {props.ele}
                </div>
                <button className={exp ? 'trans' : ''} onClick={() => { exp ? setExp(false) : setExp(true) }}>
                    <i class="fa fa-play fa-2x"></i>
                </button>

            </div>
            <span>
                {exp ?
                    (<span className='bg'>
                        <button className='goodbutton' onClick={() => { props.dep(props.ele); props.switch(2) }}> Boy </button>
                        <button className='goodbutton' onClick={() => { props.dep(props.ele); props.switch(2) }}> Girl </button>
                    </span>
                    ) : (<div></div>)}
            </span>
        </div>
    )
}

export default Deps