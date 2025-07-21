describe('Buggy To-Do app', function () {  
  it('Verify the to-do task', () => {
    cy.visit("https://bug-test-swart.vercel.app/");

    // Verify the Header
    cy.get('.text-3xl').should('contain', 'Extensive Buggy To-Do App');

    // Toggle button
    cy.get('.flex > .p-2').click();

    // Enter task description
    cy.get('input[placeholder="Task description"]').type('First mission');

    // Select category
    cy.get('.bg-white > :nth-child(2) > .w-full').select('Work');

    // Set priority
    cy.get(':nth-child(2) > .mr-1').click();

    // Pick date
    cy.get('.react-datepicker__input-container > .w-full')
      .clear()
      .type('2025-07-21');

    // Click Add Task
    cy.contains('Add Task').click();

    // Filter by category
    cy.get('input[role="combobox"]').type('Work');
    cy.get('[role="option"]').contains('Work').click();

    // Filter by status
    cy.get('.flex-col > :nth-child(2) > .w-full').select('Completed');

    // Sort by priority
    cy.get(':nth-child(3) > .w-full').select('Priority');

    // Sort order descending
    cy.get(':nth-child(4) > .w-full').select('Descending');

    // Edit the task
    cy.get('.bg-yellow-500', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Change task description
    cy.get('[value="First mission"]')
      .clear()
      .type('Second Mission');

    // Change category
    cy.get('.p-6 > select.w-full').select('Personal');

    // Change priority
    cy.get('.fixed > .p-6 > div.mb-4 > :nth-child(2) > .mr-1').click();

    // Change date
    cy.get('.p-6 > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full')
      .clear()
      .type('2025-07-22');

    // Save changes
    cy.get('.flex > .bg-blue-500').click();

      // Filter by category
    cy.get('input[role="combobox"]').type('Personal');
    cy.get('[role="option"]').contains('Personal').click();

    // Delete the task
    cy.contains('Delete').click();

    // Visit About page
    cy.get('.text-blue-500').click();

    // Go back
    cy.go('back');
  });       
});
