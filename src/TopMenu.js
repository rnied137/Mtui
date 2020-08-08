import React, { Component } from 'react'

import { Menu } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default class TopMenu extends Component {
    render() {
        return (
            <div>
                <Menu>
                    <ShoppingCartIcon/>
                </Menu>
            </div>
        )
    }
}
