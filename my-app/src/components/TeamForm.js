import React , {useState} from "react"
import axios from 'axios'
// import * as Yup from 'yup';

const TeamForm = ()=>{
    const [pw , setPw] = useState("");

    const formSubmit = e =>{
        e.preventDefault();
        axios.post('/', setPw(e.target.value))
    }

    const pwChange = event => {
        setPw(event.target.value)
        console.log(pw)
    }

    // const formSchema = Yup.object().shape({
    //     password: Yup
    //     .string()
    //     .min(6, "Passwords must be at least 6 characters long.")
    //     .required("Password is Required")
    // })

    // useEffect (()=> {
    //     const validationSchema = Yup.object({
    //         password: Yup.string().required('Password is required'),
    //         passwordConfirmation: Yup.string()
    //             .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //         });

    // }, [])

      
   
    return(
       
            <form onSubmit={formSubmit} >
                <label>
                    Enter your first name...no pressure:<input id="password" type="password" value={pw} />
                </label>
                <label>
                    <input id="submit" type="submit" value="Submit" onChange={pwChange} />
                </label>
            </form>
         
    )
}

export default TeamForm; 