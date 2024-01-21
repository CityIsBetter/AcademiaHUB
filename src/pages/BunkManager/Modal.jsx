import {React, useState} from 'react'
import './Modal.css'


const Modal = ({closeModal, onSubmit, defaultValue}) => {

    const [formState, setFormState] = useState(
        defaultValue || {
        course:"",
        bunkedHours: "", 
        totalHours: ""
    });

    const [errors, setErrors] = useState("");

    const validateForm = () => {
        if(formState.course && formState.bunkedHours && formState.totalHours !== 0){ 
            setErrors("");
            return true;
        }
        else{
            let errorFields = [];
            for( const[key, value] of Object.entries(formState)){
                if(!value){
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        onSubmit(formState);
        closeModal();
    };

    return (
        <div className='modal_container' 
        onClick={(e) => {
                    if(e.target.className === "modal_container")closeModal();
                }}>
            <div className='modal'>
                <form className='modal_form'>
                    <div className='form-group'>
                        <label>Course</label>
                        {defaultValue ? <input name='course' value={formState.course} onChange={handleChange} readOnly/> : <input name='course' value={formState.course} onChange={handleChange}/>}
                    </div>
                    <div className='form-group'>
                        <label>Bunked Hours</label>
                        <input name='bunkedHours' type='number' value={formState.bunkedHours} onChange={handleChange} min="0"/>
                    </div>
                    <div className='form-group'>
                        <label>Total Hours</label>
                        <input name='totalHours' type='number' value={formState.totalHours} onChange={handleChange} min="0"/>
                    </div>
                    {errors  && <div className='error'>{`Please enter value for: ${errors}`}</div>}
                    <button type='submit' className='submit_btn' onClick={handleSubmit}>Add</button>
                </form>
            </div>
        </div>
    )
}

export default Modal