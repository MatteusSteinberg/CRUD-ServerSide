import React from 'react'

export default function CreateModal({ isOpen, setIsOpen }) {

    return (
        <div className={isOpen == true ? 'modal createModal is-open' : 'modal createModal'}>
            <div className="modal-inner">
                <div className="modal-container">
                    <div className="modal-header">
                        <h2 className="modal-title">Create User</h2>
                    </div>
                    <div className="modal-body">
                        <p className="create-text">Fill out the fields below to create a user</p>
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
                        <button className="btn btn-modal btn-create">
                            Create
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
