class AppConfig {
    public port = 4000;
    public mysqlHost = "localhost";
    public mysqlUser = "root";
    public mysqlPassword = "";
    public mysqlDatabase = "cinema"; // Fill in the database name
}

const appConfig = new AppConfig();

export default appConfig;
