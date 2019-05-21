class NavLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // Get the custom data attribute on the Link
    // Using the custom data attribute get the associated Item element
    // Using the Item element, create a new instance of the NavItem class
    // Add a click event listener on this instance, calling the select method on click
    const navNumber = element.dataset.nav;
    this.element = element;
    this.data = element.data;
    this.itemElement = document.querySelector(
      `.jumbotron[data-nav="${navNumber}"]`
    );
    this.navItem = new NavItem(this.itemElement);
    element.addEventListener("click", () => this.select());
  }

  select() {
    // Get all of the elements with the tabs-link class
    // Using a loop or the forEach method remove the 'active' class from all of the links
    // Add a class named "active" to this link
    // Call the select method on the item associated with this link
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => link.classList.remove("active"));
    this.element.classList.add("active");
    this.navItem.select();
  }
}

class NavItem {
  // Assign this.element to the passed in element
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all ".jumbotron" elements from the DOM
    // Add the class "d-none" from each element
    // Remove the class named "d-none" to this element
    const items = document.querySelectorAll(".jumbotron");
    items.forEach(item => item.classList.add("d-none"));
    this.element.classList.remove("d-none");
  }
}

links = document.querySelectorAll(".nav-link");
links.forEach(link => {
  const navLink = new NavLink(link);
});
