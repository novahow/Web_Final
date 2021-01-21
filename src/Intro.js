import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useQuery, useMutation } from "@apollo/client"
import Deps from './Deps'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
const sea_in_deps = {
    'CSEE': ['資工', '電機'], 'LAW': ['法律'],
    'INDUSTRY': ['化工', '土木', '機械', '工海', '材料'],
    'ELITE': ['財金', '會計', '國企', '工管', '資管'],
    'SOCIAL': ['經濟', '政治', '社工']
}

const Intro = (props) => {


    const [exp, setExp] = useState(false)
    console.log('???', props)
    const [dp, setDp] = useState(props.value.dep)
    const back = () => {
        if (exp) {
            setExp(false);
        }
    }

    return (
        <div>
            <button className='back' onClick={back}>
                back
            </button>
            {!exp ? (<div className="txtimg">
                <div className="text">
                    {dp}
                </div>
                <button className={exp ? 'trans' : ''} onClick={() => { exp ? setExp(false) : setExp(true) }}>
                    <i class="fa fa-play fa-2x"></i>
                </button>

                {/*<img src=
                    {exp ? ("https://i.imgur.com/nZP0hWp.png")
                        : ("http://clipart-library.com/images/5cRraerKi.jpg")}
                    onClick={() => { exp ? setExp(false) : setExp(true) }} />*/}

            </div>) : (sea_in_deps[dp].map(e => (
                <Deps ele={e} exp={exp}
                    switch={props.switch} dep={props.dep} gen={props.gen} />
            )))
            }
        </div >
    );
};

export default Intro