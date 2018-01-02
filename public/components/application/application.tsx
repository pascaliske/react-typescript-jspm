import React from 'libraries/react'
import classnames from 'libraries/classnames'
import DocumentTitle from 'libraries/react-document-title'
import { BrowserRouter, Switch, Route } from 'libraries/react-router-dom'

import { Overview } from 'components/overview/overview'
import { Projects } from 'components/projects/projects'

import './_application.scss'

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
                <DocumentTitle title="React + TypeScript + JSPM">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Overview} />
                            <Route path="/projects" component={Projects} />
                        </Switch>
                    </BrowserRouter>
                </DocumentTitle>
            </div>
        )
    }
}
