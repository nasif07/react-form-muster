import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef();
    const emailRef = useRef();

    useEffect(()=>{
        nameRef.current.focus();
    }, [])


    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value, emailRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={'rajani'} ref={nameRef} type="text" name="name"/>
                <br />
                <input ref={emailRef} type="email" name="email"/>
                <br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default RefForm;