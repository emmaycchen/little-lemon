function Main() {
    return (
        <main>
            {/*Hero Section */}
            <section className="hero">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button>Reserve a Table</button>
                </div>
                <img src="/restaurantfood.jpg" alt="Restaurant food" />
            </section>

            {/* Specials Section */}
            <section className="specials">
                <div className="specials-header">
                    <h2>This Week's Specials!</h2>
                    <button>Online Menu</button>
                </div>
                <div className="specials-cards">
                    <article className="card">
                        <img src="/greek_salad.jpg" alt="Greek Salad" />
                        <div className="card-title-row">
                            <h3>Greek Salad</h3>
                            <span className="price">$12.99</span>
                        </div>
                        <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <a href="#">Order a delivery <img src="/Icon-bicycle.png" alt="Bicycle Icon" className="delivery-icon" /></a>
                    </article>
                    <article className="card">
                        <img src="/bruchetta.jpg" alt="Bruschetta" />
                        <div className="card-title-row">
                            <h3>Bruschetta</h3>
                            <span className="price">$5.99</span>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <a href="#">Order a delivery <img src="/Icon-bicycle.png" alt="Bicycle Icon" className="delivery-icon" /></a>
                    </article>
                    <article className="card">
                        <img src="/lemon_dessert.jpg" alt="Lemon Dessert" />
                        <div className="card-title-row">
                            <h3>Lemon Dessert</h3>
                            <span className="price">$5.00</span>
                        </div>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <a href="#">Order a delivery <img src="/Icon-bicycle.png" alt="Bicycle Icon" className="delivery-icon" /></a>
                    </article>
                </div>
            </section>

             {/* Testimonials Section */}
             <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonials-cards">
                    <article className="testimonial-card">
                        <img src="/persona1.png" alt="Customer 1" />
                        <h3>John D.</h3>
                        <div className="stars">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src="/star.png" alt="Star Icon" className="star-icon" />
                            ))}
                        </div>
                        <p>"The food was amazing and the service was excellent! Highly recommend Little Lemon."</p>
                    </article>
                    <article className="testimonial-card">
                        <img src="/persona2.png" alt="Customer 2" />
                        <h3>Sarah K.</h3>
                        <div className="stars">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src="/star.png" alt="Star Icon" className="star-icon" />
                            ))}
                        </div>
                        <p>"A hidden gem in the city! The flavors were incredible and the atmosphere was cozy."</p>
                    </article>
                    <article className="testimonial-card">
                        <img src="/persona3.png" alt="Customer 3" />
                        <h3>Wokie S.</h3>
                        <div className="stars">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src="/star.png" alt="Star Icon" className="star-icon" />
                            ))}
                        </div>
                        <p>"I had the best dining experience at Little Lemon. The staff was friendly and the food was delicious."</p>
                    </article>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <div>
                <h2>About Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago. We are passionate about serving traditional recipes with a modern twist, using only the freshest ingredients. Our menu features a variety of dishes inspired by the rich culinary heritage of the Mediterranean region, including Greek salads, bruschetta, and our signature lemon dessert. We pride ourselves on providing an exceptional dining experience, with a cozy atmosphere and friendly service. Whether you're looking for a quick lunch or a leisurely dinner, Little Lemon is the perfect destination for food lovers seeking authentic flavors and a warm ambiance.
                </p>
                </div>
                <div className="about-images">
                    <img src="/Mario_Adrian_A.jpg" alt="Chef preparing food" />
                    <img src="/chef_B.jpg" alt="Restaurant team" />
                </div>
            </section>
        </main>
    );
}

export default Main;