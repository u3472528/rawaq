
class AdvanceAnnouncementBar extends HTMLElement {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.section = null;
    this.hideTimer = null;
  }

  connectedCallback() {
    const sectionId = this.dataset.sectionId;

    this.section = document.getElementById(
      `shopify-section-${sectionId}`
    );

    if (!this.section) {
      console.warn("Announcement section not found:", sectionId);
      return;
    }

    this.section.style.transition = "transform 300ms ease";
    this.section.style.willChange = "transform";

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
      // Animate upward
      this.section.style.transform = "translateY(-100%)";

      this.hideTimer = setTimeout(() => {
        if (window.scrollY > 10 && this.section) {
          this.section.style.visibility = "hidden";
          this.section.style.pointerEvents = "none";
        }
      }, 300);
    } else {
      // Show when back at the top
      this.section.style.visibility = "visible";
      this.section.style.pointerEvents = "";
      this.section.style.transform = "translateY(0)";
    }
  }
}

if (!customElements.get("ad-announcement-bar")) {
  customElements.define(
    "ad-announcement-bar",
    AdvanceAnnouncementBar
  );
}
