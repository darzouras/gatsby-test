import React from "react"
import Nav from "../components/nav"
import Window from "../components/window"
import Tunes from "../components/tunes"

import styles from "./layout.module.css"


export default ({ children }) => {

    return (
        <div className={styles.grid}>

            <Nav />

            <Window>
                <div class={styles.content}>

                    {children}

                </div>
            </Window>

            <Tunes iframeSrc="https://open.spotify.com/embed/playlist/37i9dQZF1E4xrPeIxCx9BP" />

        </div>
    )
}