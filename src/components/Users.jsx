import React from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";


export default class Users extends React.Component{
    InstaService=new InstaService();
    state={
        users: [],
        error: false,
        loading: true
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers(){
        this.InstaService.getAllUsersPhoto()
            .then(this.onUsersLoaded)
            .catch(this.onError)
    }

    onUsersLoaded=(users)=>{
        this.setState({
            users,
            error: false,
            loading: false
        })
    }

    onError=()=>{
        this.setState({
            error: true,
            loading: false
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
        const {users, error, loading}=this.state;
        if (!error && loading){
            return <Loader min/>
        }
        else if (error) {
            return <ErrorMessage/>
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