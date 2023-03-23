function DashboardContent() {
    return (<ThemeProvider theme={mdTheme}></ThemeProvider>)
}

export default function Dashboard() {
    return <DashboardContent />
}