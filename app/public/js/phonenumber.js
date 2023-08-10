
$(function(){

    $("#mainBtn").click(function(){
        $("#modal").show('slow');
    });
    $("#mainBtn").click(function(){
        $("#blur").addClass("blur-sm");
    });
    $("#mainBtn").click(function(){
        $("#frmAddNewClient")[0].reset();
        $('#p1Lastname').hide();
        $('#p1Firstname').hide();
        $('#p1Phone').hide();
        $('#p1birthday').hide();


    
    })
     

});


$(function(){
       

    $("#create").click(function(){        

        let firstnameValue, lastnameValue, phoneValue, button, button2, tr, output, birthdayValue, phone2Value, phone3Value;        
        firstnameValue =$("#firstname").val();
        lastnameValue = $("#lastname").val();
        phoneValue = $("#phone").val();
        phone2Value = $("#phone2").val();
        phone3Value = $("#phone3").val();
        birthdayValue = $("#birthday").val();
        button = $("<button>").text("Edit").addClass("btn-edit bg-blue-500 rounded-md text-white");   
        button2 = $("<button>").text("Delete").addClass("btn-delete text-white ml-2 rounded-md bg-red-400");
        tr = $("<tr>");    
        
        $(".myInput").each(function(){
            let inputValue = $(this).val();
            output = "<td >" + inputValue + "</td>"; 
            $(tr).append(output); 
           
        });  

        $("p").hide();
        $(".myInput").removeClass("border-2 border-solid border-red-500");

        if (firstnameValue == '' &&lastnameValue == '' &&phoneValue == '' && birthdayValue == '' && phone2Value == '' && phone3Value == ''){
            $('#firstname').after("<p id='p1Firstname' class='ml-4 text-red-500 text-bold text-xs'>The Firstname field should not be left empty</p>");
            $('#firstname').addClass("border-2 border-solid border-red-500");
            $('#lastname').after("<p id='p1Lastname' class='ml-4 text-red-500 text-bold text-xs'>The Lastname field should not be left empty</p>");
            $('#lastname').addClass("border-2 border-solid border-red-500");
            $('#phone').after("<p id='p1Phone' class='ml-1 text-red-500 text-bold text-xs'>The Phone Number field should not be left empty</p>");
            $('#phone').addClass("border-2 border-solid border-red-500");
            $('#birthday').after("<p id='p1birthday' class='ml-4 text-red-500 text-bold text-xs'>Birthday date field should not be left empty</p>");
            $('#birthday').addClass("border-2 border-solid border-red-500");
            // $('#phone2').after("<p id='p1Phone2' class='ml-1 text-red-500 text-bold text-xs'>The Phone Number field should not be left empty</p>");
            // $('#phone2').addClass("border-2 border-solid border-red-500");
            // $('#phone3').after("<p id='p1Phone3' class='ml-1 text-red-500 text-bold text-xs'>The Phone Number field should not be left empty</p>");
            // $('#phone3').addClass("border-2 border-solid border-red-500");
            $("#create").click("off");
        }
        else if(birthdayValue == ''){
            $('#birthday').after("<p id='p1birthday' class='ml-4 text-red-500 text-bold text-xs'>Birthday date field should not be left empty</p>");
            $('#birthday').addClass("border-2 border-solid border-red-500");
            $("#create").click("off");
        } 
        else if($("#birthday").val().length > 10 ){
            $('#p1birthday').show().text("Number of characters should not be more than 10");
            $('#birthday').addClass("border-2 border-solid border-red-500");
            $("#create").click("off");
        }      
        
        else if (firstnameValue == ''){
            $('#firstname').after("<p id='p1Firstname' class='ml-4 text-red-500 text-bold text-xs'>The Firstname field should not be left empty</p>");
            $('#firstname').addClass("border-2 border-solid border-red-500");
            $("#create").click("off");
        }
        else if($("#firstname").val().length > 20 ){
            $('#p1Firstname').show().text("Number of characters should not be more than 20");
            $('#firstname').addClass("border-2 border-solid border-red-500");
            $("#create").click("off");              
        }        
        else if(lastnameValue == ''){
            $('#lastname').after("<p id='p1Lastname' class='ml-4 text-red-500 text-bold text-xs'>The Lastname field should not be left empty</p>");
            $('#lastname').addClass("border-2 border-solid border-red-500");
            $("#create").click("off");              
        }
        else if($("#lastname").val().length > 30 ){
            $('#p1Lastname').show().text("Number of characters should not be more than 30");
            $('#lastname').addClass("border-2 border-solid border-red-500");
            $("#create").click("off");
        }
        else if(phoneValue == ''){
            $('#phone').after("<p id='p1Phone' class='ml-1 text-red-500 text-bold text-xs'>The Phone Number field should not be left empty</p>");
            $('#phone').addClass("border-2 border-solid border-red-500");
            $("#create").click("off");
        }  
        else if($("#phone").val().length > 16 ){
            $('#p1Phone').show().text("Number of characters should not be more than 13");
            $('#phone').addClass("border-2 border-solid border-red-500");
            $("#create").click("off");
        } 
        // else if(phone2Value == ''){
        //     $('#phone2').after("<p id='p1Phone2' class='ml-1 text-red-500 text-bold text-xs'>The Phone Number field should not be left empty</p>");
        //     $('#phone2').addClass("border-2 border-solid border-red-500");
        //     $("#create").click("off");
        // }  
        // else if($("#phone2").val().length > 13 ){
        //     $('#p1Phone2').show().text("Number of characters should not be more than 13");
        //     $('#phone2').addClass("border-2 border-solid border-red-500");
        //     $("#create").click("off");
        // } 
        // else if(phone3Value == ''){
        //     $('#phone3').after("<p id='p1Phone3' class='ml-1 text-red-500 text-bold text-xs'>The Phone Number field should not be left empty</p>");
        //     $('#phone3').addClass("border-2 border-solid border-red-500");
        //     $("#create").click("off");
        // }  
        // else if($("#phone3").val().length > 13 ){
        //     $('#p1Phone3').show().text("Number of characters should not be more than 13");
        //     $('#phone3').addClass("border-2 border-solid border-red-500");
        //     $("#create").click("off");
        // } 

        
        $(tr).append(button);
        $(tr).append(button2);
        $("#tbody").append(tr);
                   
        $("#modal").hide('slow');
        $("#blur").removeClass("blur-sm");
        $("#epmptyTableNote").remove();

    });  
    
    
});



