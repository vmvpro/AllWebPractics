using System.Collections.Generic;

namespace WebProjectCore.Models
{
	public class UserRepository : IRepository
	{
		private List<User> listUsers;

		public UserRepository()
		{
			listUsers = new List<User>()
			{
				new User(){Name = "vmvpro",Password = "123",Email = "vmvpro.com"}
			};
		}

		public IEnumerable<User> Users
		{
			get { return listUsers; }
		}

		//public User this[int id] => listUsers[id]
		public User this[int id]
		{
			get { return listUsers[id]; }
		}

		public User AddUser(User user)
		{
			listUsers.Add(user);
			return user;
		}
		//User this[int id] { get; }

		//Reservation AddReservation(Reservation reservation);
		//Reservation UpdateReservation(Reservation reservation);
		//void DeleteReservation(int id);
	}

}
