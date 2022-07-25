import store from "../store/store"

export default function NextStep(removeElementId, addElementId) {
    console.log("Nextstep removeelement:" + removeElementId +" addelement: "+ addElementId)
    let remove_element = "#" + removeElementId;
    let remove_element_tab = "#" + removeElementId+"Tab";
    let add_element = "#" + addElementId;
    let add_element_tab = "#" + addElementId+"Tab";

    $(add_element).removeClass("disabled")
    $(remove_element).removeClass("active")
    $(remove_element_tab).removeClass("active show")
    $(add_element).addClass("active")
    $(add_element_tab).addClass("active show")

}