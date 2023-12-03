import { useNavigate } from "react-router-dom";
import notify from "../../../Utils/Notify";
import { useState } from "react";
import "./UseForm.css";

const UseForm = () => {
    const[values, setValues] = useState({
        name:'',
        number: '',
        expiration:'',
        cvc:'',
        focus:''
    })

    const navigate = useNavigate();
    const[errors] = useState()

    const handleFocus = (e: { target: { name: any; }; }) => {
        setValues({
            ...values,
            focus: e.target.name
        })
    }

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const{name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        notify.success("הסרט נקנה בהצלחה")
        navigate("/home")
    }

    return {handleChange , handleFocus , handleSubmit  , values ,errors}
}

export default UseForm;