import "./footer.css";

export default function Footer() {

    return <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <p className="footer-text text-center">
                        Made with &hearts; by <span style={{ fontWeight: 700, cursor: 'pointer' }}>Dewansh Rawat</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
}