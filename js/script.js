const body = document.querySelector('body');
const progress = document.querySelector('.progress');
document.addEventListener('scroll', function() {
    let dectorHeight = document.documentElement.clientHeight;
    let scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
    let documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollProc = (scrollHeight / documentHeight) * 100;
        if (scrollHeight >= 0) {
            progress.classList.add('active');
            progress.style.width = scrollProc + '%';
        } else {
            progress.classList.remove('active');
        }
        let dectorHeight2 = dectorHeight * 2;
        if (scrollHeight >= dectorHeight2) {
            progress.classList.add('orange');
        } else {
            progress.classList.remove('orange');
        }
        let dectorHeight3 = dectorHeight * 3;
        if (scrollHeight >= dectorHeight3) {
            progress.classList.add('green');
        } else {
            progress.classList.remove('green');
        }
})

function init() {
    let yourWrapperElement = document.getElementsByClassName("outer-wrapper")[0];
    let whateverEaseFunctionYouWant = remaningScrollDistance => { return remaningScrollDistance / 15 + 1 };
    uss.hrefSetup();

    yourWrapperElement.addEventListener("wheel", event => {
      
      event.preventDefault();
      event.stopPropagation();
      uss.scrollXBy(event.deltaY, yourWrapperElement, null, false);             
    }, {passive:false});

    
    uss.setXStepLengthCalculator(whateverEaseFunctionYouWant, yourWrapperElement);
}

function is_valid() {
  let group = document.getElementById("group").value;
  let map_form = document.getElementById("map_form").value;
  let department = document.getElementById("department").value;
  let subgroup = document.getElementById("subgroup").value; 
  let link = 'http://api.calar.ru/' + department + '/' + map_form + '/' + group;
  if (subgroup != '') {
    link += '?subgroup=' + subgroup;
  }
  console.log(link);
  if (group != '') return link;
  else alert("Некорректный ввод! Пожалуйста, повторите попытку"); return '';
  // $.ajax({
  //   url: link,
  //   type: "GET",
  //   crossDomain: true,
  //   dataType: 'jsonp',
  //   success: function() { return true; },
  //   error: function() { alert("Некорректный ввод! Пожалуйста, повторите попытку"); return false;}
  // })
}

$(function() {
    $( ".btn_1" ).on("click", function() {
      $( ".btn_1" ).addClass( "onclic", 250, validate());
    });
  
    function validate() {
      setTimeout(function() {
        $( ".btn_1" ).removeClass( "onclic" );
        $( ".btn_1" ).addClass( "validate", 450, callback() );
      }, 700 );
    }
      function callback() {
        setTimeout(function() {
          $( ".btn_1" ).removeClass( "validate" );
        }, 300 );
      }
  });

$(function() {
    $( ".btn_2" ).on("click", function() {
      $( ".btn_2" ).addClass( "onclic", 250, validate());
    });
  
    function validate() {
      setTimeout(function() {
        $( ".btn_2" ).removeClass( "onclic" );
        $( ".btn_2" ).addClass( "validate", 450, callback() );
      }, 700 );
    }
      function callback() {
        setTimeout(function() {
          $( ".btn_2" ).removeClass( "validate" );
        }, 300 );
      }
  });

$(function() {
  $( "#btn3" ).on("click", function() {
    let link = is_valid();
    if (link != '') {
      $( "#main__link").text(link);
      $( "#dector4" ).show();
    }
  });
});
