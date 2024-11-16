class DashboardHeader {

    /**
     * Getter to get header on the dashboard page
     */
    get rootEl() {
        return $(".primary_header")
    }


    /**
     * Getter to get header title content
     */
    get headerTitle() {
        return this.rootEl.$('.app_logo').getText()
    }


}

export default DashboardHeader