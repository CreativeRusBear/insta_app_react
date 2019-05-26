import React, {Component} from 'react';
import Post from './Post'

export default class Posts extends Component{
    render() {
        return (
            <div className="left">
                <Post
                    alt="art"
                    src="https://prod-uploads-pub.useast1.kadenze.com/prod/usr/uploads/course/93/logo/cinema_otis_the_modern_genius_hero_image.png"/>
            </div>
        )
    }
}