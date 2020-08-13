var wrapptext = document.getElementsByClassName("wrapptext"); /*Анимация появления текста*/
setTimeout(
    function () {
        wrapptext[0].style.opacity = ("1");
    }, 1400
);
const animationright = document.querySelector('.contentwrapp'); /*Анимация появления прямоугольников*/
const animationleft = document.querySelector('.yellow');
animationright.classList.toggle("isShown");
animationleft.classList.toggle("isShown");
$(document).ready(function() { /*Обработчик события при переходе на вторую страницу*/
    $('#right').click(function () {
        $("#form").load("right.html");
        $('#form').css('z-index', '2');
        $('#menu').css('color', 'black');
        $('#punkt1').css('color', 'white');
        $('.wrapptext').css('display', 'none');
        sessionStorage.setItem('noload', 1);
    });
    $('body').on("click", "#otpravit", function () { /*Обработчик события при переходе на третью страницу*/
        $('#popap').css('display', 'flex');
        $('#punkt1').css('color', 'black');
        $('#punkt2').css('color', 'white');
        var name = document.getElementById("name"); /*Передаем данные в php*/
        var email = document.getElementById("email");
        var xhr = new XMLHttpRequest();
        var url = "http://testabv.sn9.ru/testtable";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        parametri = '{"name": "' + name.value + '","email": "' + email.value + '"}';
        xhr.send(parametri);
        sessionStorage.setItem('noload', 2);
    });
    $('body').on("click", "#close", function () { /*Обработчик события при переходе обратно на вторую страницу*/
        $('#popap').css('display', 'none');
        $('#punkt1').css('color', 'white');
        $('#punkt2').css('color', 'black');
        sessionStorage.setItem('noload', 1);
    });
    $('#left').click(function () { /*Обработчик события при переходе обратно на первую страницу*/
        $("#form").load("left.html");
        $('#form').css('z-index', '0');
        $('#menu').css('color', 'white');
        $('#punkt1').css('color', 'black');
        $('.wrapptext').css('display', 'block');
        sessionStorage.setItem('noload', 0);
    });
    if (sessionStorage.getItem("noload") === "1") { /*Проверка, была ли включена ли вторая страница*/
        $("#form").load("right.html");
        $('#form').css('z-index', '2');
        $('#menu').css('color', 'black');
        $('#punkt1').css('color', 'white');
        $('.wrapptext').css('display', 'none');
    } else if (sessionStorage.getItem("noload") === "2") { /*Проверка, была ли включена ли третья страница*/
        $("#form").load("right.html");
        $('#form').css('z-index', '2');
        $('#menu').css('color', 'black');
        $('#popap').css('display', 'flex');
        $('#punkt1').css('color', 'black');
        $('#punkt2').css('color', 'white');
    };
});