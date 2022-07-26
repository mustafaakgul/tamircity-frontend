import store from "../store/store"

export default function NextStep(beforeStepId, nextStepId) {
    console.log("Nextstep removeelement:" + beforeStepId +" addelement: "+ nextStepId)
    let before_element = "#" + beforeStepId;
    let before_element_tab = "#" + beforeStepId+"Tab";
    let next_element = "#" + nextStepId;
    let next_element_tab = "#" + nextStepId+"Tab";

    $(next_element).removeClass("disabled")
    $(before_element).removeClass("active")
    $(before_element_tab).removeClass("active show")
    $(next_element).addClass("active")
    $(next_element_tab).addClass("active show")

}