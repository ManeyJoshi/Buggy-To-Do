describe('Buggy To-Do app', function () {  
   it('Verify the to-do task', () => {
        cy.visit("https://bug-test-swart.vercel.app/");
        //Verify the Header
        cy.get('.text-3xl').contains('Extensive Buggy To-Do App');
        //Verify toggle button
        cy.get('.flex > .p-2').click();
        //Verify the test description
        cy.get('input[Placeholder="Task description"]').type('First mission');
        //Verify the combobox
        cy.get('.bg-white > :nth-child(2) > .w-full').select('Shopping');
        //Verify the priority
        cy.get(':nth-child(2) > .mr-1').click();
        //Verify the date pick
        cy.get('.react-datepicker__input-container > .w-full')
        .clear()
        .type('2025-07-21'); 
        //Verify add task button
        cy.contains('Add Task').click();
        
        //Verify the category filter
        //  cy.get('input[role="combobox"]')
        //   .clear()
        //   .type('Work'); 
        //Verify the status filter
        cy.get('.flex-col > :nth-child(2) > .w-full').select('Completed');
        //verify the sort by
        cy.get(':nth-child(3) > .w-full').select('Priority');
        //Verify the order
        cy.get(':nth-child(4) > .w-full').select('Descending');
        //Verify the select button
        cy.get('.mr-2').click();
        //Verify the edit 
        cy.get('.bg-yellow-500').click();
        //Verify the change text
        cy.get('[value="First mission"]')
        .clear()
        .type('Second Mission');
        //Verify the combobox
        cy.get('.p-6 > select.w-full').select('Personal');
        //Verify the change priority
        cy.get('.fixed > .p-6 > div.mb-4 > :nth-child(2) > .mr-1').click();
        //Verify the change date
        cy.get('.p-6 > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full')
        .clear()
        .type('2025-07-22');
        //Verify the save button
        cy.get('.flex > .bg-blue-500').click();
        cy.contains('Delete').click();
        //Verify the about button
        cy.get('.text-blue-500').click();
        cy.go('back');
    });       
});