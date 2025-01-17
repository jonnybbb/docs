import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/radio-group';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('radio-button-horizontal')
export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  protected override render() {
    return html`
      <!-- tag::snippet[] -->
      <vaadin-radio-group label="Status" theme="horizontal">
        <vaadin-radio-button value="pending" label="Pending" checked></vaadin-radio-button>
        <vaadin-radio-button value="submitted" label="Submitted"></vaadin-radio-button>
        <vaadin-radio-button value="confirmed" label="Confirmed"></vaadin-radio-button>
      </vaadin-radio-group>
      <!-- end::snippet[] -->
    `;
  }
}
