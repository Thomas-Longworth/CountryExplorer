
import React from 'react';
import { mount } from '@cypress/react';
import Country from '../../src/components/Country'; 
import { CountryContext } from '../../src/Contexts/CountryContext'; 

describe('Country Component', () => { 
  it('displays "No countries to display yet" when countryData is empty', () => {
    mount(
      <CountryContext.Provider value={{ countryData: [] }}>
        <Country />
      </CountryContext.Provider>
    );
    cy.contains('No countries to diplay yet').should('be.visible');
  });

  it('renders countries properly when provided with data', () => {
    const mockData = [{
      name: { official: 'USA' },
      flags: { png: 'usa-flag.png' },
      region: 'North America',
      capital: 'Washington D.C.',
      population: 331002651,
      area: 9833520
    }];
    mount(
      <CountryContext.Provider value={{ countryData: mockData }}>
        <Country />
      </CountryContext.Provider>
    );

    cy.get('[data-cy=country-name]').should('contain', 'USA');
    cy.get('.card-img-top').should('have.attr', 'src', 'usa-flag.png');
    cy.get('.card-title').should('contain', 'USA');
    cy.get('.list-group-item').should('contain', 'North America');
    cy.get('.list-group-item').should('contain', 'Washington D.C.');
    cy.get('.list-group-item').should('contain', '331002651');
    cy.get('.list-group-item').should('contain', '9833520');
  });

});