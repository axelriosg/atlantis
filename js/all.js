
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        if(!faq.classList.contains("active")){
        faqs.forEach(faq => {
            faq.classList.remove('active');
        })}
        faq.classList.toggle("active");
    });
});



// Primera versión, se abre sin que se cierren los otros: 

/*
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});
 */