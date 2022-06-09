import React from 'react'

export default function deleteModal({ isOpen, setIsOpen }) {
    return (
        <div className={isOpen == true ? 'modal deleteModal is-open' : 'modal deleteModal'}>
            <div className="modal-inner">
                <div className="modal-container">
                    <div className="modal-header">
                        <h2 className="modal-title">Delete user?</h2>
                    </div>
                    <div className="modal-body">
                        <p className="delete-text">Are you sure to delete this user?</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-modal btn-confirm">
                            Delete
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
