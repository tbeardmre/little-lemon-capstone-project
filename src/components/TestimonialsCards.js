import React from "react";

const TestimonialsCards = () => {
    const Testimonial = [
        {
            profileImage: "images/greek salad.jpg",
            name: "Greek Salad",
            review: "$12.99",
        },
        {
            profileImage: "images/greek salad.jpg",
            name: "Greek Salad",
            review: "$12.99",
        },
        {
            profileImage: "images/greek salad.jpg",
            name: "Greek Salad",
            review: "$12.99",
        }
    ]

    const TestimonialItems = Testimonial.map(item => {
        const profileImage = item.profileImage;
        const name = item.name;
        const review = item.review;

        return (
            <div>
                <div className="testimonial-card-container">
                    <div className="testimonial-info">
                        <img src={profileImage} alt="Customer Profile Picture" />
                        <div>
                            <h4>{name}</h4>
                            <div className="ratingStartContainer">
                                <img src="Icons/star-icon.png"  className="ratingStar"></img>
                                <img src="Icons/star-icon.png"  className="ratingStar"></img>
                                <img src="Icons/star-icon.png"  className="ratingStar"></img>
                                <img src="Icons/star-icon.png"  className="ratingStar"></img>
                                <img src="Icons/star-icon.png"  className="ratingStar"></img>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    })


  return (
    <div>
        <div className="special-card">
            {specialMenuItems}
        </div>
    </div>
  )
}

export default SpecialsCards;