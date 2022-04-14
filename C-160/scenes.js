//-------------------------------------------------------PROJECT C-160----------------------------------------------------//
//----------------------------------------------------/Stairways to Heaven/----------------------------------------------------//
//---------------------------------------------------------scenes.js-------------------------------------------//

//Registering a component to activate and handle the eventskyscraper list mechanism
AFRAME.registerComponent("scene-renderer",{

    //Schema
    schema:{},

    //Calling an init function
    init:function(){

        //Sourcing the button for intiating the main sequence
        continue_button_el=document.querySelector("#continue_btn")

        //Adding a "click" event listener to the button 
        continue_button_el.addEventListener("click",(e)=>{
          
           //Sourcing the introductory elements and ultimately removing them 
           intro_text=document.querySelector("#intro_txt")
           intro_text.remove()

           //Removing the continue button
           continue_button_el.remove()

           //Creating a text element indicating leftwards movement

           //// Giving the element, text, position attributes
           move_left_text_el=document.createElement("a-entity")
           move_left_text_el.setAttribute("text",{value:"Left Arrow - Move Left",width:12,color:"yellow",align:"center",font:"exo2bold"})
           move_left_text_el.setAttribute("position","-4 8 -10")

           //Creating a text element indicating rightwards movement

           //// Giving the element, text, position attributes
           move_right_text_el=document.createElement("a-entity")
           move_right_text_el.setAttribute("text",{value:"Right Arrow - Move right",width:12,color:"yellow",align:"center",font:"exo2bold"})
           move_right_text_el.setAttribute("position","4 8 -10")

           //Appedning both the aforementioned text elements as a child to the world
           this.el.appendChild(move_right_text_el)
           this.el.appendChild(move_left_text_el)


           //Creating a list of dictionaries, containing skyscaper details ~~(i)
           skyscrapers_list=[
               {name:"Burj Khalifa",index:0,image_path:"./images/burj_khalifa.jpeg",height:"828",location:"Dubai, UAE",rotation:"0 -53 0"},
               {name:"Shanghai Tower",index:1,image_path:"./images/shanghai_tower.jpeg",height:"632",location:"Shanghai, China",rotation:"0 -75 0"},
               {name:"Lotte World Tower",index:2,image_path:"./images/lotte_world_tower.jpg.webp",height:"554",location:"Seoul, South Korea",rotation:"0 -88 0"},
               {name:"One World Trade Center",index:3,image_path:"./images/one_world_trade_center.jpeg",height:"541",location:"New York City, USA",rotation:"0 -89.3 0"},
               {name:"Taipei 101",index:4,image_path:"./images/taipei_101.jpeg",height:"508",location:"Taipei, Taiwan",rotation:"0 -89 0"},
               {name:"Central Park Tower",index:5,image_path:"./images/central_park_tower.jpeg",height:"472",location:"New York City, USA",rotation:"0 -39 0"},
               {name:"Petronas Twin Towers",index:6,image_path:"./images/petronas_twin_towers.jpeg",height:"452",location:"Kuala Lumpur, Malaysia",rotation:"0 -68.5 0"}
           ]

           //Calling a function to represent the contents of the above list in an orderly manner, using user events -->to func.1
           this.showSkyscraper(skyscrapers_list)
        })
    },

    //--> func.1  
    showSkyscraper:function(list_arg){

        //Declaring a variable of value int 0 ~~(ii)
        var index=0
        
        //Sourcing the sky element and setting its image and rotation attributes to the 0th index of the list at (i)
        sky_el=document.querySelector("#sky_wrld")
        sky_el.setAttribute("src",list_arg[index].image_path)
        sky_el.setAttribute("rotation",list_arg[index].rotation)

        //Creating a text elements and giving them position and unique text attributes

        ////Name text
        text_name_el=document.createElement("a-entity")
        text_name_el.setAttribute("text",{value:list_arg[index].name,width:24,color:"white",align:"center",font:"exo2bold"})
        text_name_el.setAttribute("position","0 4 -10")

        ////Height text
        text_height_el=document.createElement("a-entity")
        text_height_el.setAttribute("text",{value:0,width:24,color:"white",align:"center",font:"exo2bold"})
        text_height_el.setAttribute("position","0 6 -10")

        ////Location text
        text_location_el=document.createElement("a-entity")
        text_location_el.setAttribute("text",{value:list_arg[index].location,width:15,color:"orange",align:"center",font:"exo2bold"})
        text_location_el.setAttribute("position","0 3 -10")

        //Declaring a new variable fo value int 0 ~~(iii)
        var to_height=0

        //Calling a setInterval function
        setInterval(()=>{

            //Assessing the contrast between the value of the variable at (iii) and the height property of the 0th index of the list at (i)
            ////Case-1 -The variable at (iii) is lesser than the height value
            if(to_height<parseInt(list_arg[index].height)){

                //Incrementing the variable at (iii) by a factor of 1
                to_height+=1

                //Setting the height text value to the variable at (iii)
                text_height_el.setAttribute("text",{value:to_height+"m"})   
                    }

            ////Case-2 -The variable at (iii) is equal to the height value     
            if(to_height===parseInt(list_arg[index].height)){

                        //Setting the color property to orange
                        text_height_el.setAttribute("text",{color:"orange"})
                    }
                },1)

        //Adding a "keydown" event listener        
        window.addEventListener("keydown",(e)=>{

            //Assessing the key pressed by the user
            ////Case-1 -The key is the left arrow
            if(e.key==="ArrowLeft"){

                //Declaring a new variable fo value int 0 ~~(iv)
                var to_height=0

                //Calling a setInterval function
                setInterval(()=>{

                    //Assessing the contrast between the value of the variable at (iv) and the height property of the 0th index of the list at (i)
                    ////Case-1 -The variable at (iv) is lesser than the height value
                    if(to_height<parseInt(list_arg[index].height)){

                        //Incrementing the variable at (iv) by a factor of int 1
                        to_height+=1

                        //Setting the height text value to the variable at (iv)
                        text_height_el.setAttribute("text",{value:to_height+"m"})
                        
                    }

                    ////Case-2 -The variable at (iv) is equal to the height value 
                    if(to_height===parseInt(list_arg[index].height)){

                        //Setting the color property to orange
                        text_height_el.setAttribute("text",{color:"orange"})
                    }
                },1)

                //Verifying whether the index variable at (ii) is equal to int 0 or not
                ////Case-1 -The variable is equal to int 0
                if(index===0){

                    //Setting the index variable at (ii) to int 6
                    index=6
                }

                ////Case (else) 
                else{

                 //Decremenitng the index varaiable at (ii) by a factor of int 1   
                 index-=1  
                }}

            ////Case-2 -The key is the right arrow    
            if(e.key==="ArrowRight"){

                ////Declaring a new variable fo value int 0 ~~(v)
                var to_height=0

                //Calling a setInterval function
                setInterval(()=>{

                    //Assessing the contrast between the value of the variable at (v) and the height property of the 0th index of the list at (i)
                    ////Case-1 -The variable at (v) is lesser than the height value
                    if(to_height<parseInt(list_arg[index].height)){

                        //Incrementing the variable at (v) by a factor of int 1
                        to_height+=1

                        //Setting the height text value to the variable at (v)
                        text_height_el.setAttribute("text",{value:to_height+"m"})
                        
                    }

                    ////Case-2 -The variable at (v) is equal to the height value 
                    if(to_height===parseInt(list_arg[index].height)){

                        //Setting the color property to orange
                        text_height_el.setAttribute("text",{color:"orange"})
                    }
                },1)

                //Verifying whether the index variable at (ii) is equal to int 6 or not
                ////Case-1 -The variable is equal to int 6
                if(index===6){

                    //Setting the index variable at (ii) to int 0
                    index=0
                }

                ////Case (else)
                else{

                 //Decremenitng the index varaiable at (ii) by a factor of int 1   
                 index+=1  
                }
            }    
 
                //Setting the image and rotation of the sky element in accordance with the repsetctive index at (ii) of the list at (i)
                sky_el.setAttribute("src",list_arg[index].image_path)
                sky_el.setAttribute("rotation",list_arg[index].rotation)
                
                //Setting the image and rotation of the text elements in accordance with the repsetctive index at (ii) of the list at (i)
                text_name_el.setAttribute("text",{value:list_arg[index].name,width:24,color:"white",align:"center",font:"exo2bold"})
                text_height_el.setAttribute("text",{value:list_arg[index].height+"m",width:24,color:"white",align:"center",font:"exo2bold"})
                text_location_el.setAttribute("text",{value:list_arg[index].location,width:15,color:"orange",align:"center",font:"exo2bold"})
        })

        //Appending the aforementioned elements as children to the world
        this.el.appendChild(text_name_el)
        this.el.appendChild(text_height_el)
        this.el.appendChild(text_location_el)
    }
})

//---------------------------------------------------------scenes.js-------------------------------------------//
//----------------------------------------------------/Stairways to Heaven/----------------------------------------------------//
//-------------------------------------------------------PROJECT C-160----------------------------------------------------//
