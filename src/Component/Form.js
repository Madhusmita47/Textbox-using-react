import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            txt: ""
        }

    }
    handlechange = (event) => {
        // console.log(txt)
        this.setState({
            txt: event.target.value
        })
    }
    handlecap = () => {
        let tt = this.state.txt.toUpperCase()
        this.setState({
            txt: tt

        })
    }

    render() {
        return (
            <>
                <div className='mx-4'>
                    <div className="col-md-8">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">{this.props.text}</label >

                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" value={this.state.txt} onChange={this.handlechange}></textarea>

                    </div>
                    <button type="button" class="btn btn-dark my-3 mx-3" onClick={this.handlecap} >Capitalize</button>
                    <h3>Preview</h3>
                    <p>{this.state.txt.length > 0 ? this.state.txt : "Enter text to preview! "}</p>
                </div>

            </>
        )
    }
}


