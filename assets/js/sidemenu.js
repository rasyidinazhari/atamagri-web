const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el)); 

var sidemenu = document.getElementById("sidemenu")

        function openmenu(){
            sidemenu.style.right = "0px";
        }
        function closemenu(){
            sidemenu.style.right = "-400px";
        }

