import React from 'react'


interface IProps {
    modalStatus: boolean,
    showModal: any
}


const Modal = (props: IProps) => {
    return (
        <div>
            {/* <div className={props.modalStatus === true ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>
                <div className="modal-content">
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={()=>props.showModal(false)}></button>
            </div> */}

            <div className={props.modalStatus === true ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Modal title</p>
                        <button className="delete" aria-label="close" onClick={() => props.showModal(false)}></button>
                    </header>
                    <section className="modal-card-body">
                        Test data
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button" onClick={() => props.showModal(false)}>Cancel</button>
                    </footer>
                </div>
            </div>


        </div>
    );
}

export default Modal;