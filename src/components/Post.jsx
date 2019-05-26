import React, {Component} from 'react';
import User from './User';

export default class Post extends Component{
    render(){
        return(
            <div className="post">
                <User
                    src="https://vogue.ua/media/cache/resolve/inline_990x/uploads/article-inline/064/ab3/7f7/5c1b7f7ab3064.jpeg"
                    alt="Vincent van Gogh"
                    name="Vincent_van_Gogh"
                    min/>
                <img src={this.props.src} alt={this.props.alt}/>
                <div className="post__name">some account</div>
                <div className="post__descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda blanditiis consectetur consequuntur deserunt et exercitationem inventore minima nulla perferendis praesentium ratione repellat soluta suscipit tempore vel veritatis, vitae, voluptate.</div>
            </div>
        )
    }
}