import React, { useEffect, useRef, useState, useCallback } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dep_rank from './Dep_rank';
import Ranking from './Ranking'

const Newnav = (props) => {

    return (

        <span className="nav-text dropdown dropright" className="nav-text">
            <li className="nav-item dropdown dropright">
                <span className="nav-link dropdown-toggle" data-toggle="dropdown">  Rankings  </span>
                <ul class="dropdown-menu">
                    {props.arr.map(e => (<Ranking dep={e.dep} />))}

                </ul>
            </li>
        </span>
    )
}

export default Newnav