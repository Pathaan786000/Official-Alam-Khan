// ===============================
// Official Alam Khan Portfolio
// Beyond The Horizon
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  console.log("Official Alam Khan Website Loaded");

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if(target){
        target.scrollIntoView({
          behavior:"smooth"
        });
      }
    });
  });

  // Fade Animation
  const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
          if(entry.isIntersecting){
              entry.target.classList.add("show");
          }
      });
  });

  document.querySelectorAll("section").forEach(section=>{
      observer.observe(section);
  });

});
