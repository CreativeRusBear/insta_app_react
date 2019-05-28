import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () =>{
  return(
      <div className="container profile">
          <User
              src="https://vogue.ua/media/cache/resolve/inline_990x/uploads/article-inline/064/ab3/7f7/5c1b7f7ab3064.jpeg"
              alt="Vincent van Gogh"
              name="Vincent_van_Gogh"/>
          <Palette/>
      </div>
  )
};

export default Profile;