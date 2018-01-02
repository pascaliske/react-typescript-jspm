import React from 'libraries/react'
import classnames from 'libraries/classnames'
import { autobind } from 'libraries/core-decorators'
import { Link } from 'libraries/react-router-dom'

import { Header } from 'components/header/header'
import { Footer } from 'components/footer/footer'

import './_projects.scss'

export class Projects extends React.Component {
    /* --- constants --- */

    /* --- properties --- */

    /* --- constructor --- */

    /* --- protected --- */

    @autobind
    protected onClick(event): void {
        this.props.history.push('/')
    }

    /* --- public --- */

    /**
     * Renders the component.
     *
     * @returns {any}
     */
    public render(): any {
        const classes = classnames('overview')

        return (
            <div className={classes}>
                <Header />
                <h1>Projects</h1>
                <button onClick={this.onClick}>Home!</button>
                <Link to='/'>Home</Link>
                <Footer />
            </div>
        )
    }
}
