import { activateAccordion } from '../accordion';
import './home.css';
import { getPrinciples } from '../principles-list';
import { readCreditsFile } from '../utility';

const app = document.getElementById('root');
if (app) {
  getPrinciples().then(data => {
    app.innerHTML = `<div class="principles-container">
  <ul class="principles-list-container">${data
    .map(
      principle => `<li class="accordion">
    <div class="title-row">
      <div class="title">${principle.title}</div>
    </div>
    <div class="panel">
        <p class="description">${principle.description}</p>
        <div class="code-container">
          <div class="code">
            <div class="code-section-header">Before</div>
            <code><pre>${principle.codeBefore}</pre></code>
          </div>
          <div class="code">
            <div class="code-section-header">After</div>
            <code><pre>${principle.codeAfter}</pre></code>
          </div>
        </div>
    </div>
    </li>`
    )
    .join('')}
  </ul>
  </div>`;
    activateAccordion();
    readCreditsFile().then(text => {
      const creditEle = document.getElementById('credits')!;
      creditEle.innerHTML = `<pre>${text}</pre>`;
    });
  });
}
