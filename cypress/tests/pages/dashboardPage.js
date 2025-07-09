class DashboardPage {

    selectorList() {
        const selectors = {
            dashboardBody:".css-1idn90j-MuiGrid-root",
            everyoneButton:"[data-test='nav-public-tab']",
            friendsButton: '[href="/contacts"]',
            mineButton:'[href="/personal"]',
            homeButton:"[data-test='sidenav-home']",
            myAccountButton:"[href='/user/settings']",
            banksButton:"[href='/bankaccounts']",
            notificationsButton:"[data-test='sidenav-notifications']",
            logoutButton:"[data-test='sidenav-signout']"

        }
        return selectors
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal','/')
        cy.get(this.selectorList().dashboardBody)

    }

    dashboardPanel() {
        cy.get(this.selectorList().everyoneButton).click()
        cy.get(this.selectorList().friendsButton).click()
        cy.get(this.selectorList().mineButton).click()
        cy.get(this.selectorList().homeButton).click()
        cy.get(this.selectorList().myAccountButton).click()
        cy.get(this.selectorList().banksButton).click()
        cy.get(this.selectorList().notificationsButton).click()
        cy.get(this.selectorList().logoutButton).click()

    }

}

export default DashboardPage