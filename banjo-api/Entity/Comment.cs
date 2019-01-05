using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entity
{
    [Table("Comments")]
    public class Comment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        
        [Required]
        [MaxLength(50)]
        public string AddedBy { get; set; }

        [Required]
        [MaxLength(50)]
        public string Source { get; set; }
        
        [Required]
        [MaxLength(4096)]
        public string Comments { get; set; }

        [DefaultValue(false)]
        public bool Approved { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreatedDateTime { get; set; }

        public DateTime? DeletedDateTime { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime ModifiedDateTime { get; set; }
    }
}
