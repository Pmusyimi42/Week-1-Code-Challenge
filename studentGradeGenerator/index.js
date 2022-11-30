
const form = document.querySelector('form');
form.addEventListener('submit',function (event){
    const studentMark = form.querySelector('.mark').value
    event.preventDefault();
        let grade;
    if (studentMark < 40){
        grade = "E"
        // console.log(grade)
    }
    else if (studentMark >= 40 && studentMark < 49){
        grade = "D"
        // console.log(grade);
    }
    else if (studentMark >= 49 && studentMark <= 58){
        grade = "C"
        // console.log(grade);
    }
    else if (studentMark >59 && studentMark <= 78){
        grade = "B"
        // console.log(grade);
    }
    else if (studentMark >79 ){
        grade = "A"
        // console.log(grade);
    }
    const answer = document.getElementById("displayGrade")
    answer.innerText = grade;
}
)
