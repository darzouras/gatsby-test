import React from "react"
import Nav from "../components/nav"
import Window from "../components/window"
import Tunes from "../components/tunes"

import styles from "./layout.module.css"


export default ({ children }) => (
    <div className={styles.grid}>

        <Nav />

        <Window>
            <div class={styles.content}>

                {children}

            </div>
        </Window>

        <Tunes />

    </div>
)