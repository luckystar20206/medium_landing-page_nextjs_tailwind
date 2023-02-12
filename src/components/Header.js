import React from "react"


const Header = () => {
    return (
        <header className="header header-bg border-b border-black">
            <div className="main-container py-20 w-full">
                <div className="w-4/5 md:w-3/6">
                    <h1 className="font-serif font-medium text-8xl mb-4">Stay curious.</h1>
                    <h2 className="font-sans font-normal text-3xl mb-10">Discover stories, thinking, and expertise from writers on any topic.</h2>
                    <button className="btn-rounded-md-black">Start Reading</button>
                </div>
            </div>
        </header>
    )
}

export default Header