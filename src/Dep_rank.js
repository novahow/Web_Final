import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useQuery, useMutation } from "@apollo/client"
import { Button } from 'antd'
import Ranking from './Ranking'
const Dep_rank = (props) => {
    const [exp, setExp] = useState(false)
    const arr = ['1', '2', '3'];
    return (

        <div className='dropdown dropright'>

            {/*
            <a href="#ranking" onClick={() => exp ? setExp(false) : setExp(true)}>Rankings</a>

            <div className='dep'>{exp ?
                (props.arr.map(e => (<Ranking arr={arr} dep={e.dep} />)))
                : (<div></div>)
            }
        </div>*/}
            Ranking
            {props.arr.map(e => (<Ranking arr={arr} dep={e.dep} />))}

        </div>

    )
}

export default Dep_rank