(function(){
    // Functions

    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numAnswer = 0;
      let textAnswer = 0;
      let idkAnswer =0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        
        if(userAnswer === currentQuestion.correctNumAnswer){
          numAnswer++;
        }
        

        if(userAnswer === currentQuestion.correctTextAnswer){
          textAnswer++;
        }

        if(userAnswer === currentQuestion.correctIdkAnswer){
          idkAnswer++;
        }




      });
  
      // show number of "I Do not know" answers out of total
      resultsContainer.innerHTML = `Numerical Answers: ${numAnswer} out of ${myQuestions.length}`;
      

      resultsText.innerHTML = `Text Answers: ${textAnswer} out of ${myQuestions.length}`;

      resultsIdk.innerHTML = `I do not know Answers: ${idkAnswer} out of ${myQuestions.length}`;

    }

  


  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      //being in slide 0, do not show "previous slide"
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      //2nd if...else statement
      //last slide
      //slides.length-1 is the slide 15, because you press 14 times the next button, not 15
      if(currentSlide === slides.length-1){
        //erase "next button"
        nextButton.style.display = 'none';
        //show "submit button"
        //you want the submit button to show all results:
        submitButton.style.display = 'inline-block';
        
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
        
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    //IDK counter
    const resultsContainer = document.getElementById('results');
    // this is my addition!!
    const resultsText = document.getElementById('resultsText');
    const resultsIdk = document.getElementById('resultsIdk');
    const submitButton = document.getElementById('submit');
    
    const myQuestions = [
      {
        question: "1. Who invented JavaScript?",
        answers: {
          a: "Numerical",
          b: "Text",
          c: "I don't know",
        },
        correctNumAnswer: "a",
        correctTextAnswer: "b",
        correctIdkAnswer: "c"
      },
      {
        question: "2. Which one of these is a JavaScript package manager?",
        answers: {
          a: "Numerical",
          b: "Text",
          c: "I don't know",
        },
        correctNumAnswer: "a",
        correctTextAnswer: "b",
        correctIdkAnswer: "c"
      },
      {
        question: "3. Which tool can you use to ensure code quality?",
        answers: {
          a: "Numerical",
          b: "Text",
          c: "I don't know",
        },
        correctNumAnswer: "a",
        correctTextAnswer: "b",
        correctIdkAnswer: "c"
      },
      {
        question: "4. For how long have you been studying JavaScript?",
        answers: {
          a: "Numerical",
          b: "Text",
          c: "I don't know",
        },
        correctNumAnswer: "a",
        correctTextAnswer: "b",
        correctIdkAnswer: "c"
      },
      {
        question: "5. Which tool can you use to ensure code quality?",
        answers: {
          a: "Numerical",
          b: "Text",
          c: "I don't know",
        },
        correctNumAnswer: "a",
        correctTextAnswer: "b",
        correctIdkAnswer: "c"
      },
      {
        question: "6. Which tool can you use to ensure code quality?",
        answers: {
          a: "Numerical",
          b: "Text",
          c: "I don't know",
        },
        correctNumAnswer: "a",
        correctTextAnswer: "b",
        correctIdkAnswer: "c"
      },
      {
        question: "7. Which tool can you use to ensure code quality?",
        answers: {
          a: "Numerical",
          b: "Text",
          c: "I don't know",
        },
        correctNumAnswer: "a",
        correctTextAnswer: "b",
        correctIdkAnswer: "c"
      },
      {
        question: "8. Which tool can you use to ensure code quality?",
        answers: {
          a: "Numerical",
          b: "Text",
          c: "I don't know",
        },
        correctNumAnswer: "a",
        correctTextAnswer: "b",
        correctIdkAnswer: "c"
      },
      {
        question: "9. Which tool can you use to ensure code quality?",
        answers: {
          a: "Numerical",
          b: "Text",
          c: "I don't know",
        },
        correctNumAnswer: "a",
        correctTextAnswer: "b",
        correctIdkAnswer: "c"
      },
      {
        question: "10. Which tool can you use to ensure code quality?",
        answers: {
          a: "Numerical",
          b: "Text",
          c: "I don't know",
        },
        correctNumAnswer: "a",
        correctTextAnswer: "b",
        correctIdkAnswer: "c"
      },
      {
        question: "11. Which tool can you use to ensure code quality?",
        answers: {
          a: "Numerical",
          b: "Text",
          c: "I don't know",
        },
        correctNumAnswer: "a",
        correctTextAnswer: "b",
        correctIdkAnswer: "c"
      },
      {
        question: "12. Which tool can you use to ensure code quality?",
        answers: {
          a: "Numerical",
          b: "Text",
          c: "I don't know",
        },
        correctNumAnswer: "a",
        correctTextAnswer: "b",
        correctIdkAnswer: "c"
      },
      {
        question: "13. Which tool can you use to ensure code quality?",
        answers: {
          a: "Numerical",
          b: "Text",
          c: "I don't know",
        },
        correctNumAnswer: "a",
        correctTextAnswer: "b",
        correctIdkAnswer: "c"
      },
      {
        question: "14. Which tool can you use to ensure code quality?",
        answers: {
          a: "Numerical",
          b: "Text",
          c: "I don't know",
        },
        correctNumAnswer: "a",
        correctTextAnswer: "b",
        correctIdkAnswer: "c"
      },
      {
        question: "15. Final question?",
        answers: {
          a: "Numerical",
          b: "Text",
          c: "I don't know",
        },
        correctNumAnswer: "a",
        correctTextAnswer: "b",
        correctIdkAnswer: "c"
      }
    ];


  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);
    
  })();
  
  