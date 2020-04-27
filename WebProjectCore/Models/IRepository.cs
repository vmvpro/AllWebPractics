using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebProjectCore.Models
{
	public interface IRepository
	{

		IEnumerable<User> Users { get; }
		User this[int id] { get; }

		User AddUser(User user);

		//Reservation UpdateReservation(Reservation reservation);
		//void DeleteReservation(int id);
	}

}
