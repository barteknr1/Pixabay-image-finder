import React, { Component } from 'react'
import { Triangle } from 'react-loader-spinner'

class Loader extends Component {

    render() {
        return (
            <div className="loaderOverlay">
                <div className="loaderWrapper">
                    <Triangle
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="triangle-loading"
                        visible={true}
                    />
                </div>
            </div>
        );
    }
}

export default Loader