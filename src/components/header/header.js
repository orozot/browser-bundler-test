import React, {Component} from 'react';
import styles from './header.module.scss'

class Header extends Component {
    handleClick = (type) => {
        console.log('click' + type)
    };

    render() {
        return (
            <header className={styles.contentHeader}>
                <div className={styles.logo}>
                    Hub
                </div>
                <div className={styles.navBar}>
                    <li className={styles.navItem} onClick={this.handleClick.bind(this,'home')}>Home</li>
                    <li className={styles.navItem} onClick={this.handleClick.bind(this,'first')}>first</li>
                    <li className={styles.navItem} onClick={this.handleClick.bind(this,'second')}>second</li>
                    <li className={styles.navItem} onClick={this.handleClick.bind(this,'third')}>third</li>
                </div>
            </header>
        )
    }
}

export default Header;