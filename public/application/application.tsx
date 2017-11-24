import React from 'libraries/react'
import classnames from 'libraries/classnames'

import './application.scss'

export class Application extends React.Component {
    /* --- constants --- */

    /* --- properties --- */

    /* --- constructor --- */

    /* --- protected --- */

    /* --- public --- */

    /**
     * Renders the component.
     *
     * @returns {any}
     */
    public render(): any {
        const classes = classnames('application', {
            loading: true
        })

        return (
            <div className={classes}>
                <h1>Hello World!</h1>
            </div>
        )
    }
}
