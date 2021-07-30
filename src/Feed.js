import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import Post from "./Post";
import FlipMove from "react-flip-move";

function Feed() {
    const [posts] = useState([]);
    const [input, setInput] = useState("");

    const sendPost = (e) => {
        e.preventDefault();

        setInput("");
    };

    return (
        <div>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />

                    <form>
                        <input
                            placeholder="Escreva um publicaçâo"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                        />
                        <button onClick={sendPost} type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <Post
                name="Airton Sena"
                description="Front end Developer JR"
                message="Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry."
                avatar="/images/avatar.jpg"
            />

            <Post
                name="Airton Sena"
                description="Front end Developer JR"
                message="Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry."
                photoUrl="/images/post.jpeg"
                avatar="/images/avatar.jpg"
            />

            <FlipMove>
                {posts.map(
                    ({ id, data: { name, description, message, photoUrl, avatar } }) => (
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                            avatar={avatar}
                        />
                    ),
                )}
            </FlipMove>
        </div>
    );
}

export default Feed;
