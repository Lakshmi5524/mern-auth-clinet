import style from './style.module.css'
import { useState,useEffect, Fragment } from 'react'
import tic from '../../image/tic.jpeg'
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const EmailVerify=()=>{
    const [validUrl,setValidUrl]=useState(false)
    const param = useParams();


    useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:8080/api/users/${param.id}/verify/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);


    return (

        <Fragment>
            {
               validUrl?(

                     <div className={style.container}>
                      <img src={tic} alt="success_img" className={ style.success_img}/>
                           <h1>Email Verified Successfully</h1>
                          <Link to="/login">
                          <button className={style.green_btn}>Login</button>
                          </Link>
                     </div>
               ):(
                   <h1>404 Not Found </h1>
               )
            }
        </Fragment>
    )
}
export default EmailVerify;