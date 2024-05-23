import ReactLoading from "react-loading";

export const Loader = () => {

    const height = window.innerHeight;
    const width = window.innerWidth;

    return <div style={{
        background: '#15171c',
        height: height,
        width: width,
        alignContent: 'center'
    }}>
        <center>
            <ReactLoading type='bars' color="#fff" height={54} />
        </center>
    </div>
}