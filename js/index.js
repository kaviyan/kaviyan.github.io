$(document).ready(function () {

    var count=0;

    developer_animation();

    function developer_animation() {
        
        setTimeout(function() {
            count++;
            
            if (count==1){
            title="H";}

            else if (count==2){
            title="Ha";}

            else if (count==3){
            title="Hac";}
            
            else if (count ==4){
            title="Hack";}

            else if (count==5){
            title="Hacke";}

            else if (count==6){
            title="Hacker";
         }
        
         if (count!=7){
            $('.title').text(`I'm a ${title}`);
            developer_animation();
         }else if(count==7){
            count=0;
            setTimeout(function(){
                developer_animation();
            },1000);
            }
        },100);
    }
        



$('.see_resume').mouseenter(function(){

    $(this).css('background-color','rgb(230,216,32)');

})

$('.see_resume').mouseleave(function(){

    $(this).css('background-color','rgb(245,245,245)');

})

animate_title();
function animate_title(){
 
    setTimeout(function(){

                                
                $(".java_name").animate({ fontSize: "+=10px" }, 1000);
                $(".java_name").animate({ letterSpacing: "+=5px" }, 1000);
                $(".android_name").animate({ fontSize: "+=10px" },1000);
                $(".android_name").animate({ letterSpacing: "+=5px" }, 1000);   
                $(".adobe_name").animate({ fontSize: "+=10px" }, 1000);
                $(".adobe_name").animate({ letterSpacing: "+=5px" }, 1000);

                $(".java_name").animate({ fontSize: "-=10px" }, 1000);
                $(".java_name").animate({ letterSpacing: "-=5px" }, 1000);           
                $(".android_name").animate({ fontSize: "-=10px" }, 1000);
                $(".android_name").animate({ letterSpacing: "-=5px" }, 1000);               
                $(".adobe_name").animate({ fontSize: "-=10px" }, 1000);
                $(".adobe_name").animate({ letterSpacing: "-=5px" }, 1000);   
                
                animate_title();              
        
    }, 1000)
}




$(".project_name").text("My projects");
$(".project_content").text("This is my project content ")

var project_count=1;

$('.next').click(function(){
if(project_count==4){
    project_count=0;
}
   
    project_count++;
    $(".actual_img").attr("src","/image/project_"+project_count+".jpg");

    if(project_count==1){
        $(".project_name").text("My project");
        $(".project_content").text("This is my project content")
    }

    else if(project_count==2){
        $(".project_name").text("My project");
        $(".project_content").text("This is my project content 2")
    }

    else if(project_count==3){
        $(".project_name").text("My project");
        $(".project_content").text("This is my project content 3")
    }

    else if(project_count==4){
        $(".project_name").text("My project");
        $(".project_content").text("This is my project content 4")
    }

})

    
    $('.prev').click(function(){
        if(project_count==1){
            project_count=5;
        }
           
            project_count--;
            $(".actual_img").attr("src","/image/project_"+project_count+".jpg");
        
            if(project_count==1){
                $(".project_name").text("My project");
                $(".project_content").text("This is my project content")
            }
        
            else if(project_count==2){
                $(".project_name").text("My project");
                $(".project_content").text("This is my project content 2")
            }
        
            else if(project_count==3){
                $(".project_name").text("My project");
                $(".project_content").text("This is my project content 3")
            }
        
            else if(project_count==4){
                $(".project_name").text("My project");
                $(".project_content").text("This is my project content 4")
            }
        
        
  
    })
  

}) 
  
  
    

