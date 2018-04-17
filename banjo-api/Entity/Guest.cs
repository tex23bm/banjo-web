using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entity
{
    [Table("Guests")]
    public class Guest
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        [MaxLength(50)]
        public string Partner { get; set; }

        [DefaultValue(1)]
        public int TotalGuestsAllowed { get; set; }

        public int? ConfirmedGuests { get; set; }

        public DateTime CreatedDateTime { get; set; }
        public DateTime? DeletedDateTime { get; set; }
        public DateTime ModifiedDateTime { get; set; }

    }
}
