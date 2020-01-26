import React from 'react'
import classes from './modal.module.css'
import ReactModal from 'react-modal';

function DocumentNewModal(props) {
	const {isModalShowing, setIsModalShowing} = props

	return(
        <ReactModal 
           isOpen={isModalShowing}
           contentLabel="onRequestClose Example"
           onRequestClose={()=>console.log('close')}
           className={classes["Modal"]}
           overlayClassName={classes["Overlay"]}
        >
          {props.children}

          <button onClick={() => setIsModalShowing(false)}>Cancel</button>
        </ReactModal>
	)
}


export default DocumentNewModal
