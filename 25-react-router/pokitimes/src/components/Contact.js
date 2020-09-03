import React from 'react'

function Contact(props) {
    setTimeout(() => {
        props.history.push("/about")
    }, 2000)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus veritatis, accusantium reiciendis labore aut nulla eligendi odio, eos dignissimos impedit possimus facilis enim sit asperiores cumque quod in pariatur voluptates.</p>
        </div>
    )
}

export default Contact