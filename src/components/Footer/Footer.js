import './Footer.scss';

export const Footer = () => {
    return(
        <>
            <footer className="footer">
        <div className="footer-desc">
            <p>Developed by <a href="https://github.com/codedmachine111"><span id='diff'>coded_machine111</span></a></p>
            <p id="footer-links">
                <a href="https://github.com/codedmachine111"><i className="fab fa-instagram"></i></a>
                <a href="mailto:charlesbabbage1709@gmail.com"><i className="fas fa-envelope"></i></a>
                <a href="twitter.com/whoisakashh"><i className="fab fa-twitter"></i></a>
            </p>
        </div>
    </footer>
        </>
    )
}