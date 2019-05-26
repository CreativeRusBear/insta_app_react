import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User
                src="https://vogue.ua/media/cache/resolve/inline_990x/uploads/article-inline/064/ab3/7f7/5c1b7f7ab3064.jpeg"
                alt="Vincent van Gogh"
                name="Vincent_van_Gogh"/>
            <div className="users__block">
                <User
                    src="https://vogue.ua/media/cache/resolve/inline_990x/uploads/article-inline/064/ab3/7f7/5c1b7f7ab3064.jpeg"
                    alt="Vincent van Gogh"
                    name="Vincent_van_Gogh"
                    min/>
                <User
                    src="https://vogue.ua/media/cache/resolve/inline_990x/uploads/article-inline/064/ab3/7f7/5c1b7f7ab3064.jpeg"
                    alt="Vincent van Gogh"
                    name="Vincent_van_Gogh"
                    min/>
                <User
                    src="https://vogue.ua/media/cache/resolve/inline_990x/uploads/article-inline/064/ab3/7f7/5c1b7f7ab3064.jpeg"
                    alt="Vincent van Gogh"
                    name="Vincent_van_Gogh"
                    min/>
                <User
                    src="https://vogue.ua/media/cache/resolve/inline_990x/uploads/article-inline/064/ab3/7f7/5c1b7f7ab3064.jpeg"
                    alt="Vincent van Gogh"
                    name="Vincent_van_Gogh"
                    min/>
            </div>
        </div>
    )
};