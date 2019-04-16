import React from 'react'

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);
    console.log(props);
    return(
        <div> className="conatiner>
        <h4 className="center">Contact</h4>
        <p>blah blah blah erihguv ehuerg besgjfehrgvfh gk gher h jkfg ksefg g bheefg grvg jhm</p>
        </div>
        
        )
    }

export default Contact;