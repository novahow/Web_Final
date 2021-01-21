import React, { useEffect, useRef, useState, useCallback } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dep_rank from './Dep_rank';
import Ranking from './Ranking'
import Newnav from './Newnav'
import Create from './Beauty';
const Nav = (props) => {
    const dep_arr = props.arr;
    const [modalShow, setModalShow] = useState(false);
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
            color: 'white',
        },
    }));

    const classes = useStyles();
    return (
        <div >
            <div className="area"></div>
            <nav className="main-menu">
                <ul>
                    <li>
                        <a href="#">
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">
                                Welcome,   {(props.name).toUpperCase()}
                            </span>
                        </a>

                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-laptop fa-2x"></i>
                            <span className='nav-text'>
                                <span className={classes.button} className='nav-link' variant="primary" onClick={() => setModalShow(true)}>
                                    Add
                                </span >
                                <Create
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    className="fuck" />
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-list fa-2x"></i>

                            {/*<div className="dropdown ">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                        Rankings
                                    </button>
                                    <div className="dropdown-menu">
                                        {props.arr.map(e => (<Ranking arr={arr} dep={e.dep} />))}
                                    </div>
                                </div>*/}
                            <Newnav arr={props.arr} />
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-folder-open fa-2x"></i>
                            <span className="nav-text">
                                Pages
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-bar-chart-o fa-2x"></i>
                            <span className="nav-text">
                                Graphs and Statistics
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-font fa-2x"></i>
                            <span className="nav-text">
                                Quotes
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-table fa-2x"></i>
                            <span className="nav-text">
                                Tables
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-map-marker fa-2x"></i>
                            <span className="nav-text">
                                Maps
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-info fa-2x"></i>
                            <span className="nav-text">
                                Documentation
                        </span>
                        </a>
                    </li>
                </ul>

                <ul className="logout">
                    <li>
                        <a href="#">
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text" onClick={() => props.switch(0)}>
                                Logout
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Nav