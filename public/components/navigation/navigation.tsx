import React from 'libraries/react'
import classnames from 'libraries/classnames'
import { Link } from 'libraries/react-router-dom'

import './_navigation.scss'

export class Navigation extends React.Component {
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
        const classes = classnames('navigation')

        return (
            <div className={classes}>
                <ul className="navigation__items">
                    <li className="navigation__item">
                        <Link to='/'>Overview</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to='/page/3'>Page 3</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to='/page/4'>Page 4</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to='/page/5'>Page 5</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

