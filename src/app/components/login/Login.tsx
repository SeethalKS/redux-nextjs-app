import React from 'react'
import { useDispatch} from 'react-redux';
import { setlog } from '../../GlobalRedux/Features/login/login-slice';
import {Login} from '../../models/login'

export default function SetLogin()
{
    const dispatch=useDispatch();
    const onsetNewLogin=()=>{
        const login:Login[]=[
            {
                id:1,
                username:'Admin',
                password:'******'
            }
        ]
        dispatch(setlog(login))
    }
    return(
        <div>
            <div style={{padding:'5px'}}></div>
            <button onClick={onsetNewLogin} className='btn btn-primary'>
                Login
            </button>
        </div>
    )
}