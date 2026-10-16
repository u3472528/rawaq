
class AdvanceAnnouncementBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
  }
}

if (!customElements.get("ad-announcement-bar")) {
  customElements.define(
    "ad-announcement-bar",
    AdvanceAnnouncementBar
  );
}
