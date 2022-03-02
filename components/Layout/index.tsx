
import React, { ReactChildren, ReactChild } from 'react'
import styles from './Layout.module.css'
import Header from '../../components/Header'


interface LayoutProps {
	children: ReactChild | ReactChildren
}


const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.layoutWrapper}>
			<Header />
			<div>{children}</div>
			
		</div>
	)
}

export default Layout
