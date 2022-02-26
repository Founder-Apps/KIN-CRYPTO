(function () {
    $('a').click(function (e) {
        var url = "https://docs.google.com/document/d/138is4OhH2fpZ8RKJNJZ1gKSuHvRvjy9G68bJORpTpt4/edit?usp=sharing";
        e.preventDefault();
        window.location.href= url;
    });})