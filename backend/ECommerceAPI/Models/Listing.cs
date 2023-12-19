namespace ECommerceAPI.Models
{
    public class Listing
    {
        public int Id { get; set; }
        public float Price { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        // public string imageUrl { get; set; }
    }
}
