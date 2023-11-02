import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../reducers/user.connection";

function Modal() {

    const dispatch = useDispatch();
    let users = useSelector((state)=> state.usersReducer.currentUser);
    const [modal, setModal] = useState(false);
    const [userNameValue, setUserNameValue] = useState(users.userName);
    
    const toggleModal = () => {
        setModal(!modal);
    }

    const updateUser = () => {
        dispatch(setUser( {userName : userNameValue}));
        toggleModal();
    }



    return (
        <>
        <button className="btn-edit" onClick={toggleModal}>Edit User Name</button>
        {modal && (
            <div className="modal">
                <div className="modal__background"></div>
                <div className="modal__background__content">
                <button className="close-modal" onClick={toggleModal}> Close </button>

                    <form >
                        <div className="input-wrapper">
                            <label htmlFor="username">Username :</label>
                            <input 
                            type="text" 
                            id="username" 
                            defaultValue={users.userName}
                            onChange={(e) => setUserNameValue(e.target.value)}
                            />
                            <label htmlFor="firstName">Prénom:</label>
                            <input type="text" id="firstName" value={users.firstName} readOnly  />

                            <label htmlFor="lastName">Nom:</label>
                            <input type="text" id="lastName" value={users.lastName} readOnly   />
                        </div>
                        <button 
                            className="sign-in-button" id="connect" type="button" onClick={updateUser}
                        >
                            <span>Submit</span>
                        </button>
                    </form>
                </div>
            </div>
        )}
        </>
    );
}

export default Modal;