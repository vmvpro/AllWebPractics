using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebProjectCore.Models
{
	public interface IUser
	{
		 string Name { get; set; }
		 string Password { get; set; }
		 string Email { get; set; }
	}

	public class User: IUser
	{
		public string Name { get; set; }
		public string Password { get; set; }
		public string Email { get; set; }
	}
}
