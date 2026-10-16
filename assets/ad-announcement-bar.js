
class AdvanceAnnouncementBar extends HTMLElement {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  connectedCallback() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll();
  }

  disconnectedCallback() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    this.classList.toggle("is-scrolled", window.scrollY > 10000);
  }
}

if (!customElements.get("ad-announcement-bar")) {
  customElements.define("ad-announcement-bar", AdvanceAnnouncementBar);
}
