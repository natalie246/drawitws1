$( document ).ready(function() {


    var i = 0;
    var dragging1 = false;
    var dragging2 = false;
    var dragging3 = false;
    var dragging4 = false;
    var dragging5 = false;
    var dragging6 = false;
    var dragging7 = false;
    var dragging8 = false;
    var dragging9 = false;
    var dragging10 = false;
    var firstAnswer = 1;
    var instruction = 1;

//url: 'http://localhost:3000/answer1',
//url:  'https://drawitws1.herokuapp.com/answer1',


////////////////////////////////////////////////////// ------ start ------- ////////////////////////////////

 $('.start').mousedown(function(e){

  var href = $('.star').attr('href');
      window.location.href = "guess.html"; 

});


////////////////////////////////////////////////////// ------ suitcase ------- ////////////////////////////////

    $('.suitcase').mousedown(function(e){


       $('.suitcase').css("display", "none");
       $(".clearfix").css("opacity", "1");
       $(".top").css("opacity", "1");
       $(".topbar").css("opacity", "1");
       $(".bottom").css("opacity", "1");
       $(".social").css("opacity", "1");
       $(".myDivide").css("opacity", "1");
       $(".toptext").css("opacity", "1");
       $(".bottomtext").css("opacity", "1");
       $(".precentLeft").css("opacity", "1");

       $(".ribbon_side").css("display", "block");
       $(".ribbontext").css("display", "block");
      
       //$("#ribbon_side").hide("slide", { direction: "left" }, 1000);



      });


    ////////////////////////////////////////////////////// ------ ribbon_side ------- ////////////////////////////////

        $('.ribbon_side').mousedown(function(e){

          console.log("im innnnnnnn");
        $(".ribbon_side").animate({"width":"0px"}, 8000).removeClass('visible');
          $(".ribbontext").hide(8000);
          $(".arrow3").hide(900);
      });



      $('.suitcase').mousedown(function(e){
       $(".moneyc3").css("display", "block");
      });




    
    ////////////////////////////////////////////////////// ------ The Real Answer ------- //////////////////////////////////////////////////////

    $('.theAnswer').mousedown(function(e){

         $(".clearfix").css("opacity", "1");
         $(".top").css("opacity", "1");
         $(".topbar").css("opacity", "1");
         $(".bottom").css("opacity", "1");
         $(".social").css("opacity", "1");
         $(".myDivide").css("opacity", "1");
         $(".toptext").css("opacity", "1");
         $(".bottomtext").css("opacity", "1");
         $(".precentLeft").css("opacity", "1");


          $(".theAnswer").css("display", "none");


                        $.ajax({
                        url:'https://drawitws1.herokuapp.com/realResult',
                        method:"post",
                        success: function(data){
                            console.log('success1');
                             realResults(data);
                            },
                        error:function(err){
                            console.log("ajax error");
                              }
                        });

//https://drawitws1.herokuapp.com/answer1
//http://localhost:3000/realResult

        function realResults(data){

            $sidebar1= data[0].lower_class;
            $sidebar2= data[0].second_class;
            $sidebar3= data[0].third_class;
            $sidebar4= data[0].fourth_class;
            $sidebar5= data[0].fifth_class;
            $sidebar6= data[0].sixth_class;
            $sidebar7= data[0].seventh_class;
            $sidebar8= data[0].eighth_class;
            $sidebar9= data[0].ninth_class;
            $sidebar10= data[0].upper_class;

            console.log(data[0].upper_class);

          $("#text1").html(1 + "%").show();
          $("#text2").html(2 + "%").show();
          $("#text3").html(3 + "%").show();
          $("#text4").html(4 + "%").show();
          $("#text5").html(6 + "%").show();
          $("#text6").html(7 + "%").show();
          $("#text7").html(9 + "%").show();
          $("#text8").html(11 + "%").show();
          $("#text9").html(17 + "%").show();
          $("#text10").html(40 + "%").show();

          $("#text1").css("bottom",$sidebar1/1.6+19+"%");
          $("#text2").html(2 + "%");
          $("#text2").css("bottom",$sidebar2/1.6+19+"%");
          $("#text3").html(3 + "%");
          $("#text3").css("bottom",$sidebar3/1.6+19+"%");
          $("#text4").html(4 + "%");
          $("#text4").css("bottom",$sidebar4/1.6+19+"%");
          $("#text5").html(6 + "%");
          $("#text5").css("bottom",$sidebar5/1.6+19+"%");
          $("#text6").html(7 + "%");
          $("#text6").css("bottom",$sidebar6/1.6+19+"%");
          $("#text7").html(9 + "%");
          $("#text7").css("bottom",$sidebar7/1.6+19+"%");
          $("#text8").html(11 + "%");
          $("#text8").css("bottom",$sidebar8/1.6+19+"%");
          $("#text9").html(17 + "%");
          $("#text9").css("bottom",$sidebar9/1.6+19+"%");
          $("#text10").html(40 + "%");
          $("#text10").css("bottom",$sidebar10/1.6+19+"%");

          $(".finaltext1").css("display","block");
          $(".finaltext2").css("display","block");
          $(".finaltext3").css("display","block");


          

            
          //.realR display 

          $("#sidebar1").css("height", $sidebar1/1.6 + "%").hide();
          $("#sidebar2").css("height", $sidebar2/1.6 + "%").hide();
          $("#sidebar3").css("height", $sidebar3/1.6 + "%").hide();
          $("#sidebar4").css("height", $sidebar4/1.6 + "%").hide();
          $("#sidebar5").css("height", $sidebar5/1.6 + "%").hide();
          $("#sidebar6").css("height", $sidebar6/1.6 + "%").hide();
          $("#sidebar7").css("height", $sidebar7/1.6 + "%").hide();
          $("#sidebar8").css("height", $sidebar8/1.6 + "%").hide();
          $("#sidebar9").css("height", $sidebar9/1.6 + "%").hide();
          $("#sidebar10").css("height", $sidebar10/1.6 + "%").hide();


          for (i = 10; i > 0; i--) { 
               $("#sidebar"+i).slideDown(2000);
          }


                  $("#new2_sidebar1").css("height", $sidebar1/1.6 + "%").hide();
                  $("#new2_sidebar1").css("bottom", 18+ "%").hide();

                  $("#new2_sidebar2").css("height", $sidebar2/1.6 + "%").hide();
                  $("#new2_sidebar2").css("bottom", $sidebar1/1.6 + 18.2 + "%").hide();

                  $("#new2_sidebar3").css("height", $sidebar3/1.6 + "%").hide();
                  $("#new2_sidebar3").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + 18.4 + "%").hide();

                  $("#new2_sidebar4").css("height", $sidebar4/1.6 + "%").hide();
                  $("#new2_sidebar4").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + 18.6 + "%").hide();

                  $("#new2_sidebar5").css("height", $sidebar5/1.6 + "%").hide();
                  $("#new2_sidebar5").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + 18.8 + "%").hide();

                  $("#new2_sidebar6").css("height", $sidebar6/1.6 + "%").hide();
                  $("#new2_sidebar6").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + $sidebar5/1.6 + 19 + "%").hide();

                  $("#new2_sidebar7").css("height", $sidebar7/1.6 + "%").hide();
                  $("#new2_sidebar7").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + $sidebar5/1.6 + $sidebar6/1.6 + 19.2 + "%").hide();

                  $("#new2_sidebar8").css("height", $sidebar8/1.6 + "%").hide();
                  $("#new2_sidebar8").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + $sidebar5/1.6 + $sidebar6/1.6 + $sidebar7/1.6 + 19.4 + "%").hide();

                  $("#new2_sidebar9").css("height", $sidebar9/1.6 + "%").hide();
                  $("#new2_sidebar9").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + $sidebar5/1.6 + $sidebar6/1.6 + $sidebar7/1.6 +$sidebar8/1.6 + 19.6 + "%").hide();

                  $("#new2_sidebar10").css("height", $sidebar10/1.6 + "%").hide();
                  $("#new2_sidebar10").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + $sidebar5/1.6 + $sidebar6/1.6 + $sidebar7/1.6 +$sidebar8/1.6+ $sidebar9/1.6 + 19.8 + "%").hide();

                  $('.finaltext3').mousedown(function(e){


          $(".realR").css("display", "block");

          $(".finaltext1").css("display","none");
          $(".finaltext2").css("display","none");
          $(".finaltext3").css("display","none");

        $('#sidebar1').slideUp(1000, function() {
            $('#new2_sidebar1').slideDown(1000);
               $("#sidebar1").css("height", "1%");
                  $('#sidebar1').slideDown(1000);

                      for (i = 10; i > 0; i--) {                                
                           $('#text'+i).hide(4000);         
                        }

                 $('#sidebar2').slideUp(1000, function() {
                    $('#new2_sidebar2').slideDown(1000);
                      $("#sidebar2").css("height", "1%");
                         $('#sidebar2').slideDown(1000);

                         $('#sidebar3').slideUp(1000, function() {
                            $('#new2_sidebar3').slideDown(1000);
                              $("#sidebar3").css("height", "1%");
                                 $('#sidebar3').slideDown(1000);

                                $('#sidebar4').slideUp(1000, function() {
                                   $('#new2_sidebar4').slideDown(1000);
                                      $("#sidebar4").css("height", "1%");
                                         $('#sidebar4').slideDown(1000);

                                         $('#sidebar5').slideUp(1000, function() {
                                            $('#new2_sidebar5').slideDown(1000);
                                               $("#sidebar5").css("height", "1%");
                                                  $('#sidebar5').slideDown(1000);

                                                  $('#sidebar6').slideUp(1000, function() {
                                                      $('#new2_sidebar6').slideDown(1500);
                                                         $("#sidebar6").css("height", "1%");
                                                             $('#sidebar6').slideDown(1000);

                                                           $('#sidebar7').slideUp(1000, function() {
                                                              $('#new2_sidebar7').slideDown(1000);
                                                                 $("#sidebar7").css("height", "1%");
                                                                     $('#sidebar7').slideDown(1000);

                                                                   $('#sidebar8').slideUp(1000, function() {
                                                                      $('#new2_sidebar8').slideDown(1000);
                                                                          $("#sidebar8").css("height", "1%");
                                                                              $('#sidebar8').slideDown(1000);

                                                                           $('#sidebar9').slideUp(1000, function() {
                                                                               $('#new2_sidebar9').slideDown(1000);
                                                                                   $("#sidebar9").css("height", "1%");
                                                                                      $('#sidebar9').slideDown(1000);

                                                                                   $('#sidebar10').slideUp(1000, function() {
                                                                                       $('#new2_sidebar10').slideDown(1000);
                                                                                          $("#sidebar10").css("height", "1%");
                                                                                             $('#sidebar10').slideDown(1000);


                                                                                          
                                                                                                for (i = 10; i > 0; i--) {                                
                                                                                                   $('#sidebar'+i).remove();        
                                                                                                }

                                                                                                $('.bottom').remove();
                                                                                                $('.top').remove();
                                                                                                $('.bottomtext').remove();
                                                                                                $('.toptext').remove();
                                                                                                $('.refreshbutton').remove();
                                                                                                $('.viconbutton').remove();
                                                                                                $('.topbar').remove();
                                                                                                $('#precentLeft').remove();
                                                                                                $('#precent1').remove();
                                                                                                $('#precent2').remove();


                                                                                                $.ajax({
                                                                                                url:'https://drawitws1.herokuapp.com/usersAnswers',
                                                                                                method:"post",
                                                                                                success: function(data){
                                                                                                    console.log('success1');
                                                                                                     realResults(data);
                                                                                                    },
                                                                                                error:function(err){
                                                                                                    console.log("ajax error");
                                                                                                      }
                                                                                                });
                                                                                                      // https://drawitws1.herokuapp.com/
                                                                                                      // http://localhost:3000/usersAnswers

                                                                                                  function realResults(data){



                                                                                                         for (i = 0; i < 10; i++) { 

                                                                                                            $(".r0"+i).css("height",  data[i].lower_class + "%");
                                                                                                            $(".r1"+i).css("height",  data[i].second_class + "%");
                                                                                                            $(".r2"+i).css("height",  data[i].third_class  + "%");
                                                                                                            $(".r3"+i).css("height",  data[i].fourth_class  + "%");
                                                                                                            $(".r4"+i).css("height",  data[i].fifth_class  + "%");
                                                                                                            $(".r5"+i).css("height",  data[i].sixth_class+ "%");
                                                                                                            $(".r6"+i).css("height",  data[i].seventh_class + "%");
                                                                                                            $(".r7"+i).css("height",  data[i].eighth_class  + "%");
                                                                                                            $(".r8"+i).css("height",  data[i].ninth_class + "%");
                                                                                                            $(".r9"+i).css("height",  data[i].upper_class  + "%");
                                            
                                                
                                                                                                         }

                                                                                                         for (i = 0; i < 10; i++) { 

                                                                                                            $(".a0"+i).css("height",  data[i+10].lower_class + "%");
                                                                                                            $(".a1"+i).css("height",  data[i+10].second_class + "%");
                                                                                                            $(".a2"+i).css("height",  data[i+10].third_class  + "%");
                                                                                                            $(".a3"+i).css("height",  data[i+10].fourth_class  + "%");
                                                                                                            $(".a4"+i).css("height",  data[i+10].fifth_class  + "%");
                                                                                                            $(".a5"+i).css("height",  data[i+10].sixth_class+ "%");
                                                                                                            $(".a6"+i).css("height",  data[i+10].seventh_class + "%");
                                                                                                            $(".a7"+i).css("height",  data[i+10].eighth_class  + "%");
                                                                                                            $(".a8"+i).css("height",  data[i+10].ninth_class + "%");
                                                                                                            $(".a9"+i).css("height",  data[i+10].upper_class  + "%");

                                                                                                        }

                                                                                                        $(".a0"+i).css("background-color",  "pink");



                                                                                                         // for (i = 0; i < 10; i++) { 
                                                                                                         //  console.log("im in: for (i = 0; i < 10; i++)");

                                                                                                         //    $(".a0"+i).css("height",  data[i].lower_class + "%");
                                                                                                         //    $(".a1"+i).css("height",  data[i].second_class + "%");
                                                                                                         //    $(".a2"+i).css("height",  data[i].third_class  + "%");
                                                                                                         //    $(".a3"+i).css("height",  data[i].fourth_class  + "%");
                                                                                                         //    $(".a4"+i).css("height",  data[i].fifth_class  + "%");
                                                                                                         //    $(".a5"+i).css("height",  data[i].sixth_class+ "%");
                                                                                                         //    $(".a6"+i).css("height",  data[i].seventh_class + "%");
                                                                                                         //    $(".a7"+i).css("height",  data[i].eighth_class  + "%");
                                                                                                         //    $(".a8"+i).css("height",  data[i].ninth_class + "%");
                                                                                                         //    $(".a9"+i).css("height",  data[i].upper_class  + "%");
                                                
                                                                                                         // }





                                                                                                            console.log($sidebar1/1.6 + "%");
                                                                                                            
                                                                                                            console.log(data);
                                                                                                          
                                                                                                            $(".scroll1").css("display", "block");
                                                                                                  }

                                                                                                //$(".clearfix ::-webkit-scrollbar").css("display", "block");
                                                                                                
                                                                                                 

                                                                                      
                                                                                  });
                                                                          });
                                                                    });
                                                              });
                                                        });

                                                  });
                                          });
                                  });
                          });
                  });
            });

          };

           
            


    });

  ////////////////////////////////////////////////////// ------ gif jump ------- //////////////////////////////////////////////////////
    

    $('.moneyc3').mousedown(function(e){

        $(".moneyc3").css("display", "none");
     });


  ////////////////////////////////////////////////////// ------ refresh button ------- //////////////////////////////////////////////////////


  $('.refreshbutton').mousedown(function(e){

    $("#r2").css("display", "block");
   // $("#r1").css("display", "none");

    $sidebar1 = 1;
    $sidebar2 = 1;
    $sidebar3 = 1;
    $sidebar4 = 1;
    $sidebar5 = 1;
    $sidebar6 = 1;
    $sidebar7 = 1;
    $sidebar8 = 1;
    $sidebar9 = 1;
    $sidebar10 = 1;

                      for (i = 10; i > 0; i--) { 

                          $('#sidebar'+i).css("height", 1 + "%");
                          $("#text"+i).html(1 + "%");
                          $("#text"+i).css("bottom", 19+"%");
                      }

                      $("#precent1").html("10%");
                      $("#precentLeft").css("width", "0px");
                      $(".over100").css("display",  "none");
                      $(".yetNot100").css("width", "0");
                      $(".instruction").css("display", "none");
                      $(".moneyc3").css("display", "none");

                      //$("#r2").css("display", "none");


  });

  ////////////////////////////////////////////////////// ------ V button ------- //////////////////////////////////////////////////////

  $('.viconbutton').mousedown(function(e){

          var data ={};
          data.lower_class = $sidebar1;
          data.second_class = $sidebar2;
          data.third_class = $sidebar3;
          data.fourth_class = $sidebar4;
          data.fifth_class = $sidebar5;
          data.sixth_class = $sidebar6;
          data.seventh_class = $sidebar7;
          data.eighth_class = $sidebar8;
          data.ninth_class = $sidebar9;
          data.upper_class = $sidebar10;
      
       var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                    $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10;


        if(sum == 100){

        $("#v1").css("display", "none");
        $("#v2").css("display", "block");
        $(".yetNot100").css("width", "0");
        $(".instruction").css("display", "none");
        $(".over100").css("display",  "none");
        $(".moneyc3").css("display", "none");
        $(".ribbon_side").css("display", "none");
        $(".ribbontext").css("display", "none");


                if(firstAnswer == 1){

                  var moveSidebar = 92.1;
                  var moveTextSidebar = 95.1;

                  for (i = 10; i > 0; i--) { 
                  
                        moveSidebar -= 7.1;
                        moveTextSidebar -= 7.1;
                        $("#sidebar"+i).animate({ "left": moveSidebar +"%" }, 900).delay(100);
                        $("#text"+ i).animate({ "left": moveTextSidebar +"%" }, 900).delay(100);
                        $("#sidebar"+i).css("width","7%");
                        $("#sidebar"+i).css("left",moveSidebar +"%");
                  }

                  $(".myWill").css("display","block");  

                  $(".top").animate({ "left": "85%" }, 900).delay(100);
                  $(".top").css("width","7%");
                  $(".bottom").animate({ "left": "21.1%" }, 900).delay(100);
                  $(".bottom").css("width","7%"); 

               $(".toptext").hide();
               $(".toptext").css("left","86%").show(2000);

               $(".bottomtext").hide();
               $(".bottomtext").css("left","22.1%").show(2000);


                  for (i = 10; i > 0; i--) { 
                      
                      $('#text'+i).hide(1500);         
                  }

                  $("#new_sidebar1").css("height", $sidebar1/1.6 + "%").hide();
                  $("#new_sidebar1").css("bottom", 18+ "%").hide();

                  $("#new_sidebar2").css("height", $sidebar2/1.6 + "%").hide();
                  $("#new_sidebar2").css("bottom", $sidebar1/1.6 + 18.2 + "%").hide();

                  $("#new_sidebar3").css("height", $sidebar3/1.6 + "%").hide();
                  $("#new_sidebar3").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + 18.4 + "%").hide();

                  $("#new_sidebar4").css("height", $sidebar4/1.6 + "%").hide();
                  $("#new_sidebar4").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + 18.6 + "%").hide();

                  $("#new_sidebar5").css("height", $sidebar5/1.6 + "%").hide();
                  $("#new_sidebar5").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + 18.8 + "%").hide();

                  $("#new_sidebar6").css("height", $sidebar6/1.6 + "%").hide();
                  $("#new_sidebar6").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + $sidebar5/1.6 + 19 + "%").hide();

                  $("#new_sidebar7").css("height", $sidebar7/1.6 + "%").hide();
                  $("#new_sidebar7").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + $sidebar5/1.6 + $sidebar6/1.6 + 19.2 + "%").hide();

                  $("#new_sidebar8").css("height", $sidebar8/1.6 + "%").hide();
                  $("#new_sidebar8").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + $sidebar5/1.6 + $sidebar6/1.6 + $sidebar7/1.6 + 19.4 + "%").hide();

                  $("#new_sidebar9").css("height", $sidebar9/1.6 + "%").hide();
                  $("#new_sidebar9").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + $sidebar5/1.6 + $sidebar6/1.6 + $sidebar7/1.6 +$sidebar8/1.6 + 19.6 + "%").hide();

                  $("#new_sidebar10").css("height", $sidebar10/1.6 + "%").hide();
                  $("#new_sidebar10").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + $sidebar5/1.6 + $sidebar6/1.6 + $sidebar7/1.6 +$sidebar8/1.6+ $sidebar9/1.6 + 19.8 + "%").hide();
                 
                // $('#new_sidebar2').slideDown(2000);

        $('#sidebar1').slideUp(1000, function() {
            $('#new_sidebar1').slideDown(1000);
               $("#sidebar1").css("height", "1%");
                  $('#sidebar1').slideDown(1000);

                 $('#sidebar2').slideUp(1000, function() {
                    $('#new_sidebar2').slideDown(1000);
                      $("#sidebar2").css("height", "1%");
                         $('#sidebar2').slideDown(1000);

                         $('#sidebar3').slideUp(1000, function() {
                            $('#new_sidebar3').slideDown(1000);
                              $("#sidebar3").css("height", "1%");
                                 $('#sidebar3').slideDown(1000);

                                $('#sidebar4').slideUp(1000, function() {
                                   $('#new_sidebar4').slideDown(1000);
                                      $("#sidebar4").css("height", "1%");
                                         $('#sidebar4').slideDown(1000);

                                         $('#sidebar5').slideUp(1000, function() {
                                            $('#new_sidebar5').slideDown(1000);
                                               $("#sidebar5").css("height", "1%");
                                                  $('#sidebar5').slideDown(1000);

                                                  $('#sidebar6').slideUp(1000, function() {
                                                      $('#new_sidebar6').slideDown(1500);
                                                         $("#sidebar6").css("height", "1%");
                                                             $('#sidebar6').slideDown(1000);

                                                           $('#sidebar7').slideUp(1000, function() {
                                                              $('#new_sidebar7').slideDown(1000);
                                                                 $("#sidebar7").css("height", "1%");
                                                                     $('#sidebar7').slideDown(1000);

                                                                   $('#sidebar8').slideUp(1000, function() {
                                                                      $('#new_sidebar8').slideDown(1000);
                                                                          $("#sidebar8").css("height", "1%");
                                                                              $('#sidebar8').slideDown(1000);

                                                                           $('#sidebar9').slideUp(1000, function() {
                                                                               $('#new_sidebar9').slideDown(1000);
                                                                                   $("#sidebar9").css("height", "1%");
                                                                                      $('#sidebar9').slideDown(1000);

                                                                                   $('#sidebar10').slideUp(1000, function() {
                                                                                       $('#new_sidebar10').slideDown(1000);
                                                                                          $("#sidebar10").css("height", "1%");
                                                                                             $('#sidebar10').slideDown(1000);

                                                                                                $(".theQuestionButton").css("display", "block");

                                                                                                $("#v1").css("display", "block");
                                                                                                $("#v2").css("display", "none");



                                                                                                 $(".clearfix").css("opacity", "0.3");
                                                                                                 $(".top").css("opacity", "0.3");
                                                                                                 $(".topbar").css("opacity", "0.3");
                                                                                                 $(".bottom").css("opacity", "0.3");
                                                                                                 $(".social").css("opacity", "0.3");
                                                                                                 $(".myDivide").css("opacity", "0.3");
                                                                                                 $(".toptext").css("opacity", "0.3");
                                                                                                 $(".bottomtext").css("opacity", "0.3");
                                                                                                 $(".precentLeft").css("opacity", "0.3");



                                                                                  });
                                                                          });
                                                                    });
                                                              });
                                                        });

                                                  });
                                          });
                                  });
                          });
                  });


                      $('.theQuestionButton').mousedown(function(e){

                         $(".clearfix").css("opacity", "1");
                         $(".top").css("opacity", "1");
                         $(".topbar").css("opacity", "1");
                         $(".bottom").css("opacity", "1");
                         $(".social").css("opacity", "1");
                         $(".myDivide").css("opacity", "1");
                         $(".toptext").css("opacity", "1");
                         $(".bottomtext").css("opacity", "1");
                         $(".precentLeft").css("opacity", "1");

                        firstAnswer = 2;

                          $(".theQuestionButton").css("display", "none");
                          
                          for (i = 10; i > 0; i--) { 
                                  $("#text"+i).css("bottom","19%");
                                  $("#text"+i).html(1 + "%").show();
                                  $('#dragbar'+i).remove();
                          }

                          $sidebar1 = 1;
                          $sidebar2 = 1;
                          $sidebar3 = 1;
                          $sidebar4 = 1;
                          $sidebar5 = 1;                        
                          $sidebar6 = 1;
                          $sidebar7 = 1;
                          $sidebar8 = 1;
                          $sidebar9 = 1;
                          $sidebar10 = 1;

                                  var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 +
                                          $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10;
                                          //console.log("sum: "+sum);
                                    
                                  $("#precent1").html(sum + "%");
                                  var fill = (sum - 10)*2.44;
                                  $("#precentLeft").css("width", fill+"px");
                          
                                  $('#dragbar12').mousedown(function(e){
                                    $("#r2").css("display", "none");

                                                 e.preventDefault();
                                                 
                                                 dragging1 = true;
                                                 var sidebar1 = $('#sidebar1');
                                                  var new_ghostbar1 = $('<div>',
                                                            {id:'new_ghostbar1',css: {top: sidebar1.offset().top}
                                                          }).appendTo('body');

                                                  $(document).mousemove(function(e){
                                                     new_ghostbar1.css("top",e.pageY+2);

                                                 });
                                  });

                                  $('#dragbar22').mousedown(function(e){
                                    $("#r2").css("display", "none");

                                                 e.preventDefault();
                                                 
                                                 dragging2 = true;
                                                 var sidebar2 = $('#sidebar2');
                                                  var new_ghostbar2 = $('<div>',
                                                            {id:'new_ghostbar2',css: {top: sidebar2.offset().top}
                                                          }).appendTo('body');

                                                  $(document).mousemove(function(e){
                                                     new_ghostbar2.css("top",e.pageY+2);

                                                 });
                                  });


                                  $('#dragbar32').mousedown(function(e){
                                    $("#r2").css("display", "none");

                                                 e.preventDefault();
                                                 
                                                 dragging3 = true;
                                                 var sidebar3 = $('#sidebar3');
                                                  var new_ghostbar3 = $('<div>',
                                                            {id:'new_ghostbar3',css: {top: sidebar3.offset().top}
                                                          }).appendTo('body');

                                                  $(document).mousemove(function(e){
                                                     new_ghostbar3.css("top",e.pageY+2);

                                                 });
                                  });


                                  $('#dragbar42').mousedown(function(e){
                                    $("#r2").css("display", "none");

                                                 e.preventDefault();
                                                 
                                                 dragging4 = true;
                                                 var sidebar4 = $('#sidebar4');
                                                  var new_ghostbar4 = $('<div>',
                                                            {id:'new_ghostbar4',css: {top: sidebar4.offset().top}
                                                          }).appendTo('body');

                                                  $(document).mousemove(function(e){
                                                     new_ghostbar4.css("top",e.pageY+2);

                                                 });
                                  });

                                  $('#dragbar52').mousedown(function(e){
                                    $("#r2").css("display", "none");

                                                 e.preventDefault();
                                                 
                                                 dragging5 = true;
                                                 var sidebar5 = $('#sidebar5');
                                                  var new_ghostbar5 = $('<div>',
                                                            {id:'new_ghostbar5',css: {top: sidebar5.offset().top}
                                                          }).appendTo('body');

                                                  $(document).mousemove(function(e){
                                                     new_ghostbar5.css("top",e.pageY+2);

                                                 });
                                  });


                                  $('#dragbar62').mousedown(function(e){
                                    $("#r2").css("display", "none");

                                                 e.preventDefault();
                                                 
                                                 dragging6 = true;
                                                 var sidebar6 = $('#sidebar6');
                                                  var new_ghostbar6 = $('<div>',
                                                            {id:'new_ghostbar6',css: {top: sidebar6.offset().top}
                                                          }).appendTo('body');

                                                  $(document).mousemove(function(e){
                                                     new_ghostbar6.css("top",e.pageY+2);

                                                 });
                                  });

                                  $('#dragbar72').mousedown(function(e){
                                    $("#r2").css("display", "none");

                                                 e.preventDefault();
                                                 
                                                 dragging7 = true;
                                                 var sidebar7 = $('#sidebar7');
                                                  var new_ghostbar7 = $('<div>',
                                                            {id:'new_ghostbar7',css: {top: sidebar7.offset().top}
                                                          }).appendTo('body');

                                                  $(document).mousemove(function(e){
                                                     new_ghostbar7.css("top",e.pageY+2);

                                                 });
                                  });

                                  $('#dragbar82').mousedown(function(e){
                                    $("#r2").css("display", "none");

                                                 e.preventDefault();
                                                 
                                                 dragging8 = true;
                                                 var sidebar8 = $('#sidebar8');
                                                  var new_ghostbar8 = $('<div>',
                                                            {id:'new_ghostbar8',css: {top: sidebar8.offset().top}
                                                          }).appendTo('body');

                                                  $(document).mousemove(function(e){
                                                     new_ghostbar8.css("top",e.pageY+2);

                                                 });
                                  });

                                  $('#dragbar92').mousedown(function(e){
                                    $("#r2").css("display", "none");

                                                 e.preventDefault();
                                                 
                                                 dragging9 = true;
                                                 var sidebar9 = $('#sidebar9');
                                                  var new_ghostbar9 = $('<div>',
                                                            {id:'new_ghostbar9',css: {top: sidebar9.offset().top}
                                                          }).appendTo('body');

                                                  $(document).mousemove(function(e){
                                                     new_ghostbar9.css("top",e.pageY+2);

                                                 });
                                  });

                                  $('#dragbar102').mousedown(function(e){
                                    $("#r2").css("display", "none");

                                                 e.preventDefault();
                                                 
                                                 dragging10 = true;
                                                 var sidebar10 = $('#sidebar10');
                                                  var new_ghostbar10 = $('<div>',
                                                            {id:'new_ghostbar10',css: {top: sidebar10.offset().top}
                                                          }).appendTo('body');

                                                  $(document).mousemove(function(e){
                                                     new_ghostbar10.css("top",e.pageY+2);

                                                 });
                                  });
                       

                      });


                }

                if(firstAnswer == 2){

                        console.log("im in  if(firstAnswer == 2)");

                         $.ajax({
                              url:'https://drawitws1.herokuapp.com/answer1',
                              method:"post",
                              data: data,
                              success: function(data){
                                console.log('success1');
                                console.log("success1: "+data);
                              },
                              error:function(err){
                                console.log("ajax error");
                              }
                        });

                         //https://drawitws1.herokuapp.com/answer1


                            $(".realGuess").css("display","block");


                              var moveSidebar = 92.1;
                              var moveTextSidebar = 95.1;

                              for (i = 10; i > 0; i--) { 
                              
                                    moveSidebar -= 6.1;
                                    moveTextSidebar -= 6.1;
                                    $("#sidebar"+i).animate({ "left": moveSidebar +"%" }, 900).delay(100);
                                    $("#text"+ i).animate({ "left": moveTextSidebar +"%" }, 900).delay(100);
                                    $("#sidebar"+i).css("width","6%");
                                    $("#sidebar"+i).css("left",moveSidebar +"%");
                              }

                              // $(".myWill").css("display","block");  

                              $(".top").animate({ "left": "86%" }, 900).delay(100);
                              $(".top").css("width","6%");
                              $(".bottom").animate({ "left": "31.1%" }, 900).delay(100);
                              $(".bottom").css("width","6%");

                               $(".toptext").hide();
                               $(".toptext").css("left","87%").show(2000);

                               $(".bottomtext").hide();
                               $(".bottomtext").css("left","32.1%").show(2000);  

///////////// changeee



                            for (i = 10; i > 0; i--) { 
                                
                                $('#text'+i).hide(1500);         
                            }

                            $("#new1_sidebar1").css("height", $sidebar1/1.6 + "%").hide();
                            
                            $("#new1_sidebar2").css("height", $sidebar2/1.6 + "%").hide();
                            $("#new1_sidebar2").css("bottom", $sidebar1/1.6 + 18.2 + "%").hide();

                            $("#new1_sidebar3").css("height", $sidebar3/1.6 + "%").hide();
                            $("#new1_sidebar3").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + 18.4 + "%").hide();

                            $("#new1_sidebar4").css("height", $sidebar4/1.6 + "%").hide();
                            $("#new1_sidebar4").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + 18.6 + "%").hide();

                            $("#new1_sidebar5").css("height", $sidebar5/1.6 + "%").hide();
                            $("#new1_sidebar5").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + 18.8 + "%").hide();

                            $("#new1_sidebar6").css("height", $sidebar6/1.6 + "%").hide();
                            $("#new1_sidebar6").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + $sidebar5/1.6 + 19 + "%").hide();

                            $("#new1_sidebar7").css("height", $sidebar7/1.6 + "%").hide();
                            $("#new1_sidebar7").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + $sidebar5/1.6 + $sidebar6/1.6 + 19.2+ "%").hide();

                            $("#new1_sidebar8").css("height", $sidebar8/1.6 + "%").hide();
                            $("#new1_sidebar8").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + $sidebar5/1.6 + $sidebar6/1.6 + $sidebar7/1.6 + 19.4 + "%").hide();

                            $("#new1_sidebar9").css("height", $sidebar9/1.6 + "%").hide();
                            $("#new1_sidebar9").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + $sidebar5/1.6 + $sidebar6/1.6 + $sidebar7/1.6 +$sidebar8/1.6 + 19.6 + "%").hide();

                            $("#new1_sidebar10").css("height", $sidebar10/1.6 + "%").hide();
                            $("#new1_sidebar10").css("bottom", $sidebar1/1.6 + $sidebar2/1.6 + $sidebar3/1.6 + $sidebar4/1.6 + $sidebar5/1.6 + $sidebar6/1.6 + $sidebar7/1.6 +$sidebar8/1.6+ $sidebar9/1.6 + 19.8 + "%").hide();



                                  $('#sidebar1').slideUp(1000, function() {
                                      $('#new1_sidebar1').slideDown(1000);
                                         $("#sidebar1").css("height", "1%");
                                            $('#sidebar1').slideDown(1000);

                                           $('#sidebar2').slideUp(1000, function() {
                                              $('#new1_sidebar2').slideDown(1000);
                                                $("#sidebar2").css("height", "1%");
                                                   $('#sidebar2').slideDown(1000);

                                                   $('#sidebar3').slideUp(1000, function() {
                                                      $('#new1_sidebar3').slideDown(1000);
                                                        $("#sidebar3").css("height", "1%");
                                                           $('#sidebar3').slideDown(1000);

                                                          $('#sidebar4').slideUp(1000, function() {
                                                             $('#new1_sidebar4').slideDown(1000);
                                                                $("#sidebar4").css("height", "1%");
                                                                   $('#sidebar4').slideDown(1000);

                                                                   $('#sidebar5').slideUp(1000, function() {
                                                                      $('#new1_sidebar5').slideDown(1000);
                                                                         $("#sidebar5").css("height", "1%");
                                                                            $('#sidebar5').slideDown(1000);

                                                                            $('#sidebar6').slideUp(1000, function() {
                                                                                $('#new1_sidebar6').slideDown(1500);
                                                                                   $("#sidebar6").css("height", "1%");
                                                                                       $('#sidebar6').slideDown(1000);

                                                                                     $('#sidebar7').slideUp(1000, function() {
                                                                                        $('#new1_sidebar7').slideDown(1000);
                                                                                           $("#sidebar7").css("height", "1%");
                                                                                               $('#sidebar7').slideDown(1000);

                                                                                             $('#sidebar8').slideUp(1000, function() {
                                                                                                $('#new1_sidebar8').slideDown(1000);
                                                                                                    $("#sidebar8").css("height", "1%");
                                                                                                        $('#sidebar8').slideDown(1000);

                                                                                                     $('#sidebar9').slideUp(1000, function() {
                                                                                                         $('#new1_sidebar9').slideDown(1000);
                                                                                                             $("#sidebar9").css("height", "1%");
                                                                                                                $('#sidebar9').slideDown(1000);

                                                                                                             $('#sidebar10').slideUp(1000, function() {
                                                                                                                 $('#new1_sidebar10').slideDown(1000);
                                                                                                                    $("#sidebar10").css("height", "1%");
                                                                                                                       $('#sidebar10').slideDown(1000);

                                                                                                                        $(".theAnswer").css("display", "block");
                                                                                                                         // $("#sidebar3:hover + #info1").css("display", "block");
                                                                                                                         //  $("#text3:hover + #info1").css("display", "block");
                                                                                                                         //   $("#sidebar10:hover + #info2").css("display", "block");
                                                                                                                         //    $("#text10:hover + #info2").css("display", "block");

                                                                                                                            $(".clearfix").css("opacity", "0.3");
                                                                                                                             $(".top").css("opacity", "0.3");
                                                                                                                             $(".topbar").css("opacity", "0.3");
                                                                                                                             $(".bottom").css("opacity", "0.3");
                                                                                                                             $(".social").css("opacity", "0.3");
                                                                                                                             $(".myDivide").css("opacity", "0.3");
                                                                                                                             $(".toptext").css("opacity", "0.3");
                                                                                                                             $(".bottomtext").css("opacity", "0.3");
                                                                                                                             $(".precentLeft").css("opacity", "0.3");
                                                                                                                             $("#v2").css("opacity", "0.3");

                                                                                                                            $("#sidebar3").hover(function(){
                                                                                                                                $('#info1').show();
                                                                                                                            },function(){
                                                                                                                                $('#info1').hide();
                                                                                                                            });
                                                                                                                            $("#text3").hover(function(){
                                                                                                                                $('#info1').show();
                                                                                                                            },function(){
                                                                                                                                $('#info1').hide();
                                                                                                                            }); 

                                                                                                                            // $("#sidebar10").hover(function(){                                                                                                                           $("#sidebar10").hover(function(){
                                                                                                                            //     $('#info2').show();
                                                                                                                            // },function(){
                                                                                                                            //     $('#info2').hide();
                                                                                                                            // }); 

                                                                                                                            $("#sidebar10").hover(function(){
                                                                                                                                $('#info2').show();
                                                                                                                            },function(){
                                                                                                                                $('#info2').hide();
                                                                                                                            }); 

                                                                                                                            $("#text10").hover(function(){
                                                                                                                                $('#info2').show();
                                                                                                                            },function(){
                                                                                                                                $('#info2').hide();
                                                                                                                            }); 




                                                                                                            });
                                                                                                    });
                                                                                              });
                                                                                        });
                                                                                  });

                                                                            });
                                                                    });
                                                            });
                                                    });
                                            });

                                 
                             






          
                }

        }

        else{

            $(".yetNot100").css("width", "190px");
            $(".moneyc3").css("display", "none");

        }


  });

          ////////////////////////////////////////////////////// ------ Dragging ------- //////////////////////////////////////////////////////


    $('#dragbar1').mousedown(function(e){

           $("#r2").css("display", "none");
            e.preventDefault();
            console.log("im in mousedown 2");
   
            dragging1 = true;
            var sidebar1 = $('#sidebar1');
            var ghostbar1 = $('<div>',
                             {id:'ghostbar1',css: {top: sidebar1.offset().top}
                            }).appendTo('body');

            $(document).mousemove(function(e){
             ghostbar1.css("top",e.pageY+2);
            });
    });

    $('#dragbar2').mousedown(function(e){
           
           $("#r2").css("display", "none"); 
           e.preventDefault();           
           dragging2 = true;
           var sidebar2 = $('#sidebar2');
           var ghostbar2 = $('<div>',
                            {id:'ghostbar2',css: {top: sidebar2.offset().top}
                          }).appendTo('body');
            $(document).mousemove(function(e){
             ghostbar2.css("top",e.pageY+2);
           });
    });

    $('#dragbar3').mousedown(function(e){

      $("#r2").css("display", "none");
           e.preventDefault();          
           dragging3 = true;
           var sidebar3 = $('#sidebar3');
           var ghostbar3 = $('<div>',
                            {id:'ghostbar3',css: {top: sidebar3.offset().top}
                          }).appendTo('body');
            $(document).mousemove(function(e){
              ghostbar3.css("top",e.pageY+2);
           });   
    });

    $('#dragbar4').mousedown(function(e){

      $("#r2").css("display", "none");

           e.preventDefault();
           
           dragging4 = true;
           var sidebar4 = $('#sidebar4');
           var ghostbar4 = $('<div>',
                            {id:'ghostbar4',css: {top: sidebar4.offset().top}
                          }).appendTo('body');           
            $(document).mousemove(function(e){
              ghostbar4.css("top",e.pageY+2);
           });
    });

    $('#dragbar5').mousedown(function(e){

      $("#r2").css("display", "none");
           e.preventDefault();
           
           dragging5 = true;
           var sidebar5 = $('#sidebar5');
           var ghostbar5 = $('<div>',
                            {id:'ghostbar5',css: {top: sidebar5.offset().top}
                          }).appendTo('body');
           
            $(document).mousemove(function(e){
              ghostbar5.css("top",e.pageY+2);
           });
    });

    $('#dragbar6').mousedown(function(e){

      $("#r2").css("display", "none");
           e.preventDefault();
           
           dragging6 = true;
           var sidebar6 = $('#sidebar6');
           var ghostbar6 = $('<div>',
                            {id:'ghostbar6',css: {top: sidebar6.offset().top}
                          }).appendTo('body');
           
            $(document).mousemove(function(e){
              ghostbar6.css("top",e.pageY+2);
           });
    });

    $('#dragbar7').mousedown(function(e){

      $("#r2").css("display", "none");
           e.preventDefault();
           
           dragging7 = true;
           var sidebar7 = $('#sidebar7');
           var ghostbar7 = $('<div>',
                            {id:'ghostbar7',css: {top: sidebar7.offset().top}
                          }).appendTo('body');
           
            $(document).mousemove(function(e){
              ghostbar7.css("top",e.pageY+2);
           });
    });

    $('#dragbar8').mousedown(function(e){

      $("#r2").css("display", "none");
           e.preventDefault();
           
           dragging8 = true;
           var sidebar8 = $('#sidebar8');
           var ghostbar8 = $('<div>',
                            {id:'ghostbar8',css: {top: sidebar8.offset().top}
                          }).appendTo('body');
           
            $(document).mousemove(function(e){
              ghostbar8.css("top",e.pageY+2);
           });
    });

    $('#dragbar9').mousedown(function(e){

      $("#r2").css("display", "none");
           e.preventDefault();
           
           dragging9 = true;
           var sidebar9 = $('#sidebar9');
           var ghostbar9 = $('<div>',
                            {id:'ghostbar9',css: {top: sidebar9.offset().top}
                          }).appendTo('body');
           
            $(document).mousemove(function(e){
              ghostbar9.css("top",e.pageY+2);
           });
    });

    $('#dragbar10').mousedown(function(e){

      $("#r2").css("display", "none");
           e.preventDefault();
           
           dragging10 = true;
           var sidebar10 = $('#sidebar10');
           var ghostbar10 = $('<div>',
                            {id:'ghostbar10',css: {top: sidebar10.offset().top}
                          }).appendTo('body');
           
            $(document).mousemove(function(e){
              ghostbar10.css("top",e.pageY+2);
           });
    });


      $( document ).ready(function() {
        $sidebar1 = 1;
        $sidebar2 = 1;
        $sidebar3 = 1;
        $sidebar4 = 1;
        $sidebar5 = 1;
        $sidebar6 = 1;
        $sidebar7 = 1;
        $sidebar8 = 1;
        $sidebar9 = 1;
        $sidebar10 = 1; 
    });
                      

   $(document).mouseup(function(e){
    
           if (dragging1) 
           { 
              $(".moneyc3").css("display", "none");

                          if (instruction == 1){
                                instruction = 2;
                                  $(".instruction").css("display", "block");
                                      $('.instruction').mousedown(function(e){
                                          $(".instruction").css("display", "none");
                                     });
                            }

                    var max_sidebar1 = 100 - ($sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + $sidebar6 + 
                                                  $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);

                       var sidebar1 = 100-((e.pageY / window.innerHeight) * 100);
                       $sidebar1 = parseInt(sidebar1*1.5) -18;

                       console.log("e.pageY: "+e.pageY);

                       if($sidebar1 >= max_sidebar1){

                          $sidebar1 = max_sidebar1;
                          $('#sidebar1').css("height", ($sidebar1)/1.6 + "%");
                          $("#text1").html($sidebar1  + "%");
                          $("#text1").css("bottom",  $sidebar1  / 1.6 +19 +"%");
                          $(".over100").css("display","block");
                          $('#ghostbar1').remove();
                          $('#new_ghostbar1').remove();
                          
                       }

                      if($sidebar1 < max_sidebar1){
                          $('#sidebar1').css("height", ($sidebar1)/1.6 + "%");
                          $("#text1").html($sidebar1 + "%");
                          $("#text1").css("bottom",($sidebar1)/1.6 +19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar1').remove();
                          $('#new_ghostbar1').remove();
                       } 

                      if($sidebar1 <= 1){

                          $sidebar1 = 1;
                          $('#sidebar1').css("height", 1 + "%");
                          $("#text1").html(1 + "%");
                          $("#text1").css("bottom", 19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar1').remove();
                          $('#new_ghostbar1').remove();
                      }

                  $('#ghostbar1').remove();
                  $('#new_ghostbar1').remove();
                  $(document).unbind('mousemove');
                  dragging1 = false;

                  var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 +
                                  $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10;
                  $("#precent1").html(sum + "%");
                  var fill = (sum - 10)*2.44;
                  $("#precentLeft").css("width", fill+"px");

           }

           
           if (dragging2) 
           {
              $(".moneyc3").css("display", "none");

                    if (instruction == 1){
                          instruction = 2;
                            $(".instruction").css("display", "block");
                                $('.instruction').mousedown(function(e){
                                    $(".instruction").css("display", "none");
                                });
                    }   

                 var max_sidebar2 = 100 - ($sidebar1 + $sidebar3 + $sidebar4 + $sidebar5 + $sidebar6 + 
                                    $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);

                       var sidebar2 = 100-((e.pageY / window.innerHeight) * 100);
                       $sidebar2 = parseInt(sidebar2*1.5)-18;

                       if($sidebar2 >= max_sidebar2){

                          $sidebar2 = max_sidebar2;
                          $('#sidebar2').css("height",($sidebar2)/1.6 + "%");
                          $("#text2").html($sidebar2 + "%");
                          $("#text2").css("bottom", ($sidebar2)/1.6  + 19 + "%");
                          $(".over100").css("display",  "block");
                          $('#ghostbar2').remove();
                          $('#new_ghostbar2').remove();

                       }

                       if($sidebar2 < max_sidebar2){

                          $('#sidebar2').css("height", ($sidebar2)/1.6 + "%");
                          $("#text2").html($sidebar2 + "%");
                          $("#text2").css("bottom", ($sidebar2)/1.6 + 19 +"%");
                          $(".over100").css("display",  "none");             
                          $('#ghostbar2').remove();
                          $('#new_ghostbar2').remove();
                       }

                       if($sidebar2 <= 1){

                          $sidebar2 = 1;
                          $('#sidebar2').css("height", 1 + "%");
                          $("#text2").html(1 + "%");
                          $("#text2").css("bottom",19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar2').remove();
                          $('#new_ghostbar2').remove();                          
                       }

                  $('#ghostbar2').remove();
                  $('#new_ghostbar2').remove();
                  $(document).unbind('mousemove');
                  dragging2 = false;

                  var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 +
                                  $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10;
                  $("#precent1").html(sum + "%");
                  var fill = (sum - 10)*2.44;
                  $("#precentLeft").css("width", fill+"px");
           }


           if (dragging3) 
           {
                $(".moneyc3").css("display", "none");

                    if (instruction == 1){
                          instruction = 2;
                            $(".instruction").css("display", "block");
                                $('.instruction').mousedown(function(e){
                                    $(".instruction").css("display", "none");
                                });
                    }              

              var max_sidebar3 = 100 - ($sidebar1 + $sidebar2 + $sidebar4 + $sidebar5 + $sidebar6 + 
                                    $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);

                       var sidebar3 = 100-((e.pageY / window.innerHeight) * 100);
                       $sidebar3 = parseInt(sidebar3*1.5)-18; 

                       if($sidebar3 >= max_sidebar3){

                          $sidebar3 = max_sidebar3;
                          $('#sidebar3').css("height", ($sidebar3)/1.6  + "%");
                          $("#text3").html($sidebar3 + "%");
                          $("#text3").css("bottom",($sidebar3)/1.6  + 19 +"%");
                          $(".over100").css("display",  "block");
                          $('#ghostbar3').remove();
                          $('#new_ghostbar3').remove();

                       }

                       if($sidebar3 < max_sidebar3){

                          $('#sidebar3').css("height", ($sidebar3)/1.6 + "%");
                          $("#text3").html($sidebar3 + "%");
                          $("#text3").css("bottom",($sidebar3)/1.6 + 19 +"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar3').remove();
                          $('#new_ghostbar3').remove();
                       }

                      if($sidebar3 <= 1){

                          $sidebar3 = 1;
                          $('#sidebar3').css("height", 1 + "%");
                          $("#text3").html(1 + "%");
                          $("#text3").css("bottom",19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar3').remove();
                          $('#new_ghostbar3').remove();
                      }

                  $('#ghostbar3').remove();
                  $('#new_ghostbar3').remove();
                  $(document).unbind('mousemove');
                  dragging3 = false;

                  var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 +
                                  $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10;
                  $("#precent1").html(sum + "%");
                  var fill = (sum - 10)*2.44;
                  $("#precentLeft").css("width", fill+"px");
           }


           if (dragging4) 
           {

               $(".moneyc3").css("display", "none");

                    if (instruction == 1){
                          instruction = 2;
                            $(".instruction").css("display", "block");
                                $('.instruction').mousedown(function(e){
                                    $(".instruction").css("display", "none");
                                });
                    }  

              var max_sidebar4 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar5 + $sidebar6 + 
                                    $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);

                       var sidebar4 = 100-((e.pageY / window.innerHeight) * 100);
                       $sidebar4 = parseInt(sidebar4*1.5)-18; 

                       console.log("e.pageY: "+e.pageY);
                       console.log("$sidebar4 before: "+ $sidebar4);

                       if($sidebar4 >= max_sidebar4){

                        console.log(" if($sidebar4 > max_sidebar4)");

                          $sidebar4 = max_sidebar4;
                          $('#sidebar4').css("height", ($sidebar4)/1.6 + "%");
                          $("#text4").html(max_sidebar4 + "%");
                          $("#text4").css("bottom",($sidebar4)/1.6 +19+"%");
                          $(".over100").css("display",  "block");
                          $('#ghostbar4').remove();
                          $('#new_ghostbar4').remove();

                       }

                       if($sidebar4 < max_sidebar4){

                          $('#sidebar4').css("height", ($sidebar4)/1.6 + "%");
                          $("#text4").html($sidebar4 + "%");
                          $("#text4").css("bottom",($sidebar4)/1.6 +19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar4').remove();
                          $('#new_ghostbar4').remove();
                       }
                     
                        if($sidebar4 <= 1){

                          $sidebar4 = 1;
                          $('#sidebar4').css("height", 1 + "%");
                          $("#text4").html(1 + "%");
                          $("#text4").css("bottom",19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar4').remove();
                          $('#new_ghostbar4').remove();
                       }

                  $('#ghostbar4').remove();
                  $('#new_ghostbar4').remove();
                  $(document).unbind('mousemove');
                  dragging4 = false;

                  var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 +
                                  $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10;
                  $("#precent1").html(sum + "%");
                  var fill = (sum - 10)*2.44;
                  $("#precentLeft").css("width", fill+"px");
           }

           if (dragging5) 
           {
                 $(".moneyc3").css("display", "none");

                    if (instruction == 1){
                          instruction = 2;
                            $(".instruction").css("display", "block");
                                $('.instruction').mousedown(function(e){
                                    $(".instruction").css("display", "none");
                                });
                    }  

             var max_sidebar5 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar6 + 
                                    $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);

                       var sidebar5 = 100-((e.pageY / window.innerHeight) * 100);
                       $sidebar5 = parseInt(sidebar5*1.5)-18; 

                       if($sidebar5 >= max_sidebar5){
                          //console.log("hey");

                          $sidebar5 = max_sidebar5;
                          $('#sidebar5').css("height", ($sidebar5)/1.6 + "%");
                          $("#text5").html(max_sidebar5 + "%");
                          $("#text5").css("bottom",($sidebar5)/1.6 +19+"%");                       
                          $(".over100").css("display",  "block");  
                          $('#ghostbar5').remove();
                          $('#new_ghostbar5').remove();

                       }

                       if($sidebar5 < max_sidebar5){

                          $('#sidebar5').css("height", ($sidebar5)/1.6 + "%");
                          $("#text5").html($sidebar5 + "%");
                          $("#text5").css("bottom",($sidebar5)/1.6 +19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar5').remove();
                          $('#new_ghostbar5').remove();
                       }
   
                      if($sidebar5 <= 1){

                          $sidebar5 = 1;
                          $('#sidebar5').css("height", 1 + "%");
                          $("#text5").html(1 + "%");
                          $("#text5").css("bottom",19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar5').remove();
                          $('#new_ghostbar5').remove();
                      }

                  $('#ghostbar5').remove();
                  $('#new_ghostbar5').remove();
                  $(document).unbind('mousemove');
                  dragging5 = false;

                  var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 +
                                  $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10;
                  $("#precent1").html(sum + "%");
                  var fill = (sum - 10)*2.44;
                  $("#precentLeft").css("width", fill+"px");
           }

           if (dragging6) 
           {

               $(".moneyc3").css("display", "none");

                    if (instruction == 1){
                          instruction = 2;
                            $(".instruction").css("display", "block");
                                $('.instruction').mousedown(function(e){
                                    $(".instruction").css("display", "none");
                                });
                    }  

             var max_sidebar6 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                    $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);
 
                       var sidebar6 =100-((e.pageY / window.innerHeight) * 100);
                       $sidebar6 = parseInt(sidebar6*1.5)-18; 

                       if($sidebar6 >= max_sidebar6){

                          $sidebar6 = max_sidebar6;
                          $('#sidebar6').css("height", ($sidebar6)/1.6 + "%");
                          $("#text6").html(max_sidebar6 + "%");
                          $("#text6").css("bottom",($sidebar6)/1.6 +19+"%");
                          $(".over100").css("display",  "block");
                          $('#ghostbar6').remove();
                          $('#new_ghostbar6').remove();
                       }

                       if($sidebar6 < max_sidebar6){

                          $('#sidebar6').css("height", ($sidebar6)/1.6 + "%");
                          $("#text6").html($sidebar6 + "%");
                          $("#text6").css("bottom",($sidebar6)/1.6 +19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar6').remove();
                          $('#new_ghostbar6').remove();
                       }

                      if($sidebar6 <= 1){

                          $sidebar6 = 1;
                          $('#sidebar6').css("height", 1 + "%");
                          $("#text6").html(1 + "%");
                          $("#text6").css("bottom",19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar6').remove();
                          $('#new_ghostbar6').remove();
                      }

                  $('#ghostbar6').remove();
                  $('#new_ghostbar6').remove();
                  $(document).unbind('mousemove');
                  dragging6 = false;

                  var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 +
                                  $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10;
                  $("#precent1").html(sum + "%");
                  var fill = (sum - 10)*2.44;
                  $("#precentLeft").css("width", fill+"px");
           }


           if (dragging7) 
           {
                $(".moneyc3").css("display", "none");

                    if (instruction == 1){
                          instruction = 2;
                            $(".instruction").css("display", "block");
                                $('.instruction').mousedown(function(e){
                                    $(".instruction").css("display", "none");
                                });
                    }  

           var max_sidebar7 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                    $sidebar6 + $sidebar8 + $sidebar9 + $sidebar10);

                       var sidebar7 = 100-((e.pageY / window.innerHeight) * 100);
                       $sidebar7 = parseInt(sidebar7 *1.5)-18; 

                       if($sidebar7 >= max_sidebar7){

                          $sidebar7 = max_sidebar7;
                          $('#sidebar7').css("height",  ($sidebar7)/1.6+"%");
                          $("#text7").html(max_sidebar7 + "%");
                          $("#text7").css("bottom",($sidebar7)/1.6 +19+"%");
                          $(".over100").css("display",  "block");
                          $('#ghostbar7').remove();
                          $('#new_ghostbar7').remove();
                       }

                       if($sidebar7 < max_sidebar7){

                          $('#sidebar7').css("height", ($sidebar7)/1.6+ "%");
                          $("#text7").html($sidebar7 + "%");
                          $("#text7").css("bottom",($sidebar7)/1.6+19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar7').remove();
                          $('#new_ghostbar7').remove();
                       }

                      if($sidebar7 <= 1){

                          $sidebar7 = 1;
                          $('#sidebar7').css("height", 1 + "%");
                          $("#text7").html(1 + "%");
                          $("#text7").css("bottom",19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar7').remove();
                          $('#new_ghostbar7').remove();
                      }

                  $('#ghostbar7').remove();
                  $('#new_ghostbar7').remove();
                  $(document).unbind('mousemove');
                  dragging7 = false;

                  var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 +
                                  $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10;
                  $("#precent1").html(sum + "%");
                  var fill = (sum - 10)*2.44;
                  $("#precentLeft").css("width", fill+"px");
           }

           if (dragging8) 
           {
                 $(".moneyc3").css("display", "none");

                    if (instruction == 1){
                          instruction = 2;
                            $(".instruction").css("display", "block");
                                $('.instruction').mousedown(function(e){
                                    $(".instruction").css("display", "none");
                                });
                    }  

             var max_sidebar8 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                    $sidebar6 + $sidebar7 + $sidebar9 + $sidebar10);
 
                       var sidebar8 = 100-((e.pageY / window.innerHeight) * 100);
                       $sidebar8 = parseInt(sidebar8 *1.5)-18; 

                       if($sidebar8 >= max_sidebar8){

                          $sidebar8 = max_sidebar8;
                          $('#sidebar8').css("height", ($sidebar8)/1.6 + "%");
                          $("#text8").html(max_sidebar8 + "%");
                          $("#text8").css("bottom",($sidebar8)/1.6 +19+"%");
                          $(".over100").css("display",  "block");
                          $('#ghostbar8').remove();
                          $('#new_ghostbar8').remove();
                       }

                       if($sidebar8 < max_sidebar8){

                          console.log("elseeeee");

                          $('#sidebar8').css("height", ($sidebar8)/1.6 + "%");
                          $("#text8").html($sidebar8 + "%");
                          $("#text8").css("bottom",($sidebar8)/1.6 +19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar8').remove();
                          $('#new_ghostbar8').remove();
                       }
                     
                      if($sidebar8 <= 1){

                          $sidebar8 = 1;
                          $('#sidebar8').css("height", 1 + "%");
                          $("#text8").html(1 + "%");
                          $("#text8").css("bottom",19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar8').remove();
                          $('#new_ghostbar8').remove();
                      }                  

                  $('#ghostbar8').remove();
                  $('#new_ghostbar8').remove();
                  $(document).unbind('mousemove');
                  dragging8 = false;

                  var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 +
                                  $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10;
                  $("#precent1").html(sum + "%");
                  var fill = (sum - 10)*2.44;
                  $("#precentLeft").css("width", fill+"px");
           }

           if (dragging9) 
           {
              $(".moneyc3").css("display", "none");

                    if (instruction == 1){
                          instruction = 2;
                            $(".instruction").css("display", "block");
                                $('.instruction').mousedown(function(e){
                                    $(".instruction").css("display", "none");
                                });
                    }  

              var max_sidebar9 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                    $sidebar6 + $sidebar7 + $sidebar8 + $sidebar10);
 
                       var sidebar9 = 100-((e.pageY / window.innerHeight) * 100);
                       $sidebar9 = parseInt(sidebar9 *1.5)-18; 

                       if($sidebar9 >= max_sidebar9){

                          $sidebar9 = max_sidebar9;
                          $('#sidebar9').css("height",($sidebar9)/1.6  +"%");
                          $("#text9").html(max_sidebar9 + "%");
                          $("#text9").css("bottom",($sidebar9)/1.6  +19+"%");
                          $(".over100").css("display",  "block");
                          $('#ghostbar9').remove();
                          $('#new_ghostbar9').remove();
                       }

                       if($sidebar9 < max_sidebar9){

                          $('#sidebar9').css("height", ($sidebar9)/1.6 + "%");
                          $("#text9").html($sidebar9 + "%");
                          $("#text9").css("bottom",($sidebar9)/1.6 +19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar9').remove();
                          $('#new_ghostbar9').remove();
                       }

                      if($sidebar9 <= 1){

                          $sidebar9 = 1;
                          $('#sidebar9').css("height", 1 + "%");
                          $("#text9").html(1 + "%");
                          $("#text9").css("bottom",19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar9').remove();
                          $('#new_ghostbar9').remove();
                      }                  


                  $('#ghostbar9').remove();
                  $('#new_ghostbar9').remove();
                  $(document).unbind('mousemove');
                  dragging9 = false;

                  var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 +
                                  $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10;
                  $("#precent1").html(sum + "%");
                  var fill = (sum - 10)*2.44;
                  $("#precentLeft").css("width", fill+"px");
           }


           if (dragging10) 
           {
                $(".moneyc3").css("display", "none");

                    if (instruction == 1){
                          instruction = 2;
                            $(".instruction").css("display", "block");
                                $('.instruction').mousedown(function(e){
                                    $(".instruction").css("display", "none");
                                });
                    }  

              var max_sidebar10 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                    $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9);
 
                       var sidebar10 = 100-((e.pageY / window.innerHeight) * 100);
                       $sidebar10 = parseInt(sidebar10 *1.5)-18; 

                       if($sidebar10 >= max_sidebar10){

                          $sidebar10 = max_sidebar10;
                          $('#sidebar10').css("height", ($sidebar10)/1.6  + "%");
                          $("#text10").html(max_sidebar10 + "%");
                          $("#text10").css("bottom",($sidebar10)/1.6 +19+"%");
                          $(".over100").css("display",  "block");
                          $('#ghostbar10').remove();
                          $('#new_ghostbar10').remove();
                       }

                       if($sidebar10 < max_sidebar10){
                          $('#sidebar10').css("height", ($sidebar10)/1.6 + "%");
                          $("#text10").html($sidebar10 + "%");
                          $("#text10").css("bottom",($sidebar10)/1.6 +19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar10').remove();
                          $('#new_ghostbar10').remove();
                       }

                        if($sidebar10 <= 1){

                          $sidebar10 = 1;
                          $('#sidebar10').css("height", 1 + "%");
                          $("#text10").html(1 + "%");
                          $("#text10").css("bottom",19+"%");
                          $(".over100").css("display",  "none");
                          $('#ghostbar10').remove();
                          $('#new_ghostbar10').remove();

                        }                  

                  $('#ghostbar10').remove();
                  $('#new_ghostbar10').remove();
                  $(document).unbind('mousemove');
                  dragging10 = false;

                  var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 +
                                  $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10;
                  $("#precent1").html(sum + "%");
                  var fill = (sum - 10)*2.44;
                  $("#precentLeft").css("width", fill+"px");
           }


    });

});