$(function(){
    $("body").on("click",".btn-delete",function(){
        $(this).parents('tr').remove();
    });
    $("body").on("click",".btn-edit",function(){
        
    let firstname = $(this).parents('tr').find('td:eq(0)').text();
    let lastname = $(this).parents('tr').find('td:eq(1)').text();
    let phone = $(this).parents('tr').find('td:eq(2)').text();

    $(this).parents('tr').find('td:eq(0)').html("<input type='text' class='edit-first-name text-center' value='" + firstname + "'>");
    $(this).parents('tr').find('td:eq(1)').html("<input type='text' class='edit-last-name text-center' value='" + lastname + "'>");
    $(this).parents('tr').find('td:eq(2)').html("<input type='text' class='edit-phone text-center' value='" + phone + "'>");
    $(this).parents('tr').append('<td class="p-0"><button type="button" class="btn-update bg-green-400 rounded-md text-white mr-14">Update</button></td>');
    $(this).hide();

    });

    $("body").on("click",".btn-update",function(){
        
        let input1 = $(this).parents("tr").find(".edit-first-name").text();
        let input2 = $(this).parents("tr").find(".edit-last-name").text();
        let input3 = $(this).parents("tr").find(".edit-phone").text();     
        
        $("#tbody").parents('tr').find('td:eq(0)').text(input1);
        $("#tbody").parents('tr').find('td:eq(1)').text(input2);
        $("#tbody").parents('tr').find('td:eq(2)').text(input3);


        $(this).parents("tr").find(".edit-first-name").prop('disabled',true);
        $(this).parents("tr").find(".edit-last-name").prop('disabled',true);
        $(this).parents("tr").find(".edit-phone").prop('disabled',true);   

        $(".btn-update").hide("fast");
        $(".btn-edit").show('fast');    
    });
});

$(function(){
    $("#search").on('keyup',function(){
        let value = $(this).val().toLowerCase();
        $("#tbody tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
       
    });
    
});








$( function() {
    $( "#birthday" ).datepicker();
} );

$( function() {

    var iconCounter = 0;
    var iconCounter2 = 0;
    var selector = document.getElementsByClassName('myPhoneInput')


    $(".close-icon").click(function(){
        $("#modal").hide();
        $("#blur").removeClass("blur-sm");
    });

        Inputmask("(099) 999-99-99").mask(selector);
    

        $(document).on("click", ".plus-icon1", function(){
            if(iconCounter < 1){
                iconCounter++;          
            $("#phone").after('<span class="minus-icon1 absolute top-22 left-2 cursor-pointer text-cyan-900 text-md"><i class="fa-solid fa-minus"></i></span><span class="plus-icon2 absolute top-22 right-2 cursor-pointer text-cyan-900 text-md"><i class="fa-solid fa-plus"></i></span><input id="phone2" type="number" placeholder="(0__) ___-__-__" maxlength="15" class="myPhoneInput block mt-7 mx-2 rounded-md px-2">');
            Inputmask("(099) 999-99-99").mask('myPhoneInput');

        }
        });

        $(document).on("click", ".plus-icon2", function(){
            if(iconCounter2 < 1){
                iconCounter2++;            
            $("#phone2").after('<span class="minus-icon2 absolute top-26 left-2 cursor-pointer text-cyan-900 text-md"><i class="fa-solid fa-minus"></i></span><input id="phone3" type="number" placeholder="(0__) ___-__-__" maxlength="15" class="myPhoneInput block mt-7 mx-2 rounded-md px-2">');
            Inputmask("(099) 999-99-99").mask(selector);


        }
        });     
   

        $(document).on("click", ".minus-icon2", function(){
            $("#phone3").hide();
            $(".minus-icon2").hide();
        });

        $(document).on("click", ".minus-icon1", function(){
            $("#phone2").hide();
            $(".minus-icon1").hide();
            $(".plus-icon2").hide();            
        });    

        
});






