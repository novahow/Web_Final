import React, { useEffect, useState, useRef } from 'react'
import { Button, Input, message, Tag } from 'antd'
// import { Router, Route, hashHistory, IndexRoute, Switch } from 'react-router';
import { useHistory, useLocation, NavLink, useParams, Switch, Route } from "react-router-dom";
import { alert, prompt } from '@ungap/global-this';
import useChat from './useChat'
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons';


const Form = (props) => {
    const { getUsers, addUser, addLoginUser, checkLogin } = useChat()
    const setMaster1 = props.change;
    // const windowmaster = props.master;
    //const bodyRef = props.ref;
    const bodyRef = useRef(null)
    const containerref = props.conref;
    const setPressed = props.switch;
    const mst = props.page;
    const history = useHistory();
    const loc = useLocation();
    const [password, setPassword] = useState('');
    const [windowmaster, setMaster] = useState('');
    const [upmaster, setupmaster] = useState('')
    const [uppwd, setuppwd] = useState('')
    const [loginState, setLoginState] = useState("???")
    const [LoginUserData, setLoginUserData] = useState({})
    const [signup, setSignup] = useState('???')
    const [newLoginUserData, setNewLoginUserData] = useState({})
    useEffect(() => {
        bodyRef.current.focus();
        console.log("start")
    }, [mst])

    /*function handle() {
        history.push('/map');
    }*/

    function checkuser([username, passwd]) {

    }

    return (
        <div className="container" id="container" ref={containerref}>/
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account </h1>
                    <div className="social-container">
                        <Facebook className="icon" color="primary" />
                        <Instagram className="icon" style={{ fill: "pink" }} />
                        <LinkedIn className="icon" color="primary" />
                    </div>
                    <span>or use your email for registration</span>
                    <Input type="text" placeholder="Username"
                        value={upmaster}
                        onChange={e => setupmaster(e.target.value)} />
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password"
                        value={uppwd}
                        onChange={(e) => setuppwd(e.target.value)}
                    />
                    <button className='cbutton' onClick={async () => {
                        if (upmaster != "" && uppwd != '') {
                            const u = newLoginUserData;
                            u['name'] = upmaster;
                            u['passwd'] = uppwd;
                            setNewLoginUserData(u);

                            const { state, data } = await addLoginUser(newLoginUserData);
                            setSignup(state);
                            (state == 'SUCCESS') ? message.success(state)
                                : message.error(state);
                            console.log(state, data);
                        }
                    }}>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <Facebook className="icon" color="primary" />
                        <Instagram className="icon" style={{ fill: "pink" }} />
                        <LinkedIn className="icon" color="primary" />
                    </div>
                    <span>or use your account</span>
                    <Input
                            /*type="email"*/ placeholder="Username" ref={bodyRef}
                        value={windowmaster}
                        onChange={(e) => setMaster(e.target.value)} />
                    <Input type="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    {console.log(windowmaster)}
                    <a href="#" /*onClick={() => { alert("乾我p4?") }*/>Forgot your password?</a>
                    <button className='cbutton' onClick={async () => {
                        console.log('>>>');
                        if (windowmaster != "" && password != '') {
                            const u = LoginUserData;
                            u['name'] = windowmaster;
                            u['passwd'] = password;
                            setLoginUserData(u);

                            const { state, data } = await checkLogin(LoginUserData);
                            console.log(data)
                            setLoginState(state);
                            if (state == 'SUCCESS') {
                                message.success(state)
                                setMaster1(windowmaster);
                                setPressed(1);
                            }
                            else {
                                message.error(state);
                            }
                        }
                    }}>Sign In
                        {/*<NavLink
                            
                            to={"/map/" + windowmaster}>Sign In</NavLink>*/}
                    </button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome To NTU Beauty!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="cbutton" id="ghost" onClick={() => containerref.current.classList.remove("right-panel-active")}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="cbutton" id="ghost" onClick={() => containerref.current.classList.add("right-panel-active")}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Form