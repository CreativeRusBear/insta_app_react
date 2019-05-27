import React from 'react';
import User from './User';
import InstaService from '../services/instaservice';


export default class Users extends React.Component{
    InstaService=new InstaService();
    state={
        users: [],
        error: false
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers(){
        this.InstaService.getAllPosts()
            .then(this.onUsersLoaded)
            .catch(this.onError)
    }

    onUsersLoaded=(users)=>{
        this.setState({
            users,
            error: false
        })
    }

    onError=()=>{
        this.setState({
            error: true
        })
    }

    renderItems(arr){
        return arr.map(item=>{
            const {name, altname, photo, id}=item;

            return (
                <User
                src={photo}
                alt={altname}
                name={name}
                key={id}
                min/>);
        });
    }


    render() {
        const {users, error}=this.state;
        if (error){
            console.error('User not loaded');
        }
        const items=this.renderItems(users);
        return (
            <div className="right">
                <User
                    src="https://vogue.ua/media/cache/resolve/inline_990x/uploads/article-inline/064/ab3/7f7/5c1b7f7ab3064.jpeg"
                    alt="Vincent van Gogh"
                    name="Vincent_van_Gogh"/>
                <div className="users__block">
                    {items}
                </div>
            </div>
        )
    }
};