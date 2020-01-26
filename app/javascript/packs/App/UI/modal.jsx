import React from 'react'
import classes from './modal.module.css'
import ReactModal from 'react-modal';

function DocumentNewModal(props) {
	const {isModalShowing, setIsModalShowing, caption} = props

	return(

        <ReactModal 
           isOpen={isModalShowing}
           contentLabel="onRequestClose Example"
           onRequestClose={()=>console.log('......... onRequestClose ........')}
           className={classes["Modal"]}
           overlayClassName={classes["Overlay"]}
        >

          <div className={classes['header']}>
            <div className={classes['caption']}><h4>{caption}</h4></div>
            <button className={classes['close_btn']+' btn btn-outline-primary btn-sm'} onClick={() => setIsModalShowing(false)}><i className="fa fa-times" aria-hidden="true"></i></button>
            
          </div>

          {props.children}

        </ReactModal>
	)
}


export default DocumentNewModal
