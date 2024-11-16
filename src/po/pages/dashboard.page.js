import DashboardHeader from "../components/dashboardComponents/dashboardHeader.component"

class DashboardPage {
    constructor() {
        this.url = "/inventory.html"
        this.dashboardHeader = new DashboardHeader
    }


    async open() {
        await browser.url(this.url)
    }
}

export default DashboardPage;