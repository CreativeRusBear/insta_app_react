import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import InstaService from '../services/instaservice';

export default class Palette extends Component{
    InstaService=new InstaService();
    state={
        photos: [],
        error: false,
        loading: true
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos(){
        this.InstaService.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError)
    }

    onPhotosLoaded=(photos)=>{
        this.setState({
            photos,
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
            const {src, alt, id}=item;
            return (
                <img src={src} alt={alt} id={id}/>
            );
        })
    }
    render() {
        const {photos, error, loading}=this.state;
        if (!error && loading){
            return <Loader/>
        }
        else if (error) {
            return <ErrorMessage/>
        }
        const items=this.renderItems(photos);
        return (
            <div className="palette">
                {items}
            </div>
        )
    }
}