import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/item';
import '@vaadin/list-box';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('list-box-separators')
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
      <vaadin-list-box multiple .selectedValues="${[0, 2, 3]}">
        <vaadin-item>Show assignee</vaadin-item>
        <vaadin-item>Show due date</vaadin-item>
        <vaadin-item>Show status</vaadin-item>
        <hr />
        <vaadin-item>Show thumbnail</vaadin-item>
        <vaadin-item>Show preview</vaadin-item>
      </vaadin-list-box>
      <!-- end::snippet[] -->
    `;
  }
}
