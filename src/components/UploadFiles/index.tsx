import React from 'react'
import styles from "./Upload.module.scss"
import Button from '../common/Button/Button'

const UploadFiles = () => {
  return (
    <div className={styles.uploadMain}>
        <Button title='Add a File' btnClass="btn-primary" />
        <Button title='Add a Folder' btnClass="btn-success" />
    </div>
  )
}

export default UploadFiles