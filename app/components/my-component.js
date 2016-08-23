import Ember from 'ember';

export default Ember.Component.extend({
  layout: Ember.HTMLBars.compile(`
    From template 3<br>
    From JS: {{prop1}}
    {{yield}}
  `),
  prop1: 'Hi3'
});
