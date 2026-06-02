function Footer() {
    return (
        <footer>
            <img src="Logo.svg" alt="Little Lemon Logo" className="footer-logo" />

            <nav aria-label="Sitemap">
                <h4>Sitemap</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>

            <address>
                <h4>Contact Us</h4>
                <ul>
                    <li>123 Main Street, Chicago, IL 60601</li>
                    <li>Phone: (123) 456-7890</li>
                    <li>Email: info@littlelemon.com</li>
                </ul>
            </address>

            <nav aria-label="Social Media Links">
                <h4>Social Media Links</h4>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;