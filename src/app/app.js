/**
 * Copyright Webfleet Solutions
 *
 */
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { UserListing } from '../containers/user-listing'

export default function App () {
    return (
        <Provider store={store}>
            <UserListing />
        </Provider>
    )
}

