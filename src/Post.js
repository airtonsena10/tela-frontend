import { Avatar } from '@material-ui/core'
import React,{ forwardRef } from 'react'
import InputOption from './InputOption'
import "./Post.css"
import ThumbsUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined"
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined"

const Post = forwardRef(({ name, description, message, photoUrl, avatar }, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={avatar} />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
                <img src={photoUrl} alt="" />
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbsUpAltOutlinedIcon}
                    title="Curtir" color="grey" />
                <InputOption Icon={ChatOutlinedIcon}
                    title="Comentar" color="grey" />
                <InputOption Icon={ShareOutlinedIcon}
                    title="Compartilhar" color="grey" />

            </div>
        </div>
    )
})

export default Post
