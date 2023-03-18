import React from "react"

function Info() {
    return (
        <div>
            <img src="./images/me.jpg" className="info-img"/>
            <h1 className="info-name">Promise Ubon</h1>
            <h3 className="info-prof">Frontend Developer</h3>
            <h4 className='info-website'><a href="../website.html">Promiseubon.website</a></h4>
            <div className='btn-div'>
                <button className="email-btn"><img src="./images/email.png"/> Email</button>
                <button className="linkedln-btn"><img src="./images/linkedln.png"/>Linkedln</button>
            </div>
        </div>
    )
}

function InfoWeb() {
    return (
        <div>
            <img src="./images/me.jpg" className="info-img"/>
            <h1 className="info-name">Promise Ubon</h1>
            <h3 className="info-prof">Frontend Developer</h3>
            <h4 className='info-website'><a href="../index.html">Promiseubon.website</a></h4>
            <div className='btn-div'>
                <button className="web-email-btn email-btn"><img src="./images/email.png"/> Email</button>
            </div>
        </div>
    )
}

export { InfoWeb, Info }