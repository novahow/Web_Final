import React, { useEffect, useRef, useState, useCallback } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Modal from 'react-bootstrap/Modal'
import useChat from './useChat'
import TextField from '@material-ui/core/TextField';

const Create = (props) => {
    const { getUsers, addUser, addLoginUser, checkLogin } = useChat()
    const [exp, setExp] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [dep, setDep] = useState('');
    const [fb, setFb] = useState('');
    const [ig, setIg] = useState('');
    const [birth, setBirth] = useState('');
    const [photo, setPhoto] = useState('');
    const [gend, setGend] = useState(0)
    const [newGirl, setnewGirl] = useState({})
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));

    const classes = useStyles();

    const useStyles2 = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    const classes2 = useStyles2();
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Data
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <TextField label='name'
                        onChange=
                        {(e) => setName(e.target.value)}
                        fullWidth id="standard-basic"
                    />
                    <TextField label='age'
                        onChange=
                        {(e) => setAge(e.target.value)}
                        fullWidth id="standard-basic"
                    />
                    <TextField label='department'
                        onChange=
                        {(e) => setDep(e.target.value)}
                        fullWidth id="standard-basic"
                    />
                    <TextField label='fb'
                        onChange=
                        {(e) => setFb(e.target.value)}
                        fullWidth id="standard-basic"
                    />
                    <TextField label='ig'
                        onChange=
                        {(e) => setIg(e.target.value)}
                        fullWidth id="standard-basic"
                    />
                    <TextField label='birth'
                        onChange=
                        {(e) => setBirth(e.target.value)}
                        fullWidth id="standard-basic"
                    />
                    <TextField label='photo_url'
                        onChange=
                        {(e) => setPhoto(e.target.value)}
                        fullWidth id="standard-basic"
                    />
                    <TextField label='gender(0~2)'
                        onChange=
                        {(e) => setGend(e.target.value)}
                        fullWidth id="standard-basic"
                    />
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                    onClick={async () => {
                        const u = newGirl;
                        u['name'] = name;
                        u['IG'] = ig;
                        u['department'] = dep;
                        u['FB'] = fb;
                        u['birthday'] = birth;
                        u['gender'] = parseInt(gend);
                        u['photo'] = photo;
                        u['age'] = parseInt(age);
                        if (name != '' && ig != '' &&
                            dep != '' &&
                            fb != '' && birth != ''
                            && gend != ''
                            && photo != ''
                            && age != '') {
                            addUser(u);
                        }
                        await props.onHide();
                    }}
                >
                    Submit
                </Button>
                {/*<Button onClick={async () => {
                    const u = newGirl;
                    u['name'] = name;
                    u['IG'] = ig;
                    u['department'] = dep;
                    u['FB'] = fb;
                    u['birthday'] = birth;
                    u['gender'] = parseInt(gend);
                    u['photo'] = photo;
                    u['age'] = parseInt(age);
                    if (name != '' && ig != '' &&
                        dep != '' &&
                        fb != '' && birth != ''
                        && gend != ''
                        && photo != ''
                        && age != '') {
                        addUser(u);
                    }
                    await props.onHide();
                }}>Submit</Button>*/}
            </Modal.Footer>
        </Modal>
    )
}

export default Create
