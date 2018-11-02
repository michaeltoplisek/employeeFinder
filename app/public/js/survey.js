$("#submitSurvey").on('click', function (event) {
    event.preventDefault();
    const newEmployee = {
        'name': $('#userName').val(),
        'scores': [
            $('#question1').val(),
            $('#question2').val(),
            $('#question3').val(),
            $('#question4').val(),
            $('#question5').val(),
            $('#question6').val(),
            $('#question7').val(),
            $('#question8').val(),
            $('#question9').val(),
            $('#question10').val()
        ]
    }
    employees.push(newEmployee);
    console.log(newEmployee);
    console.log(employees);
})