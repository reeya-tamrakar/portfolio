function SubForm() {
  $.ajax({
    url: "https://api.apispreadsheets.com/data/12nHqQiXOlmTTxAs/",
    type: "post",
    data: $("#contactDetails").serializeArray(),
    success: function () {
      alert("Form Data Submitted :)");
    },
    error: function () {
      alert("There was an error :(");
    },
  });
  document.getElementById('contactDetails').reset()
}

$(".expand-btn").mouseenter((e) => {
  const element = e.target;
  const width = element.scrollWidth;
  element.style.width = width + 15 + "px";
});
$(".expand-btn").mouseleave((e) => {
  const element = e.target;
  element.style.width = 60 + "px";
});
$(window).on("hashchange", function (e) {
  changeActiveURL();
});
$(window).on("scroll", function (e) {
  $('section').each(function() {
    const mathiBataYeti = $(this)[0].offsetTop - $(window)[0].pageYOffset
    if(mathiBataYeti > 0 && mathiBataYeti < 200) {
      const activeClass = $(this)[0].classList[0]
      putActiveOnLink(activeClass);
    }
    // exceptional case for banner
    const bannerKoMathiBata = $('section')[0].offsetTop - $(window)[0].pageYOffset
    if(bannerKoMathiBata > -40) {
      putActiveOnLink("");
    }
  });
});

changeActiveURLClick();

function putActiveOnLink(value) {
  removeActiveClasses();
  if (value) {
    $(".nav-link").each(function () {
      if ($(this).attr("href").includes(value)) {
        $(this).addClass("active");
      }
    });
  } else {
    $(".nav-link").first().addClass("active");
  }
}
function changeActiveURLClick() {
  let hashValue = window.location.hash;
  putActiveOnLink(hashValue)
}
function removeActiveClasses() {
  $(".nav-link").each(function () {
    $(this).removeClass("active");
  });
}
