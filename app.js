function initSlider() {
  const slides = document.querySelectorAll(".slide");
  const sliderWrapper = document.querySelector(".slider-wrapper");

  let activeIndex = 0;

  function renderSlides() {
    slides.forEach((slide, index) => {
      if (activeIndex === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }
  renderSlides();
  function showNext() {
    if (activeIndex === slides.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    renderSlides();
  }

  let sliderIntervalId = null;

  function startAutoSliderFn() {
    sliderIntervalId = setInterval(showNext, 3000);
  }

  startAutoSliderFn();
}

initSlider();





let commentsSlides = document.querySelectorAll(".comments-slide");
let commentsButton1 = document.getElementById("comments-button-1");
let commentsButton2 = document.getElementById("comments-button-2");
let commentsButton3 = document.getElementById("comments-button-3");

commentsSlides[0].classList.add("active");

commentsButton1.addEventListener("click", function () {
  commentsSlides[0].classList.add("active");
  commentsSlides[1].classList.remove("active");
  commentsSlides[2].classList.remove("active");
});

commentsButton2.addEventListener("click", function () {
  commentsSlides[0].classList.remove("active");
  commentsSlides[1].classList.add("active");
  commentsSlides[2].classList.remove("active");
});

commentsButton3.addEventListener("click", function () {
  commentsSlides[0].classList.remove("active");
  commentsSlides[1].classList.remove("active");
  commentsSlides[2].classList.add("active");
});



document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.querySelector(".send");
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");

  sendButton.addEventListener("click", async function () {
    console.log("Button clicked");

    const formData = new FormData();
    formData.append("name", "akaki tsereteli");
    formData.append("email", "ATsereteli@example.com");
    formData.append("website", "www.example.com");
    formData.append("message", "this is a test message.");

    const requestBody = {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const mockApiResponse = {
        status: 1,
        desc: "Message has been sent successfully",
      };

      const response = new Response(JSON.stringify(mockApiResponse));
      const data = await response.json();

      if (data.status === 1) {
        modalContent.textContent =
          "Thank you for getting in touch.We appreciate you contacting us.";
        modal.style.display = "block";
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });

  modal.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
