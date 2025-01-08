const prevTestimonialButton = document.getElementById('prevTestimonialButton');
                const nextTestimonialButton = document.getElementById('nextTestimonialButton');
                const testimonialCarousel = document.getElementById('testimonialCarousel');

                prevTestimonialButton.addEventListener('click', () => {
                    testimonialCarousel.scrollBy({
                        left: -testimonialCarousel.clientWidth,
                        behavior: 'smooth'
                    });
                });

                nextTestimonialButton.addEventListener('click', () => {
                    testimonialCarousel.scrollBy({
                        left: testimonialCarousel.clientWidth,
                        behavior: 'smooth'
                    });
                });