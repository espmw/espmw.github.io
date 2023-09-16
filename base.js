/**
         * @param {string} target_id
         * @return {Element} the resolved element in the dom tree
         */
const fn_resolve_fx_list = (target_id)=>{
    //it doesn't create the fx list element, rather it finds the existing one
};


/**
 * 
 * @param {Element} elm_fx_list_container
 * @param {string} title supplies the title
 * @param {string} descriptor supplies the descriptor (the part that appears when info is expanded)
 * @param {string} css_style is the parameter that supplies the style name to toggle (the effect)
 * @return {bool} true when it succeeds.
 */
const fn_create_fx_item = (fx_list_container, title, descriptor, css_style)=>{
    //clones a template of an fx_item element, which is a li (list item).

    //applies the new title

    //applies the new descriptor



};


const g_animation_style_one = "animdir_eg_1";
document.addEventListener("DOMContentLoaded", ()=>{

    //let a = fn_resolve_fx_list("test").querySelector
    //in 2023, DOM standard supported jquery like queries.
    let b_activated_style = false;
    let elm_eg_lnk = document.getElementById("example_1");
    let elm_body = document.body; //there is only 1 body element in the tree.
    if (elm_eg_lnk !== void 0){
        console.log("found the toggler");

        elm_eg_lnk.addEventListener("click", function(){
            if(b_activated_style){
                elm_body.classList.remove(g_animation_style_one); 
                console.log("eg 1 is off");    
            }else{
                elm_body.classList.add(g_animation_style_one);
                console.log("eg 1 is on");
            } 

            //less verbose but perhaps slower
            //elm_eg_lnk.classList.toggle(g_animation_style_one);

            b_activated_style = !b_activated_style;
        });
    }

    //cache (compute once, save the result) strategy
    let elm_fps_counter = document.querySelector(".fps-counter");
    
    
    //fps counter
    const perFrame = (param)=>{
        elm_fps_counter.innerHTML = "param val: " + param;
        //window.requestAnimationFrame(perFrame);
    }

    //makes the first callback request for the
    window.requestAnimationFrame(perFrame);

});