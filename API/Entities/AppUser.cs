namespace DatingApp.API.Entities{
    public class AppUser{
        // this is going to be PK and auto increment...
        public int Id { get; set; }
        // use for identity...the naming convention, UserName
        public string UserName { get; set; }
    }
}