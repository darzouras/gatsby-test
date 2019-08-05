import React from "react"
import styles from "./tunes.module.css"

export default (props) => (
    <div className={styles.tunes}>
        <iframe src={props.iframeSrc} frameBorder="0" allowtransparency="true" allow="encrypted-media" title="spotify-playlist"></iframe>
    </div>
)