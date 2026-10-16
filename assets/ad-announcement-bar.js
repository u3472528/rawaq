
class AdvanceAnnouncementBar extends HTMLElement {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.hideTimer = null;
    this.section = null;
  }

  connectedCallback() {
    const sectionId = this.dataset.sectionId;

    this.section = document.getElementById(`shopify-section-${sectionId}`);
    console.log(this.section)
    if (!this.section) return;

    this.section.style.transition = "transform 300ms ease";

    window.addEventListener("scroll", this.handleScroll, {
      passive: true
    });

    this.handleScroll();
  }

  disconnectedCallback() {
    window.removeEventListener("scroll", this.handleScroll);
    clearTimeout(this.hideTimer);
  }

  handleScroll() {
    if (!this.section) return;

    clearTimeout(this.hideTimer);

    if (window.scrollY > 10) {
      this.section.style.display = "";
      this.section.style.transform = "translateY(-50px)";

      this.hideTimer = setTimeout(() => {
        if (window.scrollY > 10 && this.section) {
          this.section.style.display = "none";
        }
      }, 300);
    } else {
      this.section.style.display = "";
      this.section.style.transform = "translateY(0)";
    }
  }
}

if (!customElements.get("ad-announcement-bar")) {
  customElements.define("ad-announcement-bar",AdvanceAnnouncementBar);
}
