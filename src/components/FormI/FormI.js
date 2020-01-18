import React, {Component} from 'react';
import classes from '../FormM/FormM.module.css';
class FormI extends Component{
    constructor(props){
        super(props);
      this.state={
            val: this.props.kkk +1,
        }
    }
    firsthandler = (e) =>{
        this.setState({val: e.target.value})
        console.log(this.state);
    }
    render(){
        return(
            // <form >
            <div className={classes.Forms}>
                <input placeholder="X-coordinate" type="number" min="-100" max="100" required/>
                <input placeholder="Z-coordinate" type="number" min="-100" max="100"  required/>
                <input placeholder="Velocity (in m/s)" type="number" min="0" required/>               
            </div>
            // </form>
        )
    }
}
export default FormI;