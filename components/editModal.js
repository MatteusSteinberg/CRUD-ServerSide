import React from 'react'

export default function EditModal({ isOpen, setIsOpen }) {

    return (
        <div className={isOpen == true ? 'modal editModal is-open' : 'modal editModal'}>
            <div className="modal-inner">
                <div className="modal-container">
                    <div className="modal-header">
                        <h2 className="modal-title">Edit User</h2>
                    </div>
                    <div className="modal-body">
                        <p className="create-text">Change the values of the selected user</p>
                        <div className="form-wrapper">
                            <form id="createUser">
                                <div className="form-first-name">
                                    <label htmlFor="first-name">First name</label>
                                    <input type="text" name="first-name" className="input-field" />
                                </div>
                                <div className="form-last-name">
                                    <label htmlFor="last-name">Last name</label>
                                    <input type="text" name="last-name" className="input-field" />
                                </div>
                                <div className="form-username">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name="username" className="input-field" />
                                </div>
                                <div className="form-role">
                                    <label htmlFor="role">Role</label>
                                    <select name="role" className="input-field">
                                        <option defaultValue>Select role...</option>
                                        <option>User</option>
                                        <option>Admin</option>
                                        <option>Editor</option>
                                        <option>Super user</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-modal btn-confirm">
                            Confirm
                        </button>
                        <button className="btn btn-modal btn-cancel" onClick={(e) => setIsOpen(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}