class DashboardHeader {
    get rootEl() {
        return $(".primary_header")
    }

    get headerTitle() {
        return this.rootEl.$('.app_logo').getText()
    }


}

export default DashboardHeader