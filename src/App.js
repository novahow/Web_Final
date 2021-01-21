
import React, { useEffect, useRef, useState, useCallback } from 'react'
// import useChat from './useChat'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Button, Input, message, Tag } from 'antd'
import Map from './Map'
import Form from './form'
import useChat from './useChat'
import PhotoLibrary from './photoLibrary/PhotoLibrary'
import { BrowserRouter } from 'react-router-dom'
import { Router, Route, hashHistory, IndexRoute, Switch } from 'react-router';

function App() {
    // const { status, opened, messages, sendMessage, clearMessages } = useChat()

    const [windowmaster, setMaster1] = useState('')
    const [mst, setPressed] = useState(0)
    //const bodyRef = useRef(null)
    const containerref = useRef(null)
    const [dep, setDep] = useState('')
    const [gend, setGend] = useState(0);
    /*useEffect(() => {
        bodyRef.current.focus();
    }, mst)*/
    { console.log('幹', mst) };
    /*return (
        {/*<Switch>
            <Route path="/">
                <Form change={setMaster}
                    master={windowmaster} conref={containerref} />
            </Route>
            <Route path='/map/:master' component={Map}>
                <Map name={windowmaster} />
            </Route>
            <Route path='/gallery'>
                <PhotoLibrary department={dep} />
            </Route>

            {/*<Route
                path="/about"
                render={props => <About {...props} extra={someVariable} />}
            />
            {/* 不要這麼做 }
            <Route
                path="/contact"
                component={props => <Contact {...props} extra={someVariable} />}
            />}
        </Switch>
    )*/
    //useEffect = (() => {
    if (mst == 0) {
        return (
            <Form change={setMaster1} conref={containerref}
                switch={setPressed} page={mst} />
        )
    }
    else if (mst == 1) {
        return (<Map name={windowmaster} switch
            ={setPressed} dep={setDep} page={mst}
            gen={setGend} />)
    }
    else {
        return (
            <PhotoLibrary department={dep}
                switch={setPressed} gen={gend} />
        )
    }
    //}, mst)

}
export default App

/*if (mst == 0) {
        return (
            <Form change={setMaster}
                    master={windowmaster} conref={containerref}
                    switch={changeMst} page={mst} />
        )
    }
    else if (mst == 1) {
        return (<Map name={windowmaster} switch
                    ={setPressed} dep={setDep} />)
    }
    else {
        return (
            <PhotoLibrary department={dep}
                    switch={setPressed} />
        )
    }
    return (

        (mst == 0) ? (
            <Form change={setMaster} ref={bodyRef}
                    master={windowmaster} conref={containerref}
                    switch={changeMst} page={mst} />
        ) : (

        (mst == 1) ? (<Map name={windowmaster} switch={setPressed} dep={setDep} />)
            : (
            <PhotoLibrary department={dep} switch={setPressed} />
            )
    )
    )*/