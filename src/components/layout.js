import React, { Component } from 'react';
import styles from '../style/main.module.scss'

class Layout extends Component {
    render(){
        return(
            <div className={styles.content}>
                {this.props.header}
                {this.props.main}
                {this.props.footer}
            </div>
        )
    }
}

export default Layout;