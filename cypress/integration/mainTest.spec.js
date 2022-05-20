describe('Open site and fail to login', () => {
    it('Opens Signin screen, types info in to fields then click loggin', () => {
        cy.visit('https://projectgroup12-2f2a2.firebaseapp.com/')
        cy.get('.signInContainer').get('[type="password"]').type('not correct')
        cy.get('.signInContainer').get('.email').type('not correct')
        cy.get('.signInContainer').get('.signUpButton').click()
    })
})
describe('checks elements in header', () => {
    it('looks at elements in header one by one', () => {
        cy.visit('https://projectgroup12-2f2a2.firebaseapp.com/')
        cy.get('.headerContainer').get('h2').contains('Camera Version:')
        cy.get('.headerContainer').get('.middlecontainer').contains('KTH-LINK')
        cy.get('.headerContainer').get('.rightContainer').get('.homeIcon').contains('go to home screen')
        cy.get('.headerContainer').get('.rightContainer').get('.teamIcon').contains('go to creator page')
        cy.get('.headerContainer').get('.rightContainer').get('.logoutIcon').contains('logout')
        //cy.get('.headerContainer').get('.rightContainer').get('.form-switch').find('input').should('have.attr','checkbox')
    })
})



describe('jumps between Views a bit', () => {
    it('jumps between creator page and loggin screen', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('https://projectgroup12-2f2a2.firebaseapp.com/')
        cy.contains('KTH-LINK')
        cy.get('.rightContainer').get('.logoutIcon').click()
        cy.url().should('include','signInUser')
        cy.get('.rightContainer').get('g').click()
        cy.url().should('include','CreatorPage')
        cy.get('.rightContainer').get('g').click()
        cy.url().should('include','CreatorPage')
        cy.get('.rightContainer').get('.logoutIcon').click()
        cy.url().should('include','signInUser')
        cy.get('.rightContainer').get('.logoutIcon').click()
        cy.url().should('include','signInUser')
        cy.get('.rightContainer').get('g').click()
        cy.url().should('include','CreatorPage')
        cy.get('.rightContainer').get('.logoutIcon').click()
        cy.url().should('include','signInUser')
        cy.get('.rightContainer').get('g').click()
        cy.url().should('include','CreatorPage')
        cy.get('.rightContainer').get('.logoutIcon').click()
        cy.url().should('include','signInUser')

    })
})


describe('Open site and logs in', () => {
    it('Opens Signin screen, types info in to fields then successfully loggs in', () => {
        cy.visit('https://projectgroup12-2f2a2.firebaseapp.com')
    
        cy.contains('KTH-LINK')
        cy.get('#root').contains('KTH-LINK')
        cy.get('.signInContainer').get('[type="password"]').type('dud123')
        cy.get('.signInContainer').get('.email').type('dud@tst.se')
        cy.get('.signInContainer').get('.signUpButton').click()
        cy.url().should('include','home')
    })
  })
describe('filters out some images using the searchbar', () => {
    it('Manged to manipulate the number of shown elements', () => {
        cy.visit('https://projectgroup12-2f2a2.firebaseapp.com')
        cy.get('.signInContainer').get('[type="password"]').type('dud123')
        cy.get('.signInContainer').get('.email').type('dud@tst.se')
        cy.get('.signInContainer').get('.signUpButton').click()
        cy.url().should('include','home')
        cy.get('.blobsList').find('.elementBox').its('length').then(($before) => {

            cy.get('.bodyButtons').get('.searchBar').type('15')

            cy.get('.blobsList').find('.elementBox').its('length').should(($after) => {
              expect($after).to.be.lte($before)
            })
            cy.get('.bodyButtons').get('.searchBar').clear()
            cy.get('.blobsList').find('.elementBox').its('length').should(($after) => {
                expect($after).to.be.eq($before)
              })

        })
    })
})

describe('Testing darkmode switch', () => {
    it('Manged to dark mode and back', () => {
        cy.visit('https://projectgroup12-2f2a2.firebaseapp.com')
        cy.get('#root').get('#light')
        cy.get('.form-switch').get('[type="checkbox"]').check({force: true})
        cy.get('#root').get('#dark')
        cy.get('.form-switch').get('[type="checkbox"]').uncheck({force: true})
        cy.get('#root').get('#light')
    })
})
/*
// font know how to compare current date format

describe('testing most recent picture button', () => {
    it('Manged to manipulate the number of shown elements', () => {
        cy.visit('https://projectgroup12-2f2a2.firebaseapp.com')
        cy.get('.signInContainer').get('[type="password"]').type('dud123')
        cy.get('.signInContainer').get('.email').type('dud@tst.se')
        cy.get('.signInContainer').get('.signUpButton').click()
        cy.url().should('include','home')

        cy.get('.bodyButtons').get('.lastUploadedImageButton').click()
        cy.url().should('include','/summary/')
        cy.get('.summaryData').last().find('div').then(($data) => {
            // store the button's text
            const txt = $data.text()

            cy.get('.previousSummaryButton').click()
          
            // compare the two buttons' text
            // and make sure they are different
            cy.get('.summaryData').get('.tag').last().find('div').then(($data2) => { 
              expect($data2.text()).to.be.lte(txt)
            })

            cy.get('.nextSummaryButton').click()
            cy.get('.summaryData').get('.tag').last().find('div').then(($data2) => { 
                expect($data2.text()).to.be.lte(txt)
            })
  
        })
    })
})*/

