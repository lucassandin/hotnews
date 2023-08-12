import React from 'react';
import { mount } from 'cypress/react18';
import Button from './Button';

describe('<Button /> Component', () => {
  it('renders with text', () => {
    const buttonText = 'Click me';

    mount(<Button text={buttonText} />);

    cy.contains(buttonText).should('be.visible');
  });

  it('executes onClick callback when clicked', () => {
    const buttonText = 'Click me';
    const onClickStub = cy.stub();

    mount(<Button onClick={onClickStub} text={buttonText} />);

    cy.contains(buttonText).click();
    cy.wrap(onClickStub).should('have.been.calledOnce');
  });
});
