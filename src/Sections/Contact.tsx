import "./contact.css";

export const ContactSection = () => {

    return <div className="contact-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h3 className="contact-title text-center">
                        Contact Me
                    </h3>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <p className="text-center contact-content">
                        Let's chat! I'm always interested in connecting with fellow developers and tackling new challenges. Feel free to reach out via any of your preferred mode of communication
                    </p>
                </div>
            </div>
        </div>
    </div>
}