describe('checking home page functions', () => {
    it('looks att the side buttons and make sure they have names', () => {
        cy.visit('https://projectgroup12-2f2a2.firebaseapp.com/')
        cy.get('.signInContainer').get('[type="password"]').type('dud123')
        cy.get('.signInContainer').get('.email').type('dud@tst.se')
        cy.get('.signInContainer').get('.signUpButton').click()

        cy.get('.bodyButtons').children().its('length').should('eq',7)
        cy.get('.bodyButtons').find('.searchBar').invoke('attr','placeholder').should('eq','Search for date...')
        cy.get('.bodyButtons').find('.lastUploadedImageButton').invoke('attr','title').should('eq','go to most recent picture')
        cy.get('.bodyButtons').find('.reverseButton').invoke('attr','title').should('eq','reverse order')
        cy.get('.bodyButtons').find('[title="retrieve new image"]')
        cy.get('.bodyButtons').find('[title="camera info"]')
        cy.get('.bodyButtons').find('[title="go to Azure"]')
        cy.get('.bodyButtons').find('[title="go to Firebase"]')

        cy.get('.elementBox').find('.blobs').find('.image').should('have.attr', 'src').should('include','.jpg')
        cy.get('.elementBox').find('.blobs').find('.dateAndTime').invoke('text').then((text)=>{
            
            cy.get('.blobsList').find('.elementBox').its('length').should((length) => {
                expect(text.length).to.be.eq(19*length+1)
            })
        })
    })
})

describe('testing reverse order button', () => {
    it('checks if the first and last image switched places', () => {
        cy.visit('https://projectgroup12-2f2a2.firebaseapp.com/')
        cy.get('.signInContainer').get('[type="password"]').type('dud123')
        cy.get('.signInContainer').get('.email').type('dud@tst.se')
        cy.get('.signInContainer').get('.signUpButton').click()
        
        cy.get('.blobsList').find('.elementBox').first().find('.dateAndTime').then(($first) => {
            const ftxt = $first.text()
          
            cy.get('.blobsList').find('.elementBox').last().find('.dateAndTime').then(($last) => { 
                const ltxt = $last.text()
                cy.get('.reverseButton').click()
                expect($last.text()).to.not.be.eq(ftxt)
                cy.get('.blobsList').find('.elementBox').last().find('.dateAndTime').then(($newlast) => { 
                    expect($newlast.text()).to.be.eq(ftxt)
                })

                cy.get('.blobsList').find('.elementBox').first().find('.dateAndTime').then(($newfirst) => { 
                    expect($newfirst.text()).to.be.eq(ltxt)
                })
                cy.get('.reverseButton').click()

                cy.get('.blobsList').find('.elementBox').last().find('.dateAndTime').then(($newlast) => { 
                    expect($newlast.text()).to.be.eq(ltxt)
                })

                cy.get('.blobsList').find('.elementBox').first().find('.dateAndTime').then(($newfirst) => { 
                    expect($newfirst.text()).to.be.eq(ftxt)
                })
            })
        })      
    })
})

describe('Testing cammera info button', () => {
    it('checks that stuff is dispalyed', () => {
        cy.visit('https://projectgroup12-2f2a2.firebaseapp.com/')
        cy.get('.signInContainer').get('[type="password"]').type('dud123')
        cy.get('.signInContainer').get('.email').type('dud@tst.se')
        cy.get('.signInContainer').get('.signUpButton').click()

        cy.get('.bodyButtons').find('[title="camera info"]').click()
        cy.url().should('include','cameraPage')
        cy.get('.cameraPictureContainer').find('.cameraImage').should('have.attr', 'src', 'https://projectgroup12-2f2a2.firebaseapp.com/cameraPicture.3d4d1956.jpg')
        cy.get('.cameraPageData').children().its('length').should('eq',9)


        cy.get('.cameraPageView').find('.goBackButton').click()
        cy.url().should('include','home')
    })
})


