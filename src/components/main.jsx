import { useState } from "react"
import { useEffect } from "react";

export default function Main() {

    const [count, setCount] = useState(1)
    const [allMemes, setAllMemes] = useState([])
    const [meme, setMeme] = useState({
        topText:"One does not simply",
        bottomText: "Walk into Mordor",
        memeImg: "/jake-meme.jpg"
    })

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[count])

    
    
    function handleChange(event) {
        const {value, name} = event.currentTarget
        console.log(value);
        
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function changeMeme() {
        setCount( prevState => prevState + 1 )
        const newMeme = allMemes[count].url
        setMeme(prevState => ({
            topText: "",
            bottomText: "",
            memeImg: newMeme
        }))
    }

    return(
        <main>  
            <div className="labels">
            <label> Top Text
                <input type="text"
                placeholder="One does not simply"
                onChange={handleChange}
                value={meme.topText}
                name="topText"
                />
            </label>
            <label> Bottom Text
                <input 
                type="text"
                onChange={handleChange}
                placeholder="Walk into Mordor"
                value={meme.bottomText}
                name="bottomText"
                />
            </label>
                </div>
        <div className="meme">
            <img src={meme.memeImg} alt="meme" />
        <div className="caption">   
            <span className="top">{meme.topText}</span>
            <span className="bottom">{meme.bottomText}</span>
        </div>
        </div>
            <button onClick={changeMeme} className="new-image">
                Get a new meme image
            </button>
        </main>
    )
}