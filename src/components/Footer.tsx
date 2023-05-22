import "./Footer.css"
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-heading">Company</h3>
                    <ul className="footer-list">
                        <li className="footer-item"><a href="#">About Us</a></li>
                        <li className="footer-item"><a href="#">Contact Us</a></li>
                        <li className="footer-item"><a href="#">Terms of Service</a></li>
                        <li className="footer-item"><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Social</h3>
                    <ul className="footer-list">
                        <li className="footer-item"><a href="#">Facebook</a></li>
                        <li className="footer-item"><a href="#">Instagram</a></li>
                        <li className="footer-item"><a href="#">Twitter</a></li>
                        <li className="footer-item"><a href="#">Pinterest</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-text">&copy; 2023 The Store. All rights reserved.</p>
            </div>
        </footer>

    )
}