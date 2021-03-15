import preloader from '../../../assets/images/preloader.svg';


const Preloader = () => {
    return (
        <img src={preloader} style={{position:'fixed', top: 50 + '%', left:50 + '%',}}/>
    )
}

export default Preloader;

