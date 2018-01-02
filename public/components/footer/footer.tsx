import React from 'libraries/react'
import classnames from 'libraries/classnames'

import './_footer.scss'

export class Footer extends React.Component {
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
        return (
            <p>&copy; {(new Date()).getFullYear()} Pascal Iske</p>
        )
    }
}
