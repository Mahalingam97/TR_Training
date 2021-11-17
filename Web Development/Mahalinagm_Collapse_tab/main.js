var faq = document.querySelectorAll(".faq-page");
var question=[...faq]; 
question.forEach((faq_ques,index) => {
    faq_ques.addEventListener("click", function () { 
        let closeindex=closefunction();
        if(closeindex===index)
          return true;
        faq_ques.classList.toggle("active") 
        var body = faq_ques.nextElementSibling; 
        body.style.display= (body.style.display === "block") ? "none": "block";   
        });
});
function closefunction()
{
    for(var itr=0;itr<faq.length;itr++)
    {   
        var body = faq[itr].nextElementSibling;
        if (body.style.display === "block") {
         {  
              body.style.display = "none";
              faq[itr].classList.remove("active");
              return itr;
        }
        } 
    }
}
