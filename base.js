/**
 * @param {string} target_id
 * @return {Element} the resolved element in the dom tree
 */
const fn_resolve_fx_list = (target_id) => {
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
const fn_create_fx_item = (fx_list_container, title, descriptor, css_style) => {
  //clones a template of an fx_item element, which is a li (list item).
  //applies the new title
  //applies the new descriptor
};

const reduce_to_2decimals = (value)=>{
  //return Math.round(value*100.0)/100.0;
  return value.toPrecision(5);
}

const g_animation_style_one = "animdir_eg_1";
document.addEventListener("DOMContentLoaded", () => {
  //let a = fn_resolve_fx_list("test").querySelector
  //in 2023, DOM standard supported jquery like queries.
  let b_activated_style = false;
  let elm_eg_lnk = document.getElementById("example_1");
  let elm_body = document.body; //there is only 1 body element in the tree.
  if (elm_eg_lnk !== void 0) {
    console.log("found the toggler");

    elm_eg_lnk.addEventListener("click", function () {
      if (b_activated_style) {
        elm_body.classList.remove(g_animation_style_one);
        console.log("eg 1 is off");
      } else {
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

  let old_param = 0, tmp, fps_min = 999999, fps_max = 0, fps_avg = 0;
  //fps counter
  const perFrame = (param) => {
    
    tmp = param;
    param = param - old_param;
    old_param = tmp;
    fps_min = fps_min > param ? param : fps_min;
    fps_max = fps_max < param ? param: fps_max;

    //rolling average computation
    if(fps_avg == 0){
      fps_avg = param;
    }else{
      fps_avg = (param + fps_avg)/2;
    }

    let param_display = reduce_to_2decimals(1000/param);
    let display_fps_min = reduce_to_2decimals(1000/fps_min);
    let display_fps_max = reduce_to_2decimals(1000/fps_max);
    let display_fps_avg = reduce_to_2decimals(1000/fps_avg);
    elm_fps_counter.innerHTML = (param_display) + `fps (min ${display_fps_min}, max ${display_fps_max}, avg ${display_fps_avg})` ;
    
    window.requestAnimationFrame(perFrame);
  };

  //makes the first callback request for the
  window.requestAnimationFrame(perFrame);
});

class CSSToggler{
  constructor(){
    this.listener = ()=>{

    }
  }

  get listener(){
    return this.listener;
  }
}

class LinkToggler{
  constructor(elm_link, fn_toggle){
    this.elm_link = elm_link;
    this.fn_toggle = fn_toggle;

    this.initDOM();
  }

  initDOM(){
    //find the dom element that is going to be clicked on
    //attach event handler
    this.elm_link.addEventListener("click", (e)=>{

    });
  }
}