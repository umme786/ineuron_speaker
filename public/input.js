
//    // -------------------country code---------------------
//      var telInput = $("#phone"),
//        errorMsg = $("#error-msg"),
//        validMsg = $("#valid-msg");

//      // initialise plugin
//      telInput.intlTelInput({

//        allowExtensions: true,
//        formatOnDisplay: true,
//        autoFormat: true,
//        autoHideDialCode: true,
//        autoPlaceholder: true,
//        defaultCountry: "auto",
//        ipinfoToken: "yolo",

//        nationalMode: false,
//        numberType: "MOBILE",
//        //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
//        preferredCountries: ['sa', 'ae', 'qa','om','bh','kw','ma'],
//        preventInvalidNumbers: true,
//        separateDialCode: true,
//        initialCountry: "auto",
//        geoIpLookup: function(callback) {
//        $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
//          var countryCode = (resp && resp.country) ? resp.country : "";
//          callback(countryCode);
//        });
//      },
//        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"
//      });

//      var reset = function() {
//        telInput.removeClass("error");
//        errorMsg.addClass("hide");
//        validMsg.addClass("hide");
//      };

//      // on blur: validate
//      telInput.blur(function() {
//        reset();
//        if ($.trim(telInput.val())) {
//          if (telInput.intlTelInput("isValidNumber")) {
//            validMsg.removeClass("hide");
//          } else {
//            telInput.addClass("error");
//            errorMsg.removeClass("hide");
//          }
//        }
//      });

//      // on keyup / change flag: reset
//      telInput.on("keyup change", reset);

//     //  ---------------drop down---------------------
//     const selected = document.querySelector(".selected");
// const optionsContainer = document.querySelector(".options-container");
// const searchBox = document.querySelector(".search-box input");

// const optionsList = document.querySelectorAll(".option");

// selected.addEventListener("click", () => {
//   optionsContainer.classList.toggle("active");

//   searchBox.value = "";
//   filterList("");

//   if (optionsContainer.classList.contains("active")) {
//     searchBox.focus();
//   }
// });

// optionsList.forEach(o => {
//   o.addEventListener("click", () => {
//     selected.innerHTML = o.querySelector("label").innerHTML;
//     optionsContainer.classList.remove("active");
//   });
// });

// searchBox.addEventListener("keyup", function(e) {
//   filterList(e.target.value);
// });

// const filterList = searchTerm => {
//   searchTerm = searchTerm.toLowerCase();
//   optionsList.forEach(option => {
//     let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
//     if (label.indexOf(searchTerm) != -1) {
//       option.style.display = "block";
//     } else {
//       option.style.display = "none";
//     }
//   });
// };
