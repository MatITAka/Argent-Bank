import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../reducers/user.connection";

function Modal() {

    const dispatch = useDispatch();
    let users = useSelector((state)=> state.usersReducer.currentUser);
    const [modal, setModal] = useState(false);
    const [userName, setUserName] = useState(users.userName);
    
    const toggleModal = () => {
        setModal(!modal);
    }

    const userNameChange = async (e) => {
        e.preventDefault();
        dispatch(setUser(userName))
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

                    {/* Add new userName with a form */}
                    <form >
                        <div className="input-wrapper">
                            <label htmlFor="username">New Username :</label>
                            <input 
                            type="text" 
                            id="username" 
                            value={userName}
                            onChange={(e) => userNameChange(e.target.value)}
                            />
                            <label htmlFor="firstName">Prénom:</label>
                            <input type="text" id="firstName" value={users.firstName} readOnly  />

                            <label htmlFor="lastName">Nom:</label>
                            <input type="text" id="lastName" value={users.lastName} readOnly   />
                        </div>
                        <button 
                            className="sign-in-button" id="connect" type="submit" 
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