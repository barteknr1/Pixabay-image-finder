import React from 'react'
import { Triangle } from 'react-loader-spinner'
import css from './Loader.module.css'

const Loader = () => {
    return (
        <div className={css.loaderOverlay}>
            <div className={css.loaderWrapper}>
                <Triangle
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="triangle-loading"
                    visible={true}
                />
            </div>
        </div>
    )
}

export default Loader