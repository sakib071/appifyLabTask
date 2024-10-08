const getTestimonials = async () => {
    const res = await fetch("testimonial.json");
    const data = await res.json();
    return data;
};

export default getTestimonials;