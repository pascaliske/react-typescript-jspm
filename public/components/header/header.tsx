import React from 'libraries/react'
import classnames from 'libraries/classnames'

import { Navigation } from 'components/navigation/navigation.tsx'

import './_header.scss'

export class Header extends React.Component {
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
        const classes = classnames('header')

        return (
            <div className={classes}>
                <Navigation />
            </div>
        )
    }
}
