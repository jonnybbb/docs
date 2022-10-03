import 'Frontend/demo/init'; // hidden-source-line

import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@vaadin/horizontal-layout';
import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/password-field';
import '@vaadin/text-field';
import type { PasswordFieldValueChangedEvent } from '@vaadin/password-field';
import { applyTheme } from 'Frontend/generated/theme';

enum StrengthText {
  weak = 'weak',
  moderate = 'moderate',
  strong = 'strong',
}

enum StrengthColor {
  weak = 'var(--lumo-error-color)',
  moderate = '#e7c200',
  strong = 'var(--lumo-success-color)',
}

@customElement('input-field-helper')
export class Example extends LitElement {
  protected createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  @state()
  private strengthText: StrengthText = StrengthText.weak;

  @state()
  private strengthColor: StrengthColor = StrengthColor.weak;

  render() {
    return html`
      <vaadin-horizontal-layout theme="spacing">
        <!-- tag::snippet[] -->
        <vaadin-text-field
          label="Phone number"
          helper-text="Include country and area prefixes"
        ></vaadin-text-field>

        <vaadin-password-field
          label="Password"
          @value-changed="${this.onPasswordChanged}"
          reveal-button-hidden
        >
          <vaadin-icon
            icon="vaadin:check"
            slot="suffix"
            style="color:${StrengthText.strong}"
            ?hidden="${this.strengthText !== StrengthText.strong}"
          ></vaadin-icon>

          <div slot="helper">
            Password strength:
            <span style="color:${this.strengthColor}">${this.strengthText}</span>
          </div>
        </vaadin-password-field>
        <!-- end::snippet[] -->
      </vaadin-horizontal-layout>
    `;
  }

  private onPasswordChanged(e: PasswordFieldValueChangedEvent) {
    let strength: StrengthText = StrengthText.weak;
    if (e.detail.value) {
      if (e.detail.value.length > 9) {
        strength = StrengthText.strong;
      } else if (e.detail.value.length > 5) {
        strength = StrengthText.moderate;
      }
    }
    this.strengthText = strength;
    this.strengthColor = StrengthColor[strength];
  }
}
