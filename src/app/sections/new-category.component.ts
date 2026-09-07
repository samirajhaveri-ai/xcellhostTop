import { ChangeDetectionStrategy, Component } from '@angular/core';

interface CategoryCard {
  readonly icon: string;
  readonly eyebrow: string;
  readonly title: string;
}

interface ProviderCard {
  readonly icon: string;
  readonly title: string;
  readonly body: string;
}

const CATEGORY_CARDS: readonly CategoryCard[] = [
  { icon: 'deployed_code', eyebrow: 'Hyperscalers', title: 'Infrastructure' },
  { icon: 'build', eyebrow: 'Managed service providers', title: 'Effort' },
  { icon: 'explore', eyebrow: 'Consultancies', title: 'Advice' },
];

const PROVIDER_CARDS: readonly ProviderCard[] = [
  { icon: 'cloud', title: 'AWS', body: 'Sells infrastructure.' },
  { icon: 'account_tree', title: 'Azure', body: 'Sells ecosystem.' },
  { icon: 'memory', title: 'Google Cloud', body: 'Sells AI.' },
  { icon: 'groups', title: 'Traditional MSPs', body: 'Sell managed services.' },
];

@Component({
  selector: 'xh-new-category',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="new-category" aria-labelledby="new-category-title">
      <div class="wrap">
        <div class="new-category-intro">
          <span class="new-category-kicker">A new category</span>
          <h2 id="new-category-title">The market sells you parts. You are accountable for the whole.</h2>
          <p>So we stopped selling a layer. XcellHost is a Cloud Experience Platform: the outcome is the product, and everything beneath it is ours to assemble and operate.</p>
        </div>

        <div class="category-cards">
          @for (card of categoryCards; track card.title) {
            <article class="category-card">
              <span class="category-card-icon material-symbols-outlined" aria-hidden="true">{{ card.icon }}</span>
              <div>
                <span class="category-card-eyebrow">{{ card.eyebrow }}</span>
                <h3>{{ card.title }}</h3>
              </div>
              <span class="category-card-note">You still own<br />the outcome</span>
            </article>
          }
        </div>
      </div>

      <div class="new-category-proof wrap">
        <p class="new-category-statement">We don't resell a hyperscaler layer and add margin. <strong>The infrastructure is ours, in our own in-country facilities.</strong> That is why we can commit to the outcome instead of the invoice.</p>
        <div class="provider-comparison">
          <div class="provider-intro">
            <h3>Where everyone sits</h3>
            <p>Not better or worse &mdash; a different unit of sale, and a different amount left on your desk.</p>
          </div>
          @for (provider of providerCards; track provider.title) {
            <article class="provider-card">
              <span class="material-symbols-outlined" aria-hidden="true">{{ provider.icon }}</span>
              <h4>{{ provider.title }}</h4>
              <p>{{ provider.body }}</p>
            </article>
          }
          <article class="provider-outcome">
            <h3><span class="material-symbols-outlined" aria-hidden="true">cloud</span> XcellHost</h3>
            <strong>Delivers sovereign, intelligent business experiences.</strong>
            <p>You bring the objective.<br />We deliver everything under it.</p>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class NewCategoryComponent {
  readonly categoryCards = CATEGORY_CARDS;
  readonly providerCards = PROVIDER_CARDS;
}
