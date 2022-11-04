import "./index.css";

export default function Footer(){

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <p>Made with &hearts; by <span onClick={scrollToTop} className="footer-name">Dewansh Rawat</span> &copy; 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
}