import React, {Component} from 'react';
import img from '../loader.svg';




class Loader extends Component{
    render() {
        return(
            <>
                <div className="loader" >
                    <img src={img}  alt="loading" className={this.props.min ? "min_load" : "load"}/>
                </div>
            </>
        )
    }
}

export default Loader;