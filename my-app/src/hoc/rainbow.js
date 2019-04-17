import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'green', 'blue', 'violet', 'orange', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 5)];
    const className = randomColour + '-text'

    return (props) => {
        return (
            <div className={className}>
            <WrappedComponent {...props} />
            </div>
        )
    }

}

<<<<<<< HEAD
export default Rainbow;
=======
export default Rainbow;

>>>>>>> version28.0
