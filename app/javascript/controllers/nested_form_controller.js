import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="nested-form"
export default class extends Controller {
  static targets = ["links", "template", "form"];

  add_association(e) {
    e.preventDefault();
    const content = this.templateTarget.innerHTML.replace(
      /NEW_RECORD/g,
      new Date().getTime()
    );
    this.formTarget.insertAdjacentHTML("afterend", content);
  }

  remove_association(e) {
    e.preventDefault();
    let wrapper = e.target.closest(".nested-fields");
    if (wrapper.dataset.newRecord == "true") {
      wrapper.remove();
    } else {
      wrapper.querySelector("input[name*='_destroy']").value = 1;
      wrapper.style.display = "none";
    }
  }
}
